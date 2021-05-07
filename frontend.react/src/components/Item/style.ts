import styled from 'styled-components'
import mixins from '../../utils/mixins'
import placeholder from 'assets/img/placeholder.png'

export const ItemContainer = styled.div`
  ${mixins.flex('none', 'center', 'column', 'flex-grow')};
  cursor: pointer;
  margin: 30px 10px 30px 10px;
  @media screen and (max-width: 420px) {
    margin: 10px 0 0 0;
  }
  background: white;
  min-width: 0;
  max-width: 350px;
  border: 1px solid black;
`

export const ItemCore = styled.div`
  ${mixins.flex('none', 'none', 'column')};
  width: 100%;
  padding: 5px 20px 10px 20px;
  @media screen and (max-width: 420px) {
    padding: 5px 10px 5px 10px;
  }
`

export const Name = styled.span`
  font-size: 21px;
  margin-bottom: 12px;
  font-weight: 600;
  text-transform: uppercase;
`

export const LastBid = styled.label`
  font-size: 0.9em;
  width: 100%;
  height: 100%;
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
  height: 100%;
  white-space: nowrap;
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
  width: 348px;
  height: 348px;
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 100%;
  }
`
