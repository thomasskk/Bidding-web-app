import styled from 'styled-components'
import mixins from '../../utils/mixins'

export const MainImg = styled.embed`
  height: 820px;
  width: 100%;
`

export const Text = styled.div`
  ${mixins.flex()};
  position: absolute;
  top: 200px;
  transform: translateX(calc(-50% - 23px));
  left: 50%;
`

export const Span = styled.span`
  padding: 3px;
  background: white;
  color: black;
  font-family: 'Spectral', serif;
  font-weight: bold;
  font-size: clamp(20px, 6vw, 60px);
  display: inline-block;
  line-height: 0.8;
  white-space: nowrap;
`

const margin = '8px'
const translate = '15px'

export const Line1 = styled.div`
  transform: translateY(calc(-1 * ${translate}));
  margin-right: ${margin};
`

export const Line3 = styled.div`
  margin-top: ${margin};
  ${mixins.flex()}
  transform: translateX(45px);
  span:nth-child(2) {
    margin-left: ${margin};
    transform: translateY(${translate});
  }
`

export const Hr = styled.hr<{ width: string }>`
  border: none;
  height: 1px;
  background: black;
  width: ${(props) => props.width || 'palevioletred'};
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
  margin:60px 0 250px 0;
`

export const RTitle = styled.h6`
  font-family: 'Spectral', serif;
  font-weight: bold;
  font-size: clamp(1.2em, 6vw, 2.5em);
  margin: 0;
`
