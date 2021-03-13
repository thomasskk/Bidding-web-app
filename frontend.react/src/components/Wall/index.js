import { useState, useEffect } from "react";
import { Container, ItemContainer } from "./style";
import Bookmark from "./Bookmark";
import axios from "axios";
import shortid from "shortid";

function Wall() {

  const [itemData, setItemData] = useState([]);
  const [item, setItem] = useState([]);
  const [slice, setSlice] = useState(0);


  useEffect(() => {
    (async ()  => setItemData(await (await axios("http://localhost:8080/item")).data))()
  }, []);

  useEffect(() => {
    setItem(itemData.slice(0, slice + 10).map((item) => {
      return (
        <ItemContainer key={shortid.generate()}>
          <img src={`https://robohash.org/${item.itemId}/300/300`} alt="" />
          <div>
            <label>{item.name}</label>
            <label> {item.description}</label>
            <label> Current price : {item.initialPrice}$</label>
          </div>
          <div>
            <label>Bidding ends : {item.biddingEndingDate}</label>
            <button> Bid </button>
          </div>
        </ItemContainer>
      );
    }))
  }, [itemData, slice]);

  return (
    <>
      <Container
        dataLength={item.length}
        scrollableTarget="scrollable-div"
        next={() => setSlice(slice + 10)}
        scrollThreshold={0.8}
        hasMore={slice >= item.length ? false : true}
      >
        {item}
      </Container>
    </>
  );
}

export default Wall;
