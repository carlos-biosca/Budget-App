import styled, { keyframes } from 'styled-components';

const show = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90%{
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const StyledMessage = styled.h3`
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  padding: 1em;
  margin-top: 2em;
  margin-bottom: 2em;
  background-color: #333;
  color: #fff;
  text-align: center;
  opacity: 0;

  &.show{
    animation: ${show} 2.5s ease;
  }

  &.error{
    background-color: #ed3d3d;
  }

`