import axios from 'axios'
import { useAppDispatch, useAppSelector } from 'hook'
import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import shortid from 'shortid'
import useAsyncEffect from 'use-async-effect'
import useDebounce from 'utils/useDebounce'
import useInterval from 'utils/useInterval'
import Item from '../Item'
import Filter from './Filter'
import { Center, Container, Loader } from './style'
import sortAction from './Filter/sortAction'

export default function Market(): JSX.Element {
  const [item, setItem] = useState<any[]>([])
  const [slice, setSlice] = useState(0)
  const dispatch = useAppDispatch()
  const bookmark = useRef<any[] | null>(null)
  const authenticated = useAppSelector((state) => state.authenticated)
  const [filterParams] = useSearchParams()
  const filter = useDebounce<URLSearchParams>(filterParams, 500)
  const intersectionRef = useRef<any>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)

  // Infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isIntersecting) {
          setIsIntersecting(entries[0].isIntersecting)
          setSlice(slice + 1)
        }
      },
      {
        threshold: 0.5,
      }
    )
    observer.observe(intersectionRef.current)

    return () => {
      observer.disconnect()
    }
  }, [intersectionRef.current])

  // ETH value
  const updateETHUSD = async () => {
    const exchangeRData = await (
      await axios('https://api.coinbase.com/v2/prices/ETH-USD/buy', {
        headers: {
          Authorization:
            'Bearer abd90df5f27a7b170cd775abf89d632b350b7c1c9d53e08b340cd9832ce52c2c',
        },
      })
    ).data

    dispatch({
      type: 'ETH_USD',
      payload: exchangeRData.data.amount,
    })
  }

  useEffect(() => {
    updateETHUSD()
  }, [])

  useInterval(updateETHUSD, 30000)

  useEffect(() => {
    setItem([])
    setSlice(0)
  }, [filter, authenticated])

  useAsyncEffect(async () => {
    if (!bookmark.current && authenticated) {
      bookmark.current = await (
        await axios(process.env.REACT_APP_API_URL + 'bookmark')
      ).data
      bookmark?.current?.map((bookmark: any) => {
        return dispatch({
          type: 'ADD_BOOKMARK',
          payload: bookmark.itemId,
        })
      })
    }

    const sortQuery = filter.get('sort')

    const itemData = await (
      await axios(process.env.REACT_APP_API_URL + 'item/filter', {
        params: {
          category: filter.getAll('category'),
          slice,
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
          authenticated={authenticated}
          item={item}
          bookmark={bookmark.current}
          key={shortid.generate()}
        />
      )),
    ])
    setIsIntersecting(false)
  }, [filter, slice, authenticated])

  return (
    <>
      <Center />
      <Container>
        <Filter />
        {item}
      </Container>
      <Loader key={shortid.generate()} ref={intersectionRef} />
    </>
  )
}
