import styled from 'styled-components'
import { Menu } from '../Navbar/style'

export const Container = styled.div`
  z-index: 1;
  top: -50px;
  height: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  @media (max-width: 1000px) {
    top: -85px;
  }
`

export const Search = styled.div`
  display: flex;
  flex: 1;
  @media (max-width: 1000px) {
    margin-top: 100px;
  }
  margin: 65px 10px 0px 10px;
  border: none;
  outline: none;
  max-width: 500px;
  height: 50px;
  border-radius: 21px;
  background: white;
  box-shadow: 5px 5px 10px;
  display: flex;
  padding: 0;
  align-items: center;
`

export const SearchItem = styled.button`
  align-items: center;
  outline: none;
  border: none;
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
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
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
  top: 70px;
`

export const Category = styled.button`
  position: relative;
  justify-content: space-between;
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 21px;
  background: white;
  label {
    margin-left: 30px;
  }
  &:hover {
    background: whitesmoke;
  }
`
