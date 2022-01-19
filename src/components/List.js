import { StyledList } from "./styles/List.styled"

import ListItem from './ListItem'

export default function List ({ list, remove }) {
  return (
    <StyledList>
      {
        list.map((pressupost, index) => {
          return (<ListItem pressupost={pressupost} key={index} remove={remove} />)
        })
      }
    </StyledList>
  )
}
