import { useState, useEffect, useRef } from 'react'

import Form from './Form'
import PageLink from './PageLink'
import FormAddList from './FormAddList'
import List from './List'
import Filters from './Filters'
import InputText from './InputText'

import { StyledMain } from './styles/Main.styled'
import { StyledMessage } from './styles/Message.styled'
import { MainButton } from './styles/Buttons.styled'



export default function Application ({ openModal, history }) {
  //Hooks

  //dades pressupost
  const [formvalues, setFormValues] = useState([
    {
      name: 'web',
      text: 'Una pàgina web (500€)',
      preu: 500,
      checked: false
    },
    {
      name: 'seo',
      text: 'Una consultoria SEO (300€)',
      preu: 300,
      checked: false
    },
    {
      name: 'ads',
      text: 'Una campanya de Google Ads (200€)',
      preu: 200,
      checked: false
    }
  ])
  const [pagines, setPagines] = useState(1)
  const [idiomes, setIdiomes] = useState(1)
  const [preuCheckBoxes, setPreuCheckboxes] = useState(0)
  const [preuFinal, setPreuFinal] = useState(0)

  //missatge d'alerta
  const [message, setMessage] = useState('')

  //dades llista
  const [nom, setNom] = useState('')
  const [client, setClient] = useState('')
  const [list, setList] = useState([])

  //dades per filtrar
  const [option, setOption] = useState('')
  const [filteredList, setFilteredList] = useState([])
  const [cercador, setCercador] = useState('')

  //control primer render
  const firstUpdate = useRef(true)



  //Calcular preu total checkboxes + pagines + idiomes
  useEffect(() => {
    formvalues[0].checked ? setPreuFinal(preuCheckBoxes + (pagines * idiomes * 30)) : setPreuFinal(preuCheckBoxes)
  }, [formvalues, idiomes, pagines, preuCheckBoxes])

  //Filtrar la llista de pressupostos
  useEffect(() => {
    const handleFilter = () => {
      switch (option) {
        case 'nomradio':
          setFilteredList([...list.sort((a, b) => (a.nom.toLowerCase() > b.nom.toLowerCase()) ? 1 : -1)])
          break;
        case 'dateradio':
          setFilteredList([...list.sort((a, b) => (a.date < b.date) ? 1 : -1)])
          break;
        case 'resetradio':
          setFilteredList([...list.sort((a, b) => (a.date > b.date) ? 1 : -1)])
          break;
        default:
          return
      }
    }
    handleFilter()
  }, [list, option])

  // Cerca a la llista
  useEffect(() => {
    const handleSearch = () => {
      setFilteredList([...list.filter(({ nom }) => nom.includes(cercador))])
    }
    handleSearch()
  }, [list, cercador])

  // Guardar llista al localstorage
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    localStorage.setItem('llista', JSON.stringify(list))
  }, [list])

  //Obtenir llista de localstorage
  useEffect(() => {
    if (localStorage.getItem('llista')) {
      setList(JSON.parse(localStorage.getItem('llista')))
      setFilteredList(JSON.parse(localStorage.getItem('llista')))
      return
    }
    setList([])
    setFilteredList([])
  }, [])

  //Obtenir pressupost de localstorage o de la URL
  useEffect(() => {

    if (localStorage.getItem('pressupost')) {
      const res = localStorage.getItem('pressupost')
      const { values, pagines, idiomes, checkboxes, preu } = JSON.parse(res)
      setFormValues(values)
      setPagines(pagines)
      setIdiomes(idiomes)
      setPreuCheckboxes(checkboxes)
      setPreuFinal(preu)
    }
    if (history.location.search) {
      const params = new URLSearchParams(history.location.search)
      const newArray = [
        {
          name: 'web',
          text: 'Una pàgina web (500€)',
          preu: 500,
          checked: params.get("paginaWeb") === 'true'
        },
        {
          name: 'seo',
          text: 'Una consultoria SEO (300€)',
          preu: 300,
          checked: params.get("campaniaSeo") === 'true'
        },
        {
          name: 'ads',
          text: 'Una campanya de Google Ads (200€)',
          preu: 200,
          checked: params.get("campaniaAds") === 'true'
        }
      ]
      setFormValues(newArray)
      setPreuCheckboxes(parseInt(params.get('pCheckboxes')))
      setPagines(parseInt(params.get('nPaginas')))
      setIdiomes(parseInt(params.get('nIdiomas')))
    }
  }, [history])

  // modificar url
  useEffect(() => {
    const url = `app?paginaWeb=${formvalues[0].checked}&campaniaSeo=${formvalues[1].checked}&campaniaAds=${formvalues[2].checked}&nPaginas=${pagines}&nIdiomas=${idiomes}&pCheckboxes=${preuCheckBoxes}`
    history.push(url)
  }, [formvalues, pagines, idiomes, preuCheckBoxes, history])






  //Functions

  //Calcular el preu de les checkboxes
  const updateCheckbox = (id) => {
    const updateArray = [...formvalues]
    const index = formvalues.findIndex(value => value.name === id)
    updateArray[index].checked = !updateArray[index].checked
    setFormValues(updateArray)

    const suma = preuCheckBoxes + (formvalues[index].checked ? + formvalues[index].preu : - formvalues[index].preu)
    setPreuCheckboxes(suma)
  }

  //Actualitzar el nombre de pàgines
  const updatePagines = (value) => {
    value === '' ? setPagines('') : setPagines(parseInt(value))
  }

  //Actualitzar el nombre d'idiomes
  const updateIdiomes = (value) => {
    value === '' ? setIdiomes('') : setIdiomes(parseInt(value))
  }

  //Botons dels inputs number
  const buttonChange = (id, value) => {
    if (id === 'pagines') {
      if (pagines === '' && value === '+') setPagines(1)
      else if (pagines === '' && value === '-') setPagines(0)
      else if (pagines >= 0 && value === '+') setPagines(pagines + 1)
      else if (pagines > 0 && value === '-') setPagines(pagines - 1)

    }
    if (id === 'idiomes') {
      if (idiomes === '' && value === '+') setIdiomes(1)
      else if (idiomes === '' && value === '-') setIdiomes(0)
      else if (idiomes >= 0 && value === '+') setIdiomes(idiomes + 1)
      else if (idiomes > 0 && value === '-') setIdiomes(idiomes - 1)
    }
  }

  //Guardar el pressupost al localstorage
  const saveData = () => {
    const pressupost = {
      values: formvalues,
      pagines: pagines,
      idiomes: idiomes,
      checkboxes: preuCheckBoxes,
      preu: preuFinal
    }

    localStorage.setItem('pressupost', JSON.stringify(pressupost))
    showMessagePressupost('Pressupost Guardat')
  }

  //Borrar el pressupost del localstorage
  const removeData = () => {
    localStorage.removeItem('pressupost')
    showMessagePressupost('Pressupost Esborrat')
  }

  //Mostra el missatge de alerta
  const showMessagePressupost = (text, error = undefined) => {
    setMessage(text)
    const message = document.getElementById('message')
    message.classList.remove('show')
    void message.offsetHeight;
    message.classList.add('show')
    error ? message.classList.add('error') : message.classList.remove('error')
  }

  //Afegeix el pressupost a la llista
  const addToList = () => {
    let validation = ''
    const nomInput = document.getElementById('nom')
    const clientInput = document.getElementById('client')

    // No camps buits
    if (nom === '') {
      nomInput.classList.add('error')
      validation = 'Omple tots el camps'
    } else {
      nomInput.classList.remove('error')
    }

    if (client === '') {
      clientInput.classList.add('error')
      validation = 'Omple tots el camps'
    } else {
      clientInput.classList.remove('error')
    }

    // No noms repetits
    list.forEach(pressupost => {
      if (pressupost.nom === nom) validation = 'Ja existeix un pressupost amb aquest nom'
    })


    if (validation !== '') {
      showMessagePressupost(validation, 'error')
    } else {
      let date = new Date().toUTCString();
      const newItem = {
        web: formvalues[0].checked,
        seo: formvalues[1].checked,
        adds: formvalues[2].checked,
        pagines,
        idiomes,
        nom,
        client,
        preuFinal,
        date
      }
      const newArray = [...list, newItem]
      setList(newArray)
      setFilteredList(newArray)
      setNom('')
      setClient('')
      showMessagePressupost('Pressupost afegit a la llista')
    }
  }

  //Eliminar de la llista
  const removeFromList = (name) => {
    const newArray = list.filter(pressupost => pressupost.nom !== name)
    setList(newArray)
    setFilteredList(newArray)
    showMessagePressupost('Pressupost eliminat de la llista')
  }

  //Canviar el filtre
  const sortBy = (id) => {
    setOption(id)
  }

  //Render
  return (
    <StyledMain>

      {/* Formulari pressupost  */}
      <div className="container">
        <p>Qué vols fer?</p>
        <Form
          values={formvalues}
          checkboxChange={(e) => updateCheckbox(e.target.name)}
          pagines={pagines}
          idiomes={idiomes}
          paginesChange={(e) => updatePagines(e.target.value)}
          idiomesChange={(e) => updateIdiomes(e.target.value)}
          buttonChange={(e) => buttonChange(e.target.id, e.target.value)}
          openModal={openModal}
        />
        <p>Preu: {preuFinal}€</p>
        <MainButton onClick={() => saveData()}>Guardar</MainButton>
        <MainButton onClick={() => removeData()}>Esborrar</MainButton>
      </div>

      {/* Formulari per afegir  */}
      <div className="container">
        <p>Vols afegir el pressupost a la llista?</p>
        <FormAddList nomChange={setNom} clientChange={setClient} nom={nom} client={client} />
        <MainButton onClick={() => addToList()}>Afegir</MainButton>
      </div>

      {/* Llista  */}
      <div className="container">
        <InputText update={setCercador} />
        <Filters sort={sortBy} />
        <List list={filteredList} remove={removeFromList} />
      </div>

      <PageLink url="/" text="<-- Tornar Enrere" />
      <StyledMessage id="message">{message}</StyledMessage>
    </StyledMain>
  )
}
