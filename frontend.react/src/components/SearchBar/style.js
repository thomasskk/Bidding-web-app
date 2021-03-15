import styled from "styled-components";

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
