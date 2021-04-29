import React from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Wall from './components/Wall'
import { tokenInterceptor, InvalidTokenInterceptor } from './utils/interceptors'
import { useDispatch } from 'react-redux'
import GlobalStyle from './style'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import ItemDetails from 'components/ItemDetails'

function App() {
  tokenInterceptor()
  InvalidTokenInterceptor()
  const dispatch = useDispatch()
  localStorage.getItem('token') &&
    dispatch({
      type: 'AUTHENTICATED',
      payload: true,
    })

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
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="itemDetails/:id" element={<ItemDetails />} />
          </Routes>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
