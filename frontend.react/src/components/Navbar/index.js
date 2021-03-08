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
import shortid from "shortid";
import ClickOutsideListener from "../../utils/ClickOutsideListener";

function Navbar() {
  const  isMenuRender = useRef(false);
  
  const dropDownContainer = useRef(null);
  const [dropDownAnim, setdropDownAnim] = useState(null);
  const [dropDownOn, setDropDownOn] = useState(false);

  const profileContainer = useRef(null);
  const [profileAnim, setProfileAnim] = useState(null);

  // check click outside dropdown menu
  const menuRef = useRef();
  ClickOutsideListener(menuRef, () => {
    if (dropDownOn) {
      dropDownAnim.playSegments([60, 120], true);
      setDropDownOn(!dropDownOn);
    }
  });

  // onclick element => open dropdown menu
  function onClick() {
    isMenuRender.current = true
    if (!dropDownOn) {
      dropDownAnim.playSegments([0, 60], true);
      setDropDownOn(!dropDownOn);
    }
  }

  // load animation
  useEffect(() => {
    AnimLoad(setdropDownAnim, dropDownContainer, dropdownJson, 5.5);
    AnimLoad(setProfileAnim, profileContainer, profileJson, 2);
  }, []);

  return (
    <>
      <Nav>
        <Logo>
          <img src={logoImg} alt="" />
        </Logo>
        <Button>
          <div
            onClick={() => {
              onClick();
            }}
            onMouseEnter={() => {
              profileAnim.goToAndPlay(0);
            }}
          >
            <Dropdown ref={dropDownContainer} />
            <Profile ref={profileContainer} />
          </div>
          {isMenuRender.current && (
            <Menu key={shortid.generate()} display={dropDownOn} ref={menuRef}>
              <MenuButton>Log in</MenuButton>
              <MenuButton>Sign up</MenuButton>
            </Menu>
          )}
        </Button> 
      </Nav>
    </>
  );
}

export default Navbar;