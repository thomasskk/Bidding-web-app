import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'
import mixins from '../../utils/mixins'
import { createGlobalStyle } from 'styled-components'
import { Nav } from 'components/Navbar/style'

export const NavStyle = createGlobalStyle`
  ${Nav} {
    z-index: 202;
  }
`

export const Container = styled<any>(InfiniteScroll)`
  ${mixins.flex('center')};
  flex-wrap: wrap;
  padding: 20px;
  gap: 30px;
  margin: 100px 250px 0 250px;
`
