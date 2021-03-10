import styled from "styled-components";

export const Menu = styled.div`
padding-top: 9px;
padding-bottom: 9px;
overflow: hidden;
display: flex;
flex-direction: column;
position: absolute;
background: white;
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
  background: white;
  &:hover {
    background: whitesmoke;
  }
`;
