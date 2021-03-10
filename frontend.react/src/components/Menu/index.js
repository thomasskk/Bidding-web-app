import { useState, useEffect, useRef } from "react";



function Menu() {

  const isMenuRender = useRef(false);
  const [dropDownOn, setDropDownOn] = useState(false);

  const menuRef = useRef();

  return (
    <>
        <Menu className={`${isActive ? "active" : "inactive"}`} ref={menuRef}>
          <MenuButton>Log in</MenuButton>
          <MenuButton>Sign up</MenuButton>
        </Menu>
    </>
  );
}
