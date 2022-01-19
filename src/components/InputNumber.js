import { InputButton } from './styles/Buttons.styled'

import info from '../assets/images/senal-de-informacion.png'

export default function InputNumber ({ name, text, number, change, buttonChange, openModal }) {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <InputButton type="button" id={name} value="+" onClick={buttonChange}>+</InputButton>
      <input type="number" name={name} id={name} value={number} onChange={change} />
      <InputButton type="button" id={name} value="-" onClick={buttonChange}>-</InputButton>
      <img src={info} alt="icono de información" onClick={() => { openModal(text) }} />
    </div>
  )
}
