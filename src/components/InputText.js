import search from '../assets/images/loupe.png'
import { StyledInputText } from "./styles/InputText.styled"

export default function InputText ({ update }) {
  return (
    <StyledInputText>
      <img src={search} alt="" />
      <input type="text" name="cerca" id="cerca" onKeyUp={(e) => update(e.target.value)} />
    </StyledInputText>
  )
}
