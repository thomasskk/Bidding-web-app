import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'
import mixins from '../../utils/mixins'

export const Container = styled(InfiniteScroll)`
  ${mixins.flex('space-evenly')};
  margin-top: 10%;
  flex-wrap: wrap;
  padding: 20px;
`
