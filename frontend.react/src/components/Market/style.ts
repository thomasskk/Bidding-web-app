import styled from 'styled-components'
import mixins from '../../utils/mixins'

export const Container = styled.div`
  ${mixins.flex('center')};
  flex-wrap: wrap;
  padding: 20px;
  gap: 30px;
  margin: 10vw 10vw 0 10vw;
  @media screen and (max-width: 540px) {
    margin: 1vw 1vw 0 1vw;
  }
  position: relative;
  z-index: 201;
  min-height: 100vh;
`

export const Loader = styled.div`
  width: 100%;
  height: 50px;
`
