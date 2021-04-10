import React from 'react'
import { createGlobalStyle } from 'styled-components'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Wall from './components/Wall'
import tokenInterceptor from './utils/tokenInterceptor'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

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
  const dispatch = useDispatch()
  localStorage.getItem('token') &&
    dispatch({
      type: 'AUTHENTICATED',
      payload: true,
    })
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
