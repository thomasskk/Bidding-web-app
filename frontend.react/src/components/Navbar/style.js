import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  max-height: 90px;
`;

export const Logo = styled.div`
  margin: 5%;
  height: 90px;
  display:flex;
  img {
    width:150px;
    object-fit: cover;
  }
`;

export const Button = styled.button`
  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  border: none;
  outline: none;
  width: 77px;
  height: 42px;
  border-radius: 21px;
  padding: 5px 7px 5px 15px;
  margin: 5%;
`;

export const Dropdown = styled.div`
  flex-basis: 18px;
  display: flex;
`;

export const Profile = styled.div`
  flex-basis: 29px;
  display: flex;
`;

export const Menu = styled.div`
padding-top: 9px;
padding-bottom: 9px;
overflow: hidden;
display: flex;
flex-direction: column;
position: absolute;
background-color: white;
border-radius: 15px;
box-shadow: 5px 5px 10px;
top: 78px;
right: 5%;
opacity: 0;
visibility: hidden;
transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
transform: translateY(-20px);

&.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
`;

export const MenuButton = styled.button`
  cursor: pointer;
  width: 231px;
  height: 40px;
  border: none;
  outline: none;
  background-color: white;
  &:hover {
    background: whitesmoke;
  }
`;
