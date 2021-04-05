import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Wall from './components/Wall'
import tokenInterceptor from './utils/tokenInterceptor'

const GlobalStyle = createGlobalStyle`
* {
  box-sizing:border-box;
  font-family: Arial, Helvetica, sans-serif;
}
body {
  background:#f7f7f7
}
`

function App() {
  tokenInterceptor()

  return (
    <>
      <GlobalStyle />
      <SearchBar />
      <Navbar />
      <Wall />
    </>
  )
}

export default App
