import bookmarkJson from "./img/bookmark.json";
import AnimLoad from "../../utils/AnimLoad";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const BookmarkStyled = styled.div`
  flex-basis: 40px;
  cursor: pointer;
  display:flex;
`;

export default function Bookmark() {
  const bookmarkContainer = useRef();
  const [bookmarkAnim, setBookmarkAnim] = useState();
  const bookmarkOn = useRef(false);

  useEffect(() => {
    AnimLoad(setBookmarkAnim, bookmarkContainer, bookmarkJson, 1, 0);
  }, []);

  const onClick = () => {
    bookmarkOn.current ^= true;
    bookmarkOn.current
      ? bookmarkAnim.playSegments([0, 50], true)
      : bookmarkAnim.playSegments([0, 1], true);
  };

  return <BookmarkStyled ref={bookmarkContainer} onClick={onClick} />;
}