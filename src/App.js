import './App.css';

import { useState } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Title from './components/Title'
import Application from './components/Application';

import { StyledModal } from './components/styles/Modal.styled';

function App () {
  const [show, setShow] = useState(false)
  const [infoText, setInfoText] = useState('')

  const openModal = (text) => {
    setShow(true)
    setInfoText(text)
  }

  const closeModal = (id) => {
    if (id === 'modal') setShow(false)
  }

  //Render
  return (
    <div className="App">
      <StyledModal show={show} id="modal" onClick={(e) => closeModal(e.target.id)}>
        <p>{`Aquest component ha d'indicar el ${(infoText.toLocaleLowerCase())} que tindrà el lloc web.`}</p>
      </StyledModal>
      <h1>Pressupost</h1>
      <Router>
        <Route path="/" exact component={Title} />
        <Route path="/app" render={({ history }) => <Application openModal={openModal} history={history} />} />
      </Router>
    </div>
  );
}

export default App;
