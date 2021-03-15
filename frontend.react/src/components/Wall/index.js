import { useState, useEffect } from "react";
import { Container, ItemContainer } from "./style";
import Bookmark from "./Bookmark";
import axios from "axios";
import shortid from "shortid";
import { useSelector } from "react-redux";

export default function Wall() {
  const [item, setItem] = useState([]);
  const [slice, setSlice] = useState(0);
  const searchValue = useSelector((state) => state.searchName);

  useEffect(() => {
    setItem([]);
    setSlice(0);
  }, [searchValue]);

  useEffect(() => {
    (async () => {
      const data = (
        await axios(`http://localhost:8080/item/${slice}/${searchValue}`)
      ).data;
      setItem((item) => [
        ...item,
        ...data.map((item) => (
          <ItemContainer key={shortid.generate()}>
            <img src={`https://robohash.org/${item.itemId}/300/300`} alt="" />
            <div>
              <label>{item.name}</label>
              <label> {item.description}</label>
              <label> Current price : {item.initialPrice}$</label>
            </div>
            <Bookmark />
            <div>
              <label>Bidding ends : {item.biddingEndingDate}</label>
              <button> Bid </button>
            </div>
          </ItemContainer>
        )),
      ]);
    })();
  }, [searchValue, slice]);

  return (
    <Container
      dataLength={item.length}
      next={() => setSlice(slice + 1)}
      scrollThreshold={0.8}
      hasMore={slice >= item.length ? false : true}
    >
      {item}
    </Container>
  );
}
