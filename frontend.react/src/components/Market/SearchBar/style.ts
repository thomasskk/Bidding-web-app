import styled from 'styled-components'
import mixins from '../../../utils/mixins'

export const Wrapper = styled.div`
  ${mixins.flex('center', 'center')};
  font-size: 0.9em;
`

export const Search = styled.div`
  ${mixins.flex('none', 'center', 'none', 1)};
  max-width: 500px;
  background: white;
  padding: 0;
  margin-top: 200px;
  z-index: 500;
  position: relative;
`

export const SearchItem = styled.input`
  ${mixins.border};
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  font-size: 1em;
  &::placeholder {
    font-size: 1em;
  }
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
  &:focus {
    ${ListCategory} {
      visibility: visible;
    }
  }
`
export const ItemListCategory = styled.div`
  background: white;
  height: 40px;
  font-size: 0.9em;

  transition: background 0.4s ease-in-out;
  &:hover {
  }
`
