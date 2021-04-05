import InfiniteScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'

export const Container = styled(InfiniteScroll)`
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
`

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px;
  border-radius: 10px;
  box-shadow: 0 0 0 1px hsla(0, 0%, 47.8%, 0.5);
  align-items: center;
  padding: 30px 30px 5px 30px;
  background: white;
  max-width: 400px;
  @media (max-width: 500px) {
    margin: 30px 0 0 0;
    padding: 10px 10px 0 10px;
  }
`

export const ItemCore = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0 50px 0;
  // name
  label:nth-of-type(1) {
    font-size: 21px;
    margin-bottom: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }
  //description
  label:nth-of-type(2) {
    font-size: 13px;
    margin-bottom: 12px;
  }
  //price
  label:nth-of-type(3) {
    font-size: 18px;
    margin-bottom: 12px;
    font-weight: 250;
  }
  //categorie
  label:nth-of-type(4) {
    font-size: 15px;
    font-weight: bold;
    display: none;
  }
`

export const ItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    align-items: center;
    justify-content: space-evenly;
    display: flex;
    justify-content: center;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: dodgerblue;
    color: white;
    border-radius: 10px;
    width: 55px;
    height: 20px;
  }
`

export const ItemImage = styled.div`
  min-height: 0;
  min-width: 0;
  width: 100%;
  height: 100%;

  img {
    border-radius: 10px;
    box-shadow: 0 0 0 1px hsla(0, 0%, 47.8%, 0.5);
    background: url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/vector-seamless-texture-with-abstract-flowers-endless-background-ethnic-sea_M1h0rTqO_thumb.jpg);
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    min-height: 0;
    min-width: 0;
  }
`

export const LabelTime = styled.label`
  flex: 1;
  max-width: 230px;
  display: inline-block;
  font-size: 12px;
  color: #232323;
`
