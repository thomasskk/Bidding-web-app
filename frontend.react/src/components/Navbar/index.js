import { useEffect, useRef, useState } from 'react'

import AnimLoad from '../../utils/animLoad'
import ClickOutsideListener from '../../utils/ClickOutsideListener'
import Auth from '../Auth'

import dropdownJson from './img/dropdown.json'
import logoImg from './img/logo.png'
import profileJson from './img/profile.json'
import { Button, Dropdown, Logo, Menu, MenuOption, Nav, Profile } from './style'

export default function Navbar() {
  const profileContainer = useRef(null)
  const [profileAnim, setProfileAnim] = useState(null)

  const dropDownContainer = useRef(null)
  const [dropDownAnim, setdropDownAnim] = useState(null)
  const [showAuth, setShowAuth] = useState(false)

  useEffect(() => {
    AnimLoad(setdropDownAnim, dropDownContainer, dropdownJson, 5.5)
    AnimLoad(setProfileAnim, profileContainer, profileJson, 2)
  }, [])

  const menuRef = useRef()
  const onClickMenu = () => {
    setIsActive(!isActive)
    dropDownAnim && dropDownAnim.playSegments([0, 60], true)
  }

  const [isActive, setIsActive] = ClickOutsideListener(
    menuRef,
    false,
    () => dropDownAnim && dropDownAnim.playSegments([60, 120], true)
  )

  const authSetState = () => {
    setShowAuth(!showAuth)
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
          <Menu className={`${isActive ? 'active' : 'inactive'}`} ref={menuRef}>
            <MenuOption onClick={authSetState}>Login</MenuOption>
            <MenuOption onClick={authSetState}>Sign up</MenuOption>
          </Menu>
        </Button>
      </Nav>
      {showAuth && <Auth onSubmit={authSetState} />}
    </>
  )
}
