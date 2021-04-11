import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../hook'
import AnimLoad from '../../utils/animLoad'
import bookmarkJson from '../Wall/img/bookmark.json'
import { AnimationItem } from 'lottie-web'

const BookmarkStyled = styled.div`
  flex-basis: 40px;
  cursor: pointer;
  display: flex;
`

export default function Bookmark(props: { itemId: number; bookmark: boolean }) {
  const bookmarkContainer = useRef<HTMLDivElement | null>(null)
  const [bookmarkAnim, setBookmarkAnim] = useState<AnimationItem | null>(null)
  const bookmarkOn = useRef<boolean>(props.bookmark)
  const dispatch = useAppDispatch()
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
      bookmarkAnim?.playSegments([0, 50], true)
    } else {
      removeBookmark()
      bookmarkAnim?.playSegments([0, 1], true)
    }
  }

  return <BookmarkStyled ref={bookmarkContainer} onClick={onClick} />
}
