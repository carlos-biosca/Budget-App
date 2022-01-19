import { Link } from 'react-router-dom'
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 5em;
  font-size: 1.1rem;

  &:hover{
    color: #f77754;
  }
`