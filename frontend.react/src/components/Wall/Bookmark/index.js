import bookmarkJson from "./img/bookmark.json";
import AnimLoad from "../../../utils/AnimLoad";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const BookmarkStyled = styled.div`
  width: 40px;
  height: 40px;
`;

function Bookmark() {
  const bookmarkContainer = useRef();
  const [bookmarkAnim, setBookmarkAnim] = useState();
  const [bookmarkOn, setbookmarkOn] = useState(false);

  useEffect(() => {
    AnimLoad(setBookmarkAnim, bookmarkContainer, bookmarkJson, 1, 0);
  }, []);

  const Onclick = () => {
    if (bookmarkAnim) {
      bookmarkOn
        ? bookmarkAnim.playSegments([0, 108], true)
        : bookmarkAnim.playSegments([0, 1 ], true);
    }
  };

  return (
    <>
      <BookmarkStyled onClick={Onclick()} ref={bookmarkContainer} />
    </>
  );
}

export default Bookmark;
