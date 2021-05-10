import { CoreWrapper } from 'style'
import styled, { createGlobalStyle } from 'styled-components'

export const Center = createGlobalStyle`
${CoreWrapper} {
  margin: 0 8vw 0 8vw;
  @media screen and (max-width: 540px) {
    margin: 0 1vw 0 1vw;
  }
  z-index: 202;
}
`

export const Container = styled.div`
  display: grid;
  gap: 70px;
  grid-template-columns: repeat(auto-fill, minmax(0, 350px));
  justify-content: center;
`

export const Loader = styled.div`
  width: 100%;
  height: 50px;
  transform: translateY(-2000px);
`
  