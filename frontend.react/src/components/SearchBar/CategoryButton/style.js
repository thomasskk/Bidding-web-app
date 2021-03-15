import styled from "styled-components";
import { Menu } from "../../Navbar/style";


export const MenuCategory = styled(Menu)`
  top: 140px;
  right: 39%;
`;

export const SearchButton = styled.div`
  display: flex;
  border-radius: 50%;
  height: 38px;
  width: 38px;
  svg {
    border-radius: 50%;
    background: #ce3434;
  }
  &:hover {
    height: 42px;
    width: 42px;
  }
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
