import styled from 'styled-components'
import mixins from '../../utils/mixins'

export const Nav = styled.nav`
  ${mixins.flex('space-between', 'center')};
  height: 40px;
  position: sticky;
  top: 0;
  z-index: 11;
  background: whitesmoke;
  padding: 0 10% 0 10%;
`
export const Logo = styled.span`
  font-family: 'Spectral', serif;
  font-weight: bold;
  font-size: 1.4em;
  letter-spacing: 5px;
`

export const Links = styled.span`
  ${mixins.flex('space-evenly')}
  max-width:300px;
  width: 100%;
  a {
    outline: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
