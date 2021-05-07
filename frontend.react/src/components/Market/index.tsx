import axios from 'axios'
import { useAppDispatch, useAppSelector } from 'hook'
import React, { useEffect, useRef, useState } from 'react'
import shortid from 'shortid'
import useAsyncEffect from 'use-async-effect'
import useInterval from 'utils/useInterval'
import Item from '../Item'
import SearchBar from './SearchBar'
import { Container, Loader } from './style'
import useDebounce from 'utils/useDebounce'

export default function Market(): JSX.Element {
  const [item, setItem] = useState<any[]>([])
  const [slice, setSlice] = useState(0)
  const input = useAppSelector((state) => state.searchName)
  const category = useAppSelector((state) => state.searchCategory)
  const dispatch = useAppDispatch()
  const bookmark = useRef<any[] | null>(null)
  const authenticated = useAppSelector((state) => state.authenticated)
  const loaderRef = useRef() as React.MutableRefObject<HTMLDivElement>
  const debouncedInput = useDebounce<string>(input, 500)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting && setSlice(slice + 1)
      },
      { threshold: 0.4 }
    )
    observer.observe(loaderRef.current)
    return () => observer.disconnect()
  }, [item])

  const updateETHUSD = async () => {
    const exchangeRData = await (
      await axios('https://api.coinbase.com/v2/prices/BTC-USD/buy', {
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

  useInterval(updateETHUSD, 3600000)

  useEffect(() => {
    setItem([])
    setSlice(0)
  }, [debouncedInput, category, authenticated])

  useAsyncEffect(async () => {
    if (!bookmark.current && authenticated) {
      bookmark.current = await (await axios(process.env.REACT_APP_API_URL + 'bookmark'))
        .data
      bookmark?.current?.map((bookmark: any) => {
        return dispatch({
          type: 'ADD_BOOKMARK',
          payload: bookmark.itemId,
        })
      })
    }

    const itemData = await (
      await axios(process.env.REACT_APP_API_URL + 'item/filter', {
        params: {
          category,
          slice,
          input,
          amount: 9,
        },
      })
    ).data

    setItem((item) => [
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
  }, [category, debouncedInput, slice, authenticated])

  return (
    <>
      <SearchBar />
      <Container>{item}</Container>
      <Loader key={shortid.generate()} ref={loaderRef} />
    </>
  )
}
