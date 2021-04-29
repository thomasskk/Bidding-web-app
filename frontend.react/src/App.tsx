import React from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Wall from './components/Wall'
import TokenInterceptor from './utils/TokenInterceptor'
import GlobalStyle from './style'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import ItemDetails from 'components/ItemDetails'
import SetAuth from 'utils/isAuth'

function App(): JSX.Element {
  TokenInterceptor()
  SetAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <GlobalStyle />
              <SearchBar />
              <Navbar />
              <Wall />
            </>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="itemDetails/:id" element={<ItemDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
