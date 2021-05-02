import styled from 'styled-components'
import mixins from '../../utils/mixins'

export const Nav = styled.nav`
  ${mixins.flex('space-between', 'center')};
  height: 40px;
  position: sticky;
  top: 0;
  z-index: 11;
  background: white;
  padding: 0 80px 0 80px;
`
export const Logo = styled.span`
  font-family: 'Spectral', serif;
  font-weight: bold;
  font-size: 1.7em;
  letter-spacing: 8px;
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
