import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'
import mixins from '../../utils/mixins'
import { createGlobalStyle } from 'styled-components'
import { Link, Logo, Nav } from 'components/Navbar/style'

export const NavStyle = createGlobalStyle`
    ${Logo}, ${Link}{
      color:${mixins.color2()}
    }
    ${Nav} {
      background:${mixins.color2()};
      z-index:203;
    }
`

export const Container = styled<any>(InfiniteScroll)`
  ${mixins.flex('center')};
  flex-wrap: wrap;
  padding: 20px;
  gap: 30px;
  margin: 10vw 10vw 0 10vw;
  @media screen and (max-width: 540px) {
    margin: 1vw 1vw 0 1vw;
  }
`
