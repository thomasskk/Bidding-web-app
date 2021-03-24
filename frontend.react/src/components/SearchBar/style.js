import styled from "styled-components";
import { Menu } from "../Navbar/style";

export const Container = styled.div`
  z-index: 1;
  top: -50px;
  height: 0;
  position: sticky;
  display: flex;
  justify-content: center;
`;

export const Search = styled.div`
  margin-top: 65px;
  border: none;
  outline: none;
  width: 500px;
  height: 50px;
  border-radius: 21px;
  background: white;
  box-shadow: 5px 5px 10px;
  display: flex;
  padding: 0;
  align-items: center;
`;

export const SearchItem = styled.button`
  align-items: center;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 21px;
  background: white;
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
`;

export const Separator = styled.div`
  height: 20px;
  border-left: 1px solid gray;
`;

export const MenuCategory = styled(Menu)`
  top: 140px;
  right: 39%;
`;

export const Category = styled.button`
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
`;
