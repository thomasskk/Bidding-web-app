import React from 'react'
import Navbar from 'components/Navbar'
import Market from 'components/Market'
import { GlobalStyle, Noise, CoreWrapper } from './style'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from 'components/Auth/Login'
import Register from 'components/Auth/Register'
import ItemDetails from 'components/ItemDetails'
import setAuth from 'utils/setAuth'
import Home from 'components/Home'
import Footer from 'components/Footer'
import tokenInterceptor from 'utils/tokenInterceptor'

function App(): JSX.Element {
  tokenInterceptor()
  setAuth()

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Noise />
      <CoreWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="market" element={<Market />} />
          <Route path="market/itemDetails/:id" element={<ItemDetails />} />
        </Routes>
      </CoreWrapper>
      <Footer />
    </BrowserRouter>
  )
}

export default App
