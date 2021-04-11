import styled from 'styled-components'
import { Menu } from '../Navbar/style'
import mixins from '../../utils/mixins'

export const Container = styled.div`
  ${mixins.flex('center')};
  z-index: 1;
  top: -50px;
  height: 0;
  position: sticky;
  @media (max-width: 1000px) {
    top: -85px;
  }
`

export const Search = styled.div`
  ${mixins.border};
  ${mixins.flex('none', 'center', 'none', 1)};
  @media (max-width: 1000px) {
    margin-top: 100px;
  }
  margin: 65px 10px 0px 10px;
  max-width: 500px;
  height: 50px;
  border-radius: 21px;
  background: white;
  box-shadow: 5px 5px 10px;
  padding: 0;
`

export const SearchItem = styled.button`
  ${mixins.border};
  height: 100%;
  align-items: center;
  border-radius: 21px;
  background: white;
  flex: 1;
  &:hover {
    &,
    * {
      background: whitesmoke;
    }
  }
  &:focus-within {
    &,
    * {
      background: white;
    }
  }
  input {
    ${mixins.border};
    width: 100%;
    padding: 10px;
    &:focus::placeholder {
      color: transparent;
    }
    &::placeholder {
      text-align: center;
    }
  }
`

export const Separator = styled.div`
  height: 20px;
  border-left: 1px solid gray;
`

export const MenuCategory = styled(Menu)`
  position: absolute;
  top: 60px;
  right: 0;
`

export const Category = styled.button`
  ${mixins.flex('space-between', 'center', 'none', 1)};
  ${mixins.border};
  position: relative;
  height: 100%;
  border-radius: 21px;
  background: white;
  label {
    ${mixins.flex('center', 'center', 'none', 1)};
  }
  &:hover {
    background: whitesmoke;
  }
`
