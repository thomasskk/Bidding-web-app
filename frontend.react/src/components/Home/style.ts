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
`

export const DTitle = styled.div`
  span {
    font-family: 'Spectral', serif;
    font-weight: bold;
    font-size: 2.5em;
  }
`

export const DText = styled.div`
  max-width: 300px;
  margin-left: 80px;
  h6:nth-child(1) {
    font-size: 0.9em;
    margin: 0;
    letter-spacing: 1px;
    margin-bottom: 5px;
    font-weight: 600;
    text-transform: uppercase;
  }
  span:nth-child(2) {
    font-size: 0.9em;
  }
`
