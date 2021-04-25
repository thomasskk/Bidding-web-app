import styled from 'styled-components'
import mixins from '../../utils/mixins'

export const Nav = styled.nav`
  ${mixins.flex('space-between', 'center')};
  background-color: black;
  max-height: 90px;
`

export const Logo = styled.div`
  margin: 5%;
  height: 90px;
  display: flex;
  img {
    width: 150px;
    object-fit: cover;
  }
`

export const Button = styled.button`
  ${mixins.flex('space-between', 'center')};
  ${mixins.border};
  width: 77px;
  height: 42px;
  position: relative;
  cursor: pointer;
  border-radius: 21px;
  padding: 5px 7px 5px 15px;
  margin: 5%;
`

export const Dropdown = styled.div`
  flex-basis: 18px;
  display: flex;
`

export const Profile = styled.div`
  flex-basis: 29px;
  display: flex;
`

export const Menu = styled.div`
  ${mixins.flex('none', 'none', 'column')};
  z-index: 2;
  top: 50px;
  right: 0;
  padding-top: 9px 0px 9px;
  overflow: hidden;
  position: absolute;
  background-color: white;
  border-radius: 15px;
  box-shadow: 5px 5px 10px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  transform: translateY(-20px);
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`

export const MenuOption = styled.option`
  ${mixins.flex('center', 'center')};
  ${mixins.border};
  width: 200px;
  height: 40px;
  cursor: pointer;
  background-color: white;
  &:hover {
    background: whitesmoke;
  }
`
