import { useState, useEffect, useRef } from "react";
import { Container, ItemContainer } from "./style";
import InfiniteScroll from "react-infinite-scroll-component";
import bookmark from "./img/bookmark.svg"

function Wall() {

  const randomizeImg = () => {
    var items = [];
    for (let index = 0; index < 30; index++) {
      items.push(
        <ItemContainer>
          <img src={`https://picsum.photos/id/${Math.floor(Math.random() * 100)}/300/300`} alt="" />
          <div>
            <label>Wonderful antique pottery</label>
            <label> Current price : 1240e</label>
          </div>
          <div>
            <label>Bidding ends : </label>
            <img src={bookmark} alt="" srcset=""/>
            <button> Bid </button>
          </div>
        </ItemContainer>
      );
    }

    return items;
  };
  
  return (
    <>
      <Container>{randomizeImg()}</Container>
    </>
  );
}

export default Wall;
