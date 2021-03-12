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
    async function load() {
      AnimLoad(setBookmarkAnim, bookmarkContainer, bookmarkJson, 1, 0);
    }
    load()
  }, []);

  const Onclick = () =>  {
    bookmarkOn.current = !bookmarkOn.current
    if (bookmarkAnim) {
        bookmarkOn.current ?
        bookmarkAnim.playSegments([0, 108], true)
        : 
        bookmarkAnim.playSegments([45,0], true)
    }
  };

  return (
    <>
      <BookmarkStyled onClick={Onclick} ref={bookmarkContainer} />
    </>
  );
}

export default Bookmark;
