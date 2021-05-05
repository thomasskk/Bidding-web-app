import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../hook'
import { Logo, Nav, Links, BurgerButton, BurgerLink, Link, Overflow } from './style'
import { Noise } from '../../style'

export default function Navbar(): JSX.Element {
  const dispatch = useAppDispatch()
  const [toggle, setToggle] = useState(false)
  const authenticated = useAppSelector((state) => state.authenticated)

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

  return (
    <ThemeProvider theme={{ toggle: toggle }}>

      {toggle && <Overflow />}
      {links()}

      <BurgerButton onClick={() => setToggle(!toggle)} />
      <BurgerLink> {links()}</BurgerLink>
      <Nav />
      {!toggle && <Logo to="/"> BIDDING</Logo>}
    </ThemeProvider>
  )
}
