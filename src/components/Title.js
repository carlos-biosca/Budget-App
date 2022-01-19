import PageLink from "./PageLink"

import { StyledTitle } from "./styles/Title.styled"

export default function Title () {
  return (
    <StyledTitle>
      <p><strong>Aplicació per calcular el pressupost d'una pàgina web.</strong></p>
      <p>Funcions de l'aplicació:</p>
      <ol>
        <li>Creació de pressupostos per pàgines web.</li>
        <li>Triar nombre de pàgines i d'idiomes del lloc web.</li>
        <li>Guardar el pressupost creat en LocalStorage.</li>
        <li>Creació d'un llistat de pressupostos.</li>
        <li>Diverses options per ordenar el llistat.</li>
        <li>Filtrar el llistat de pressupostos per nom.</li>
        <li>Persistència de la llista de pressupostos creats.</li>
        <li>L'usuari pot compartir la URL del pressupost que esta creant.</li>
      </ol>
      <PageLink url="/app" text="Començar" />
    </StyledTitle>
  )
}
