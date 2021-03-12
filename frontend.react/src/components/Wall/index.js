import { useState, useEffect, useRef } from "react";
import { Container, ItemContainer } from "./style";
import InfiniteScroll from "react-infinite-scroll-component";
import Bookmark from "./Bookmark";
import imgJson from "./img.json";
import axios from "axios"
import shortid from 'shortid'

function Wall() {


  useEffect(() =>{
    const data = axios(imgJson)
    console.log(data);
  },[])

  return (
    <>
    <Container>
        {imgJson.map((image) => {
          return (
            <ItemContainer >
              <img src={`https://picsum.photos/id/${image.id}/300/300`} alt="" />
              <div>
                <label>Wonderful antique pottery</label>
                <label> Current price : 1240e</label>
              </div>
              <div>
                <label>Bidding ends : 2j 10:50:24</label>
                <Bookmark/>
                <button> Bid </button>
              </div>
            </ItemContainer>
          );
        })}
      </Container>
    </>
  );
}

export default Wall;
