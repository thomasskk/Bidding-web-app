import styled, { css, createGlobalStyle } from 'styled-components'
import mixins from '../../utils/mixins'
import { Link as LinkRoot } from 'react-router-dom'

export const Overflow = createGlobalStyle`
  html  
  body{
    overflow: hidden;
  }
  
`

export const Nav = styled.nav`
  ${mixins.flex('space-between', 'center')};
  @media screen and (max-width: 700px) {
    justify-content: center;
    li {
      display: none;
    }
  }
  background: whitesmoke;
  height: 42px;
  position: fixed;
  z-index: 200;
  top: 0;
  width: 100%;
  padding: 0 10% 0 10%;
  transition: all 0.22s ease-in;
  transition-property: transform, height;

  & ~ div {
    transition: transform 0.22s ease-in;
    position: relative;
  }

  ${({ theme }) => {
    return (
      theme.toggle &&
      css`
        & ~ div {
          opacity: 0.3;
          transform: translateX(50vw);
        }
        & {
          transform: translateX(50vw);
          height: 0;
          border: none;
        }
      `
    )
  }}
`

export const Logo = styled(LinkRoot)`
  font-weight: bold;
  font-size: 1.4em;
  letter-spacing: 5px;
  margin: 4px 0 0 40px;
  position: fixed;
  z-index: 201;
  top: 0;
  color: ${mixins.color2(1)};
  @media screen and (max-width: 700px) {
    left: 50%;
    transform: translateX(calc(-50% - 25px));
  }
`

export const Links = styled.li`
  @media screen and (max-width: 700px) {
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 50px;
  }
  z-index: 201;
  ${mixins.flex('space-evenly')}
  max-width:300px;
  width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  margin-top: 8px;
`

export const Link = styled(LinkRoot)`
  color: ${mixins.color2(1)};
  outline: none;
  &:hover {
    text-decoration: underline;
  }
  ${({ theme }) => {
    return (
      theme.toggle &&
      css`
        width: 50vw;
        padding: 20px 0 20px 30px;
        &:hover {
          text-decoration: none;
          background: whitesmoke;
        }
      `
    )
  }}
`

export const BurgerLink = styled.div`
  top: 0;
  position: fixed;
  width: 50vw;
  height: 100%;
  background: white;
  ${mixins.shadow}
  display: ${({ theme }) => (theme.toggle ? 'block' : 'none')};
  animation: display 0.22s ease-in;
`

export const BurgerButton = styled.div`
  top: 0;
  z-index: 1000;
  transform: translate(20px, 9px);
  outline: none;
  border-top: 2px solid black;
  height: 17px;
  width: 20px;
  position: fixed;
  cursor: pointer;
  display: none;
  transition: all 0.22s ease-in;
  @media screen and (max-width: 700px) {
    display: block;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    height: 2px;
    width: 20px;
    background: black;
    top: 5px;
    transition: all 0.22s ease-in;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 2px;
    width: 20px;
    background: black;
    bottom: 1px;
    transition: all 0.22s ease-in;
  }

  ${({ theme }) => {
    return (
      theme.toggle &&
      css`
        position: absolute;
        transform: translate(calc(50vw - 30px), 10px);
        border-color: transparent;
        &:before {
          transform: rotate(45deg);
          width: 23px;
          left: -2px;
        }
        &:after {
          transform: rotate(135deg);
          bottom: 8px;
          width: 23px;
          left: -2px;
        }
      `
    )
  }}
`
