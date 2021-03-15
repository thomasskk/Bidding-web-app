import { useState, useEffect, useRef } from "react";
import {
  Nav,
  Logo,
  Dropdown,
  Button,
  Profile,
  Menu,
  MenuButton,
} from "./style";
import logoImg from "./img/logo.png";
import AnimLoad from "../../utils/AnimLoad";
import dropdownJson from "./img/dropdown.json";
import profileJson from "./img/profile.json";
import ClickOutsideListener from "../../utils/ClickOutsideListener";

export default function Navbar() {
  const profileContainer = useRef(null);
  const [profileAnim, setProfileAnim] = useState(null);

  const dropDownContainer = useRef(null);
  const [dropDownAnim, setdropDownAnim] = useState(null);

  useEffect(() => {
    AnimLoad(setdropDownAnim, dropDownContainer, dropdownJson, 5.5);
    AnimLoad(setProfileAnim, profileContainer, profileJson, 2);
  }, []);

  const menuRef = useRef();
  const onClick = () => {
    setIsActive(!isActive);
    dropDownAnim && dropDownAnim.playSegments([0, 60], true);
  };

  const [isActive, setIsActive] = ClickOutsideListener(
    menuRef,
    false,
    () => dropDownAnim && dropDownAnim.playSegments([60, 120], true)
  );

  return (
    <Nav>
      <Logo>
        <img src={logoImg} alt="" />
      </Logo>
      <Button
        onClick={onClick}
        onMouseEnter={() => profileAnim.playSegments([0, 122], true)}
      >
        <Dropdown ref={dropDownContainer} />
        <Profile ref={profileContainer} />
        <Menu className={`${isActive ? "active" : "inactive"}`} ref={menuRef}>
          <MenuButton>Log in</MenuButton>
          <MenuButton>Sign up</MenuButton>
        </Menu>
      </Button>
    </Nav>
  );
}
