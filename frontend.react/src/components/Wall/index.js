import { useState, useEffect } from "react";
import {
  Container,
  ItemContainer,
  LabelTime,
  ItemImage,
  ItemFooter,
  ItemCore,
} from "./style";
import Bookmark from "./Bookmark.js";
import axios from "axios";
import shortid from "shortid";
import { useSelector } from "react-redux";
import moment from "moment";


function LabelDate({ endingDate }) {
  var [date, setDate] = useState(
    moment.duration(moment(endingDate).diff(moment()))
  );

  useEffect(() => {
    var timer = setInterval(
      () => setDate(moment.duration(moment(endingDate).diff(moment()))),
      1000
    );
    return function cleanup() {
      clearInterval(timer);
    };
  }, [date, endingDate]);

  return (
    <LabelTime>
      Bidding ends in : {date.days() !== 0 && date.days() + "d"}{" "}
      {date.hours() !== 0 && date.hours()}h{" "}
      {date.minutes() !== 0 && date.minutes()}m {date.seconds()}s
    </LabelTime>
  );
}

export default function Wall() {
  const [item, setItem] = useState([]);
  const [slice, setSlice] = useState(0);
  const searchName = useSelector((state) => state.searchName);
  const searchCategory = useSelector((state) => state.searchCategory);

  useEffect(() => {
    setItem([]);
    setSlice(0);
  }, [searchName, searchCategory]);

  useEffect(() => {
    (async () => {
      const data = (
        await axios(
          `http://localhost:8080/item/${searchCategory}/${slice}/${searchName}`
        )
      ).data;
      const category = (await axios(`http://localhost:8080/category`)).data;
      setItem((item) => [
        ...item,
        ...data.map((item) => (
          <ItemContainer key={shortid.generate()}>
            <ItemImage>
              <img src={`https://robohash.org/${item.itemId}/300/300`} alt="" />
            </ItemImage>
            <ItemCore>
              <label>{item.name}</label>
              <label> {item.description}</label>
              <label> Current price : {item.initialPrice}$</label>
              <label> {category[item.categoryId - 1].name}</label>
            </ItemCore>
            <ItemFooter>
              <LabelDate endingDate={item.biddingEndingDate} />
              <Bookmark />
              <button> Bid </button>
            </ItemFooter>
          </ItemContainer>
        )),
      ]);
    })();
  }, [searchCategory, searchName, slice]);

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
