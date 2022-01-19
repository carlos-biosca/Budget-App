import { StyledFormAddList } from "./styles/Forms.styled"

export default function FormAddList ({ nomChange, clientChange, nom, client }) {
  return (
    <StyledFormAddList>
      <label htmlFor="nom">Nom del pressupost</label>
      <input type="text" name="nom" id="nom" value={nom} onChange={(e) => nomChange(e.target.value)} />
      <label htmlFor="client">Nom del client</label>
      <input type="text" name="client" id="client" value={client} onChange={(e) => clientChange(e.target.value)} />
    </StyledFormAddList>
  )
}
