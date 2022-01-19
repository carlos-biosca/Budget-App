import styled from 'styled-components'

export const StyledList = styled.ul`
  border: 3px solid black;
  height: 500px;
  list-style: none;
  padding-left: 0;
  overflow: auto;

  &::-webkit-scrollbar{
    width: 5px;
  }
  &::-webkit-scrollbar-thumb{
    background-color: #333;
  }
`

export const StyledListItem = styled.li`
  margin: 5px 5px 20px;
  padding-bottom: 1em;
  border: 1px solid #333;

  div{
    display: flex;
    justify-content: space-between;
    padding: 0.5em 1.2em;
  }

  div:first-child{
    align-items: center;
    margin-top: 0;
    margin-bottom: 0.5em;
    padding: 1em 1.2em;
    background-color: #f77754;
    font-weight: bold;

    & span {
      text-transform: capitalize;
    }
  }

  button{
    padding: 5px 10px;
    background-color: #fff;
    border: none;
    cursor: pointer;
    font-weight: bold;

    &:hover{
      filter: invert(1);
    }
  }
`