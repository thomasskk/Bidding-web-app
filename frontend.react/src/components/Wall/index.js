import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { Container } from './style'
import { useDispatch } from 'react-redux'
import Item from '../Item'
import shortid from 'shortid'

export default function Wall() {
  const [item, setItem] = useState([])
  const [slice, setSlice] = useState(0)
  const searchName = useSelector((state) => state.searchName)
  const searchCategory = useSelector((state) => state.searchCategory)
  const dispatch = useDispatch()
  const bookmark = useRef(null)
  const authenticated = useSelector((state) => state.authenticated)

  useEffect(() => {
    setItem([])
    setSlice(0)
  }, [searchName, searchCategory, authenticated])

  useEffect(() => {
    ;(async () => {
      if (!bookmark.current && authenticated) {
        bookmark.current = await (
          await axios(process.env.REACT_APP_API_URL + 'bookmark/get')
        ).data
        bookmark.current.map((bookmark) => {
          return dispatch({
            type: 'ADD_BOOKMARK',
            payload: bookmark.itemId,
          })
        })
      }
      const data = await (
        await axios(
          process.env.REACT_APP_API_URL + `item/${searchCategory}/${slice}/${searchName}`
        )
      ).data
      setItem((item) => [
        ...item,
        ...data.map((item) => (
          <Item authenticated={authenticated} item={item} bookmark={bookmark.current} focus={false} key={shortid.generate()}/>
        )),
      ])
    })()
  }, [authenticated, dispatch, searchCategory, searchName, slice])

  return (
    <Container
      dataLength={item.length}
      next={() => setSlice(slice + 1)}
      scrollThreshold={0.8}
      hasMore={slice >= item.length ? false : true}
    >
      {item}
    </Container>
  )
}
