import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'
import mixins from '../../utils/mixins'

export const Container = styled<any>(InfiniteScroll)`
  ${mixins.flex("center")};
  margin-top: 100px;
  flex-wrap: wrap;
  padding: 20px;
  gap: 30px;
`
