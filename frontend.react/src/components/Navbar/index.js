import React, { useState, useEffect, useRef } from "react";
import { Nav, Logo, Dropdown, Button, Profile } from "./style";
import logoImg from "./img/logo.png";
import AnimLoad from "../../utils/AnimLoad";
import dropdownJson from "./img/dropdown.json";
import profileJson from "./img/profile.json";

function Navbar() {
  const dropDownContainer = useRef(null);
  const [dropDown, setdropDown] = useState(null);
  const [dropDownOn, setdropDownOn] = useState(true);

  const profileContainer = useRef(null);
  const [profile, setProfile] = useState(null);

  function onClick() {
    setdropDownOn(!dropDownOn);
    dropDownOn
      ? dropDown.playSegments([0, 70], true)
      : dropDown.playSegments([70, 140], true);
  }

  useEffect(() => {
    new AnimLoad(setdropDown, dropDownContainer, dropdownJson);
    new AnimLoad(setProfile, profileContainer, profileJson);
  }, []);

  return (
    <Nav>
      <Logo>
        <img src={logoImg} alt="" />
      </Logo>
      <Button
        onClick={() => {
          onClick();
        }}
        onMouseEnter={() => {
          profile.goToAndPlay(0);
        }}
      >
        <Dropdown ref={dropDownContainer} />
        <Profile ref={profileContainer} />
      </Button>
    </Nav>
  );
}

export default Navbar;
