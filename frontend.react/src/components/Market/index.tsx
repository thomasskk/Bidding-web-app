import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import shortid from 'shortid'
import { useAppDispatch, useAppSelector } from '../../hook'
import Item from '../Item'
import { Container, Wrapper } from './style'
import { Hr } from '../Home/style'

export default function Market(): JSX.Element {
  const [item, setItem] = useState<any[]>([])
  const [slice, setSlice] = useState(0)
  const input = useAppSelector((state) => state.searchName)
  const category = useAppSelector((state) => state.searchCategory)
  const dispatch = useAppDispatch()
  const bookmark = useRef<any[] | null>(null)
  const authenticated = useAppSelector((state) => state.authenticated)

  useEffect(() => {
    setItem([])
    setSlice(0)
  }, [input, category, authenticated])

  useEffect(() => {
    ;(async () => {
      if (!bookmark.current && authenticated) {
        bookmark.current = await (
          await axios(process.env.REACT_APP_API_URL + 'bookmark/get')
        ).data
        bookmark?.current?.map((bookmark: any) => {
          return dispatch({
            type: 'ADD_BOOKMARK',
            payload: bookmark.itemId,
          })
        })
      }

      const data = await (
        await axios(process.env.REACT_APP_API_URL + 'item/filter', {
          params: {
            category,
            slice,
            input,
          },
        })
      ).data

      setItem((item) => [
        ...item,
        ...data.map((item: any) => (
          <Item
            authenticated={authenticated}
            item={item}
            bookmark={bookmark.current}
            key={shortid.generate()}
          />
        )),
      ])
    })()
  }, [dispatch, category, input, slice, authenticated])

  return (
    <>
        <Hr width={'70%'} />
        <Container
          dataLength={item.length}
          next={() => setSlice(slice + 1)}
          scrollThreshold={0.8}
          hasMore={slice >= item.length ? false : true}
          loader={null}
        >
          {item}
        </Container>
    </>
  )
}
