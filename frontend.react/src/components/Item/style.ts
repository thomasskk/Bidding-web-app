import styled from 'styled-components'
import mixins from '../../utils/mixins'

export const LabelTime = styled.label`
  flex: 1;
  width: 170px;
  display: inline-block;
  font-size: 0.7em;
`
export const ItemContainer = styled.div`
  ${mixins.flex('none', 'center', 'column', 'flex-grow')};
  flex: 1 0 250px;
  position: relative;
  cursor: pointer;
  margin: 30px 10px 30px 10px;
  border-radius: 10px;
  background: white;
  min-width: 0;
  max-width: 300px;
`

export const ItemCore = styled.label`
  ${mixins.flex('none', 'none', 'column')};
  width: 100%;
  padding: 5px 10px 50px 10px;
  color: white;
  background: black;
  border-radius: 0 0 10px 10px;

  // name
  label:nth-of-type(1) {
    font-size: 21px;
    margin-bottom: 12px;
    font-weight: 600;
    text-transform: uppercase;
    color: white;
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
      font-size:1.1em;
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
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 3px 20px 3px 20px;
  background: white;
  border-radius: 0 0 10px 10px;
  border: 3px solid #292827;
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

export const ItemImage = styled.div`
  min-height: 0;
  min-width: 0;
  width: 100%;
  height: 100%;
  display: flex;

  img {
    border: 3px solid black;
    border-radius: 10px 10px 0 0;
    background: url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/vector-seamless-texture-with-abstract-flowers-endless-background-ethnic-sea_M1h0rTqO_thumb.jpg);
    background-size: 100% 100%;
    min-height: 0;
    min-width: 0;
    width: 100%;
    height: 100%;
  }
`
