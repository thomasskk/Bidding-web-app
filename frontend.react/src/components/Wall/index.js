import { useState, useEffect, useRef } from "react";
import { Container, ItemContainer } from "./style";
import InfiniteScroll from "react-infinite-scroll-component";
import Bookmark from "./Bookmark";
import axios from "axios";

function Wall() {
  const [item, setItem] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await axios("http://localhost:8080/item");
      setItem(data.data);
    }
    getData();
  }, []);

  const returnItem = () => {
      return item.map(item => {
        return (  
          <ItemContainer key={item.itemId}> 
            <img
              src={`https://robohash.org/${item.itemId}/300/300`}
              alt=""
            />
            <div>
              <label>{item.name}</label>
              <label> Current price : {item.initialPrice}$</label>
            </div>
            <div>
              <label>Bidding ends : {item.biddingEndingDate}</label>
              <button> Bid </button>
            </div>
          </ItemContainer>
        );
      })
  }

  return (
    <>
      <Container dataLength={item.length}>
        {returnItem()}
      </Container>
    </>
  );
}

export default Wall;
