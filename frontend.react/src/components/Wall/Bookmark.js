import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import AnimLoad from '../../utils/animLoad'
import bookmarkJson from './img/bookmark.json'
import { useDispatch } from 'react-redux'
import axios from 'axios'

const BookmarkStyled = styled.div`
  flex-basis: 40px;
  cursor: pointer;
  display: flex;
`

export default function Bookmark(props) {
  const bookmarkContainer = useRef()
  const [bookmarkAnim, setBookmarkAnim] = useState()
  const bookmarkOn = useRef(props.bookmark)
  const dispatch = useDispatch()

  useEffect(() => {
    AnimLoad(
      setBookmarkAnim,
      bookmarkContainer,
      bookmarkJson,
      1,
      bookmarkOn.current ? 50 : 0
    )
  }, [])

  const addBookmark = async () => {
    dispatch({
      type: 'ADD_BOOKMARK',
      payload: props.itemId,
    })
    await axios.post(process.env.REACT_APP_API_URL + `bookmark/add/${props.itemId}`)
  }

  const removeBookmark = async () => {
    dispatch({
      type: 'REMOVE_BOOKMARK',
      payload: props.itemId,
    })
    await axios.post(process.env.REACT_APP_API_URL + `bookmark/remove/${props.itemId}`)
  }

  const onClick = () => {
    bookmarkOn.current = !bookmarkOn.current
    if (bookmarkOn.current) {
      addBookmark()
      bookmarkAnim.playSegments([0, 50], true)
    } else {
      removeBookmark()
      bookmarkAnim.playSegments([0, 1], true)
    }
  }

  return <BookmarkStyled ref={bookmarkContainer} onClick={onClick} />
}
