import axios from 'axios'
import { AnimationItem } from 'lottie-web'
import { MutableRefObject, useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'hook'
import AnimLoad from 'utils/animLoad'
import bookmarkJson from 'assets/jsonAnimation/bookmark.json'
import { Container } from './style'
import React from 'react'

export default function Bookmark(props: { itemId: number }): JSX.Element {
  const bookmarkContainer = useRef() as MutableRefObject<HTMLDivElement>
  const [bookmarkAnim, setBookmarkAnim] = useState<AnimationItem | null>(null)
  const bookmark = useAppSelector((state) => state.bookmark)
  const bookmarkOn = useRef<boolean | null>()
  const dispatch = useAppDispatch()
  const authenticated = useAppSelector((state) => state.authenticated)

  useEffect(() => {
    bookmarkOn.current =
      bookmark.some((bookmark: any) => bookmark === props.itemId) || null
    !authenticated && bookmarkAnim?.goToAndStop(0)
  }, [authenticated])

  useEffect(() => {
    AnimLoad(
      setBookmarkAnim,
      bookmarkContainer,
      bookmarkJson,
      1,
      bookmarkOn.current ? 50 : 0
    )
    return () => bookmarkAnim?.destroy()
  }, [])

  const addBookmark = async () => {
    dispatch({
      type: 'ADD_BOOKMARK',
      payload: props.itemId,
    })
    await axios.post(
      process.env.REACT_APP_API_URL + 'bookmark',
      {},
      {
        params: { id: props.itemId },
      }
    )
  }

  const removeBookmark = async () => {
    dispatch({
      type: 'REMOVE_BOOKMARK',
      payload: props.itemId,
    })
    await axios.delete(process.env.REACT_APP_API_URL + 'bookmark', {
      params: { id: props.itemId },
    })
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

  return <Container ref={bookmarkContainer} onClick={onClick} />
}
