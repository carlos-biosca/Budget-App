import InputCheckbox from "./InputCheckbox"
import InputNumber from "./InputNumber"

import { StyledInputNumber } from "./styles/InputNumber.styled"

export default function Form ({ values, checkboxChange, pagines, idiomes, paginesChange, idiomesChange, buttonChange, openModal }) {
  return (
    <form>
      {
        values.map((value, index) => {
          if (value.name === 'web') {
            return <div key={index}>
              <InputCheckbox name={value.name} text={value.text} checked={value.checked} checkboxChange={checkboxChange} />
              <StyledInputNumber checked={value.checked}>
                <InputNumber name="pagines" text="Nombre de pàgines" number={pagines} change={paginesChange} buttonChange={buttonChange} openModal={openModal} />
                <InputNumber name="idiomes" text="Nombre d'idiomes" number={idiomes} change={idiomesChange}
                  buttonChange={buttonChange} openModal={openModal} />
              </StyledInputNumber>
            </div>
          } else {
            return <InputCheckbox name={value.name} text={value.text} checked={value.checked} checkboxChange={checkboxChange} key={index} />
          }
        })
      }
    </form>
  )
}
