import { StyledLink } from "./styles/Link.styled"

export default function PageLink ({ url, text }) {
  return (
    <StyledLink to={url}>{text}</StyledLink>
  )
}
