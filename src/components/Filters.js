import { StyledFilters } from "./styles/Filters.styled"

export default function Filters ({ sort }) {
  return (
    <StyledFilters>
      <div onChange={(e) => sort(e.target.id)}>
        <input type="radio" name="filter" id="nomradio" />
        <label htmlFor="nomradio">A-Z</label>
        <input type="radio" name="filter" id="dateradio" />
        <label htmlFor="dateradio">Data</label>
        <input type="radio" name="filter" id="resetradio" />
        <label htmlFor="resetradio">Reset</label>
      </div>
    </StyledFilters>
  )
}
