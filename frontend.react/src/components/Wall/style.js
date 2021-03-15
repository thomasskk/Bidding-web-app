import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

export const Container = styled(InfiniteScroll)`
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 30px;
  border-radius: 10px;
  box-shadow: 0 0 0 1px hsla(0, 0%, 47.8%, 0.5);
  align-items: center;
  padding: 30px 30px 5px 30px;
  background: white;
  > img {
    border-radius: 10px;
    box-shadow: 0 0 0 1px hsla(0, 0%, 47.8%, 0.5);
    background: url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rDtN98Qoishumwih/vector-seamless-texture-with-abstract-flowers-endless-background-ethnic-sea_M1h0rTqO_thumb.jpg);
  }
  div:first-of-type {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5px 0 50px 0;
    // name
    label:first-of-type {
      font-size: 18px;
      margin-bottom: 12px;
    }
    // price
    label:last-of-type {
      font-size: 15px;
      font-weight: bold;
    }
  }

  // date
  div:last-of-type {
    display: flex;
    height: 30px;
    justify-content: space-between;
    button {
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
  }
`;
