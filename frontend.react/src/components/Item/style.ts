import styled from 'styled-components'
import mixins from '../../utils/mixins'

export const ItemContainer = styled.div`
  ${mixins.flex('none', 'center', 'column', 'flex-grow')};
  cursor: pointer;
  margin: 30px 10px 30px 10px;
  background: white;
  min-width: 0;
  max-width: 350px;
  border: 1px solid black;
  z-index: 201;
  position: relative;
`

export const ItemCore = styled.div`
  ${mixins.flex('none', 'none', 'column')};
  width: 100%;
  padding: 5px 20px 10px 20px;
`

export const Name = styled.span`
  font-size: 21px;
  margin-bottom: 12px;
  font-weight: 600;
  text-transform: uppercase;
`

export const LastBid = styled.label`
  font-size: 0.9em;
  span:nth-of-type(3) {
    color: #02f75c;
  }
`

export const EthSymbol = styled.span`
  &::after {
    color: black;
    font-family: sans-serif;
    content: 'Ξ';
  }
`

export const AskedPrice = styled.span`
  font-size: 0.9em;
`

export const Price = styled.label`
  ${mixins.flex('space-between', 'center')};
`

export const ItemFooter = styled.div`
  ${mixins.flex('space-between', 'center')};
  width: 100%;
  padding: 5px 20px 10px 20px;
  button {
    ${mixins.flex('space-evenly', 'center', 'column')};
    ${mixins.border};
    cursor: pointer;
    background: black;
    color: white;
    width: 55px;
    height: 23px;
  }
`

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`
