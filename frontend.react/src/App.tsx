import React from 'react'
import Navbar from './components/Navbar'
import Market from './components/Market'
import TokenInterceptor from './utils/TokenInterceptor'
import GlobalStyle from './style'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import ItemDetails from 'components/ItemDetails'
import SetAuth from 'utils/isAuth'
import Home from './components/Home'
import Footer from 'components/Footer'

function App(): JSX.Element {
  TokenInterceptor()
  SetAuth()

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="itemDetails/:id" element={<ItemDetails />} />
        <Route path="market" element={<Market />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
