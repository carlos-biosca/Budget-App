import { StyledListItem } from "./styles/List.styled"

export default function ListItem ({ pressupost, remove }) {
  const { nom, client, date, web, seo, adds, pagines, idiomes, preuFinal } = pressupost
  return (
    <StyledListItem>
      <div>
        <span>{nom}</span>
        <button onClick={(e) => remove(e.target.previousElementSibling.textContent)}>X</button>
      </div>
      <div>
        <span><strong>Client:</strong> {client}</span>
        <span><strong>{date.slice(5, 16)}</strong></span>
      </div>
      <div>
        <span><strong>Web:</strong> {web ? 'SI' : 'NO'}</span>
        <span><strong>Seo:</strong> {seo ? 'SI' : 'NO'}</span>
        <span><strong>Adds:</strong> {adds ? 'SI' : 'NO'}</span>
      </div>
      <div>
        <span><strong>Pàgines:</strong> {web ? pagines : '0'}</span>
        <span><strong>Idiomes:</strong> {web ? idiomes : '0'}</span>
        <span><strong>Preu:</strong> {preuFinal}€</span>
      </div>
    </StyledListItem>
  )
}
