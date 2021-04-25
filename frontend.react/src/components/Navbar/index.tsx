import { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook'
import AnimLoad from '../../utils/animLoad'
import ClickOutsideListener from '../../utils/ClickOutsideListener'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import dropdownJson from './img/dropdown.json'
import logoImg from './img/logo.png'
import profileJson from './img/profile.json'
import { Button, Dropdown, Logo, Menu, MenuOption, Nav, Profile } from './style'
import { AnimationItem } from 'lottie-web'

export default function Navbar() {
  const profileContainer = useRef<HTMLDivElement | null>(null)
  const [profileAnim, setProfileAnim] = useState<AnimationItem | null>(null)

  const dropDownContainer = useRef<HTMLDivElement | null>(null)
  const [dropDownAnim, setdropDownAnim] = useState<AnimationItem | null>(null)
  const [showLogin, setshowLogin] = useState<boolean>(false)
  const [showRegister, setshowRegister] = useState<boolean>(false)
  const authenticated = useAppSelector((state) => state.authenticated)
  const dispatch = useAppDispatch()

  useEffect(() => {
    AnimLoad(setdropDownAnim, dropDownContainer, dropdownJson, 5.5)
    AnimLoad(setProfileAnim, profileContainer, profileJson, 2)
  }, [])
  const menuRef = useRef<HTMLDivElement | null>(null)
  const onClickMenu = () => {
    setMenuIsActive(!isMenuActive)
    dropDownAnim?.playSegments([0, 60], true)
    profileAnim?.playSegments([0, 122], true)
  }

  const [isMenuActive, setMenuIsActive] = ClickOutsideListener(menuRef, false, () =>
    dropDownAnim?.playSegments([60, 120], true)
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
        <Button onClick={onClickMenu}>
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
