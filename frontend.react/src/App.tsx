import React from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Wall from './components/Wall'
import { tokenInterceptor, InvalidTokenInterceptor } from './utils/interceptors'
import { useDispatch } from 'react-redux'
import GlobalStyle from './style'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

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
    <Router>
      <Switch>
        <Route path="/home">
          <GlobalStyle />
          <SearchBar />
          <Navbar />
          <Wall />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
