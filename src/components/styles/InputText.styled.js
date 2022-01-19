import styled from 'styled-components'


export const StyledInputText = styled.div`
position: relative;
display: flex;
justify-content: center;

input{
    width: 90%;
    padding: 0.5em;
    padding-left: 20px;
    margin-bottom: 1em;
    text-indent: 10px;
}

img{
  position: absolute;
  width: 20px;
  left:15px;
  top: 6px;
}

@media (max-width: 1024px) {
    img {
      left: 10px;
    }
  }
`