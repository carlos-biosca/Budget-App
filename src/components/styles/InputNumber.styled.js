import styled, { css } from "styled-components";

export const StyledInputNumber = styled.div`
  position: absolute;
  width: 300px;
  padding: 1.5em 0.8em;
  border: 5px solid black;
  border-radius: 10px;
  transform: scale(0);
  transform-origin: left top;
  opacity: 0;

  ${({ checked }) => checked && css`
    position: static;
    transform: scale(1);
    opacity: 1;
    transition: opacity .35s ease, transform 0.5s linear;
  ` }

  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5em 0;
  }

  label{
    margin-right: auto;
  }

  input {
    width: 30px;
    height: 35px;
    margin: 0 5px;
    padding: 0 0.5em;
    border: none;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }

  img{
    width: 20px;
    margin-left: 10px;
    cursor:pointer;
  }

  @media (max-width: 1024px) {
    width:200px;

    label{
      font-size: 0.7rem;
    }
    input {
      width: 20px;
    }
  }
`