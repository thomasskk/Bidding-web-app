import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import AnimLoad from '../../utils/animLoad'
import ClickOutsideListener from '../../utils/ClickOutsideListener'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import { useSelector } from 'react-redux'
import dropdownJson from './img/dropdown.json'
import logoImg from './img/logo.png'
import profileJson from './img/profile.json'
import { Button, Dropdown, Logo, Menu, MenuOption, Nav, Profile } from './style'

export default function Navbar() {
  const profileContainer = useRef(null)
  const [profileAnim, setProfileAnim] = useState(null)

  const dropDownContainer = useRef(null)
  const [dropDownAnim, setdropDownAnim] = useState(null)
  const [showLogin, setshowLogin] = useState(false)
  const [showRegister, setshowRegister] = useState(false)
  const authenticated = useSelector((state) => state.authenticated)
  const dispatch = useDispatch()

  useEffect(() => {
    AnimLoad(setdropDownAnim, dropDownContainer, dropdownJson, 5.5)
    AnimLoad(setProfileAnim, profileContainer, profileJson, 2)
  }, [])

  const menuRef = useRef()
  const onClickMenu = () => {
    setMenuIsActive(!isMenuActive)
    dropDownAnim && dropDownAnim.playSegments([0, 60], true)
  }

  const [isMenuActive, setMenuIsActive] = ClickOutsideListener(
    menuRef,
    false,
    () => dropDownAnim && dropDownAnim.playSegments([60, 120], true)
  )

  const login = () => {
    setshowLogin(!showLogin)
  }
  const register = () => {
    setshowRegister(!showRegister)
  }
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
        <Logo>
          <img src={logoImg} alt="" />
        </Logo>
        <Button
          onClick={onClickMenu}
          onMouseEnter={() => profileAnim.playSegments([0, 122], true)}
        >
          <Dropdown ref={dropDownContainer} />
          <Profile ref={profileContainer} />
          <Menu className={`${isMenuActive ? 'active' : 'inactive'}`} ref={menuRef}>
            {authenticated ? (
              <MenuOption onClick={logout}>Logout</MenuOption>
            ) : (
              <>
                <MenuOption onClick={login}>Login</MenuOption>
                <MenuOption onClick={register}>Sign up</MenuOption>
              </>
            )}
          </Menu>
        </Button>
      </Nav>
      {showLogin && <Login show={login} />}
      {showRegister && <Register show={register} />}
    </>
  )
}
