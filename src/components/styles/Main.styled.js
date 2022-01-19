import styled from 'styled-components'

export const StyledMain = styled.main`
position: relative;
display: grid;
grid-template-columns: 30% 30% 40%;
width: 70%;
margin: 0 auto;
text-align: left;

@media (max-width: 1440px) {
    width:90%;
}

.container {
  margin: 20px;
}
`
