import { StyledCheckbox } from "./styles/Checkbox.styled"

export default function InputCheckbox ({ name, text, checked, checkboxChange }) {
  return (
    <StyledCheckbox>
      <input type="checkbox" name={name} id={name} checked={checked} onChange={checkboxChange} />
      <label htmlFor={name}>{text}</label>
    </StyledCheckbox>
  )
}
