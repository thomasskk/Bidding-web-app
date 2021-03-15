import React from "react";
import Navbar from "./components/Navbar";
import Wall from "./components/Wall";
import SearchBar from "./components/SearchBar";
import { createGlobalStyle } from "styled-components";

function App() {
  return (
    <>
      <GlobalStyle />
      <SearchBar />
      <Navbar />
      <Wall />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
* {
  box-sizing:border-box;
  font-family: Arial, Helvetica, sans-serif;
}
body {
  background:#f7f7f7
}
`;
