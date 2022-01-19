import styled from 'styled-components'

export const StyledTitle = styled.main`
display: flex;
flex-direction: column;
align-items: center;
width: 40%;
margin: 0 auto;

p{
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 1.5rem;
}

ol{
  width: 70%;
}

li{
  text-align:left;
  font-size: 1.2rem;
}

a{
  display: inline-block;
  margin-top: 2em;
  padding: 1em;
  background-color: #333;
  color: #fff;
  text-decoration: none;

  &:hover{
    transform: scale(1.1);
  }
}
`