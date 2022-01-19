import styled from 'styled-components'

export const StyledModal = styled.div`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
top: 0;
left: 0;
background: rgba(0, 0, 0, 0.7);
z-index: 10;
display: ${({ show }) => show ? 'flex' : 'none'};

p{
  width: 600px;
  padding: 2em 1em;
  background-color: #fff;
  border: 3px solid black;
  border-radius: 20px;
}
`