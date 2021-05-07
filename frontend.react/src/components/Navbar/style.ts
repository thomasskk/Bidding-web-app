import styled, { css, createGlobalStyle } from 'styled-components'
import mixins from '../../utils/mixins'
import { Link as LinkRoot } from 'react-router-dom'
import { CoreWrapper } from '../../style'

export const Overflow = createGlobalStyle`
  html,
  body{
    overflow: hidden;
  }
  ${CoreWrapper} {
    opacity: 0.3;
    transform: translateX(50vw);
  }
`

export const Nav = styled.nav`
  ${mixins.flex('space-between', 'center')};
  @media screen and (max-width: 700px) {
    li {
      display: none;
    }
  }
  background: ${({ theme }) => (theme.isHome ? 'transparent' : mixins.color2())};
  height: 42px;
  position: fixed;
  z-index: 210;
  width: 100%;
  padding: 0 10% 0 10%;
  transition: 0.22s ease-in;
  transition-property: transform, height;
  ${({ theme }) => {
    return (
      theme.toggle &&
      css`
        transform: translateX(50vw);
        height: 0;
        border: none;
      `
    )
  }}
`

export const Logo = styled(LinkRoot)`
  font-weight: bold;
  font-size: 1.4em;
  letter-spacing: 5px;
  color: white;
  line-height: 0px;
  @media screen and (max-width: 700px) {
    margin-left: calc(50% - 30px);
  }
`

export const Links = styled.li`
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
  ${mixins.flex('space-evenly')}
  max-width:300px;
  width: 100%;
`

export const Link = styled(LinkRoot)`
  @media screen and (max-width: 700px) {
    ${mixins.flex('none', 'none', 'column')};
  }
  color: ${({ theme }) => (theme.toggle ? 'black' : 'white')};
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
  width: 50vw;
  height: 100vh;
  background: white;
  z-index: 203;
  ${mixins.shadow}
  display: ${({ theme }) => (theme.toggle ? 'block' : 'none')};
  animation: display 0.22s ease-in;
  position: fixed;
  padding-top: 50px;
`

export const BurgerButtonWrapper = styled.div`
  transform: ${({ theme }) =>
    theme.toggle ? 'translate(calc(50vw - 34px), 10px)' : 'translate(5vw, 10px)'};
  position: fixed;
  z-index: 211;
  height: 20px;
  cursor: pointer;
  transition: transform 0.22s ease-in;
`

export const BurgerButton = styled.div`
  outline: none;
  background: ${({ theme }) => (theme.u ? 'black' : 'white')};
  height: 2px;
  width: 20px;
  display: none;
  transform: translateY(10px);
  @media screen and (max-width: 700px) {
    display: block;
  }
  &:before {
    content: '';
    display: block;
    position: absolute;
    height: 2px;
    width: 20px;
    background: ${({ theme }) => (theme.toggle ? 'black' : 'white')};
    transform: translateY(-7px);
    transition: 0.22s ease-in;
    transition-property: transform, width;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 2px;
    width: 20px;
    background: ${({ theme }) => (theme.toggle ? 'black' : 'white')};
    transform: translateY(7px);
    transition: 0.22s ease-in;
    transition-property: transform, width;
  }

  ${({ theme }) => {
    return (
      theme.toggle &&
      css`
        background: transparent;
        &:before {
          transform: rotate(45deg);
          width: 23px;
        }
        &:after {
          transform: rotate(135deg);
          width: 23px;
        }
      `
    )
  }}
`
