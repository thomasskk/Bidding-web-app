import React, { useState, useEffect, useRef } from 'react'
import { Nav, Logo, Dropdown } from './NavbarElements'
import logoImg from './img/logo.png'
import Animation from '../../utils/Animation'
import DropDownJson from './img/dropdown.json'

function Navbar() {

    const container = useRef(null)

    const [isON, setIsOn] = useState()

    useEffect(() => {
        
        return Animation(DropDownJson,70,140,container,isON)
    
    }, [isON]);

    return (
        <Nav>
            <Logo src={logoImg} />
            <Dropdown ref={container} onClick={() => { setIsOn(!isON) }} />
        </Nav>
    )
}

export default Navbar
