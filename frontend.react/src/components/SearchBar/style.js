import styled from "styled-components";

export const Container = styled.div`
  top: -50px;
  height: 0;
  position: sticky;
  display: flex;
  justify-content: center;
`;

export const Search = styled.button`
  margin-top: 65px;
  border: none;
  outline: none;
  width: 500px;
  height: 50px;
  border-radius: 21px;
  background-color: white;
  box-shadow: 5px 5px 10px;
  display: flex;
  padding: 0;
  align-items: center;
`;

export const Separator = styled.div`
  height: 20px;
  border-left: 1px solid gray;
`;

export const SearchItem = styled.button`
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 21px;
  background-color: white;
  &:hover {
    &,
    * {
      background: whitesmoke;
    }
  }

  &:focus-within {
    &,
    * {
      background-color: white;
    }
  }

  input {
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    &:focus::placeholder {
      color: transparent;
    }
  }
`;

export const Category = styled.button`
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 21px;
  background-color: white;
  &:hover {
    & {
      background: whitesmoke;
    }
  }

  &:focus-within {
    & {
      background-color: white;
    }
  }

  input {
    padding: 10px;
    border-radius: 10px;
    border: none;
    outline: none;
    &:focus::placeholder {
      color: transparent;
    }
  }
`;



export const SearchButton = styled.div`
  flex-basis: 40px;
  display: flex;
  border-radius: 50%;
`;
