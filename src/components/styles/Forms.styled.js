import styled from 'styled-components'

export const StyledFormAddList = styled.div`
  display: flex;
  flex-direction: column;

  label{
    padding: 0.5em 0;
    font-size: 1.2rem;
    font-weight: bold;
  }

  input{
    padding: 0.5em;
    margin-bottom: 1em;

    &.error{
      border: 2px solid #ed3d3d;
    }
  }
`