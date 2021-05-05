import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'
import mixins from '../../utils/mixins'

export const Container = styled<any>(InfiniteScroll)`
  ${mixins.flex('center')};
  flex-wrap: wrap;
  padding: 20px;
  gap: 30px;
  margin: 100px 250px 0 250px;
`

export const Wrapper = styled.div`
  position: fixed;
  overflow: visible;
  height: 100%;
  z-index: 201;
`
