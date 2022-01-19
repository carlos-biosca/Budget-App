import styled from 'styled-components'

export const StyledFilters = styled.div`
display:flex;
justify-content: center;

input[type="radio"] {
  display: none;
}

label{
  display: inline-block;
  width: 100px;
  margin-right: 1rem;
  padding: 0.4em 0.2em;
  background-color: #f77754;
  color: #fff;
  border-radius: 3px;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
}

input:checked + label{
  background-color: #333;
}

input:last-of-type:checked + label{
  background-color: #f77754;
}

@media (max-width: 1024px) {
  label{
    width: 70px;
  }
}
`