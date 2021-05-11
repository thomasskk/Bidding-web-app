import axios from 'axios'
import { useAppSelector } from 'hook'
import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import shortid from 'shortid'
import useAsyncEffect from 'use-async-effect'
import useDebounce from 'utils/useDebounce'
import useIntersection from 'utils/useIntersection'
import Item from '../Item'
import Filter from './Filter'
import sortAction from './Filter/sortAction'
import { Center, Container } from './style'

export default function Market(): JSX.Element {
  const [item, setItem] = useState<any[]>([])
  const slice = useRef(0)
  const authenticated = useAppSelector((state) => state.authenticated)
  const [filterParams] = useSearchParams()
  const filter = useDebounce<URLSearchParams>(filterParams, 500)
  const [setRef, visible] = useIntersection()
  const ETHUSD = useAppSelector((state) => state.ETHUSD)

  useEffect(() => {
    setItem([])
    slice.current = 0
  }, [filter, authenticated])

  useAsyncEffect(async () => {
    if (!visible) return

    const sortQuery = filter.get('sort')
    const itemData = await (
      await axios(process.env.REACT_APP_API_URL + 'item/filter', {
        params: {
          category: filter.getAll('category'),
          slice: slice.current,
          input: filter.get('search'),
          amount: 16,
          priceMin: filter.get('priceMin'),
          priceMax: filter.get('priceMax'),
          sortAttribute: sortQuery && sortAction[sortQuery].attribute,
          sortDirection: sortQuery && sortAction[sortQuery].direction,
        },
      })
    ).data

    setItem((item: any) => [
      ...item,
      itemData.map((item: any) => (
        <Item
          item={item}
          key={shortid.generate()}
          authenticated={authenticated}
          ETHUSD={ETHUSD}
        />
      )),
    ])

    slice.current++
  }, [visible, authenticated])

  return (
    <>
      <Center />
      <Container>
        <Filter />
        {item}
      </Container>
      <div ref={setRef} />
    </>
  )
}
