import styled from 'styled-components'
import mixins from '../../utils/mixins'


export const MainImg = styled.embed`
  height: 100vh;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  
`

export const Text = styled.div`
  ${mixins.flex('none', 'none', 'column')}
  position: absolute;
  top: 200px;
  transform: translate(170%, -20%);
  z-index: 200;
`

export const Square = styled.div`
  position: absolute;
  background: ${mixins.color2()};
  height: 100vh;
  width: 50vw;
  z-index: 199;
`

export const Span = styled.span`
  width: min-content;
  display: inline-block;
  line-height: 1em;
  white-space: nowrap;
  letter-spacing: 2px;
  padding: 0 10px 0px 10px;
  margin: 30px 0 0 0;
  font-weight: bold;
  font-size: clamp(2.2em, 6vw, 3.4em);
  color: white;
  position: relative;
  margin-bottom: 0px;
`

export const Hr = styled.hr<{ width: string }>`
  border: none;
  height: 1px;
  background: black;
  width: ${(props) => props.width};
`

export const Description = styled.div`
  ${mixins.flex('center')};
  height: 200px;
  margin-top: 100px;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`

export const DTitle = styled.div`
  h6 {
    font-family: 'Spectral', serif;
    font-weight: bold;
    font-size: clamp(1.2em, 6vw, 2.5em);
    margin: 0;
  }
  @media screen and (max-width: 1000px) {
    ${mixins.flex('center')};
    margin-bottom: 30px;
  }
`

export const DRight = styled.div`
  ${mixins.flex('center', 'none', 'row')};
  @media screen and (max-width: 1000px) {
    div:nth-child(1) {
      margin-left: 0;
    }
    div:nth-child(2) {
      margin-left: 30px;
    }
    padding: 0 7% 0 7%;
    margin-bottom: 80px;
  }
`

export const DText = styled.div`
  max-width: 300px;
  margin-left: 80px;
  font-size: clamp(0.7em, 2vw, 0.9em);

  h6 {
    font-size: 0.9em;
    margin: 0;
    letter-spacing: 1px;
    margin-bottom: 5px;
    font-weight: 600;
    text-transform: uppercase;
    white-space: nowrap;
  }
`
export const Recent = styled.div`
  ${mixins.flex('center', 'none', 'row')};
  margin: 60px 0 250px 0;
`

export const RTitle = styled.h6`
  font-family: 'Spectral', serif;
  font-weight: bold;
  font-size: clamp(1.2em, 6vw, 2.5em);
  margin: 0;
`
