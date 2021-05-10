import styled from 'styled-components'
import mixins from 'utils/mixins'

export const Container = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  font-size: 0.8em;
  z-index: 204;
`

export const Search = styled.div`
  ${mixins.flex('none', 'center', 'none', 1)};
  background: white;
  margin-top: 150px;
`

export const SearchItem = styled.input`
  ${mixins.border};
  width: 100%;
  min-width: 0;
  padding: 10px;
`

export const Separator = styled.div`
  height: 20px;
  border-left: 1px solid gray;
`

export const List = styled.ul`
  visibility: hidden;
  padding: 0;
  margin: 0;
`

export const ArrowUpDown = styled.i`
  border: 1px solid black;
  border-width: 0 1px 1px 0;
  display: inline-block;
  height: 5px;
  width: 5px;
  padding: 3px;
  transform: translateX(20px) rotate(45deg);
  margin-bottom: 3px;
`

export const ItemList = styled.div`
  background: white;
  height: 40px;
  &[data-focus='false'] {
    transition: background 0.4s ease-in-out;
  }
  &[data-focus='true'] {
    background: #e6e6e6;
  }
`

export const FilterE = styled.div`
  ${mixins.flex('space-between', 'none', 'column')};
  width: fit-content;
  margin: 0;
`

export const Price = styled.div`
  ${mixins.flex('none', 'center')};
  margin: 20px 0 20px 0;
  span {
    background: white;
    height: 100%;
    padding: 10px;
    ${mixins.flex('center', 'center')};
  }
`

export const Range = styled(SearchItem)`
  max-width: 75px;
  margin-left: 5px;
`
export const SortAction = styled.div`
  background: white;
  max-width: max-content;
  width: 100%;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  cursor: pointer;
  height: 40px;
  margin-left: 5px;
  justify-content: end;
  &:focus {
    ${List} {
      visibility: visible;
    }
    ${ArrowUpDown} {
      transform: translateX(20px) rotate(-135deg);
      margin-bottom: 0;
      margin-top: 3px;
    }
  }
  span {
    width: 180px;
    display: inline-block;
    padding: 0;
  }
`

export const Category = styled(SortAction)`
  margin: 0;
`
