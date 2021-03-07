import React, { useState, useEffect, useRef } from "react";
import { Nav, Logo, Dropdown, Button, Profile, Menu, Menu2 } from "./style";
import logoImg from "./img/logo.png";
import AnimLoad from "../../utils/AnimLoad";
import dropdownJson from "./img/dropdown.json";
import profileJson from "./img/profile.json";

function Navbar() {
  const dropDownContainer = useRef(null);
  const [dropDownAnim, setdropDownAnim] = useState(null);
  const [dropDownOn, setDropDownOn] = useState(false);

  const profileContainer = useRef(null);
  const [profileAnim, setProfileAnim] = useState(null);

  function onClick() {
    setDropDownOn(!dropDownOn);
    dropDownOn
      ? dropDownAnim.playSegments([60, 120], true)
      : dropDownAnim.playSegments([0, 60], true);
  }

  useEffect(() => {
    AnimLoad(setdropDownAnim, dropDownContainer, dropdownJson, 4.5);
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
          {dropDownOn ? <Menu /> : <Menu2 />}
        </Button>
      </Nav>
    </>
  );
}

export default Navbar;
