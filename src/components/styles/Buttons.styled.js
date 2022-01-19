import styled from "styled-components";

const Button = styled.button`
  background-color: #f77754;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover{
    color: #333;
  }
`
export const InputButton = styled(Button)`
  width: 35px;
  padding: 0 0.2em;
  font-size: 2rem;
`

export const MainButton = styled(Button)`
  width: 100px;
  padding: 0.5em 0.2em;
  font-size: 1rem;
  margin-right: 1rem;
`