import styled from 'styled-components'
import mixins from '../../utils/mixins'

export const ItemContainer = styled.div`
  ${mixins.flex('none', 'center', 'column', 'flex-grow')};
  position: relative;
  cursor: pointer;
  margin: 30px 10px 30px 10px;
  background: white;
  min-width: 0;
  max-width: 350px;
  border: 1px solid black;
  z-index: 201;
`

export const ItemCore = styled.div`
  ${mixins.flex('none', 'none', 'column')};
  width: 100%;
  padding: 5px 10px 10px 10px;

  // name
  label:nth-of-type(1) {
    font-size: 21px;
    margin-bottom: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }
  //description
  label:nth-of-type(2) {
    font-size: 0.8em;
    margin-bottom: 12px;
    white-space: nowrap;
  }
  //price
  label:nth-of-type(3) {
    font-size: 0.9em;
    margin-bottom: 12px;
    font-weight: 250;
    span:nth-of-type(1) {
      color: gold;
    }
    span:nth-of-type(2) {
      color: slategray;
      font-size: 1.1em;
    }
    span:nth-of-type(3) {
      color: #02f75c;
    }
  }
  //categorie
  label:nth-of-type(4) {
    font-size: 15px;
    font-weight: bold;
  }
`

export const ItemFooter = styled.div`
  ${mixins.flex('space-between', 'center')};
  width: 100%;
  padding: 10px 20px 3px 20px;
  background: white;
  button {
    ${mixins.flex('space-evenly', 'center', 'column')};
    ${mixins.border};
    cursor: pointer;
    background-color: dodgerblue;
    color: white;
    border-radius: 7px;
    width: 55px;
    height: 23px;
  }
`

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`
