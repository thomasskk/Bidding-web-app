import React from "react";
import Navbar from "./components/Navbar";
import Wall from './components/Wall'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <>
      <SearchBar/>
      <Navbar/>
      <Wall/>
    </>
  );
}

export default App;
