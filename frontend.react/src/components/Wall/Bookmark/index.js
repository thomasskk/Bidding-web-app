import bookmarkJson from "./img/bookmark.json";
import AnimLoad from "../../../utils/AnimLoad";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import shortid from 'shortid'

const BookmarkStyled = styled.div`
  flex-basis: 29px;
  display: flex;
  cursor: pointer;


`;

function Bookmark() {
  const bookmarkContainer = useRef();
  const [bookmarkAnim, setBookmarkAnim] = useState();
  const bookmarkOn = useRef(false);

  useEffect(() => {
      AnimLoad(setBookmarkAnim, bookmarkContainer, bookmarkJson, 1, 0)
  }, []);


  return (
    <>
      <BookmarkStyled  ref={bookmarkContainer} />
    </>
  );
}

export default Bookmark;
