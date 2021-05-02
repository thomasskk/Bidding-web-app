import React from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hook'
import { Logo, Nav, Links } from './style'

export default function Navbar(): JSX.Element {
  const authenticated = useAppSelector((state) => state.authenticated)
  const dispatch = useAppDispatch()

  const logout = () => {
    localStorage.removeItem('token')
    dispatch({
      type: 'AUTHENTICATED',
      payload: false,
    })
  }

  return (
    <>
      <Nav>
        <Link to="/">
          <Logo> BIDDING</Logo>
        </Link>
        <Links>
          <Link to="market">Market</Link>
          <Link to="login">Login</Link>
          <Link to="register">Sign up</Link>
        </Links>
      </Nav>
    </>
  )
}
