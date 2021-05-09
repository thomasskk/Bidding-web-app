import styled from 'styled-components'
import mixins from 'utils/mixins'

export const Container = styled.div`
  grid-column: 1 / -1;
  width: 100%;
`

export const Search = styled.div`
  ${mixins.flex('none', 'center', 'none', 1)};
  background: white;
  margin-top: 150px;
`

export const SearchItem = styled.input`
  ${mixins.border};
  width: 100%;
  padding: 10px;
`

export const Separator = styled.div`
  height: 20px;
  border-left: 1px solid gray;
`

export const ListCategory = styled.ul`
  visibility: hidden;
  padding: 0;
  margin: 0;
`

export const Category = styled.div`
  width: 250px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  position: relative;
  cursor: pointer;
  font-size: 0.8em;
  &:focus {
    ${ListCategory} {
      visibility: visible;
    }
  }
`

export const ItemListCategory = styled.div`
  background: white;
  height: 40px;
  &[data-focus='false'] {
    transition: background 0.4s ease-in-out;
    &:hover {
      background: #e6e6e6;
    }
  }
  &[data-focus='true'] {
    background: #e6e6e6;
  }
`

export const FilterE = styled.div`
  width: fit-content;
  margin: 0;
`

export const Price = styled.div`
  ${mixins.flex()};
  margin-top: 20px;
  justify-self: center;
`

export const From = styled(SearchItem)`
  max-width: 75px;
  margin-right: 15px;
`

export const To = styled(From)``
