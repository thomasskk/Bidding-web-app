import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useAppDispatch, useAppSelector } from 'hook'
import {
  Logo,
  Nav,
  Links,
  BurgerButton,
  BurgerLink,
  Link,
  Overflow,
  BurgerButtonWrapper,
} from './style'
import { useLocation } from 'react-router-dom'

export default function Navbar(): JSX.Element {
  const dispatch = useAppDispatch()
  const [toggle, setToggle] = useState(false)
  const authenticated = useAppSelector((state) => state.authenticated)
  const location = useLocation()

  const logout = () => {
    localStorage.removeItem('token')
    dispatch({
      type: 'AUTHENTICATED',
      payload: false,
    })
  }

  const links = () => {
    return (
      <Links>
        <Link to="market">Market</Link>
        {authenticated ? (
          <Link onClick={logout} to="">
            Logout
          </Link>
        ) : (
          <>
            <Link to="login">Login</Link>
            <Link to="register">Sign up</Link>
          </>
        )}{' '}
      </Links>
    )
  }

  const theme = {
    toggle: toggle,
    isHome: location.pathname === '/' ? true : false,
  }

  return (
    <ThemeProvider theme={theme}>
      {toggle && <Overflow />}
      <BurgerButtonWrapper onClick={() => setToggle(!toggle)}>
        <BurgerButton />
      </BurgerButtonWrapper>
      <Nav>
        {!toggle && <Logo to="/"> BIDDING</Logo>}
        {links()}
      </Nav>
      <BurgerLink> {links()}</BurgerLink>
    </ThemeProvider>
  )
}
