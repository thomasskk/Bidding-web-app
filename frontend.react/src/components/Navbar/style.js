import styled from 'styled-components'

export const Nav = styled.nav`
    display: flex;
    background-color:black;
    max-height:90px;
    justify-content: space-between;
	border-radius: 6px;   
    margin:7px;
`

export const Dropdown = styled.div`
    flex:1;
    max-width:40%;
`

export const Logo = styled.div`
    min-width:0;
    min-height:0;
    display:flex;
    margin-left:2%;
`

export const Button = styled.button`
    display:flex;
    border-radius: 21px;    
    margin:1.2%; 
    padding:5px 5px 5px 12px;
    border: none;
    justify-content:space-between;
    align-items:center;
`

export const Profile = styled.div`
    flex:1;
    max-width:40%;
`
