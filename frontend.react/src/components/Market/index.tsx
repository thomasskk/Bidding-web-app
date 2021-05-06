import axios from 'axios'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import shortid from 'shortid'
import { useAppDispatch, useAppSelector } from 'hook'
import Item from '../Item'
import { Container, NavStyle } from './style'
import { Hr } from '../Home/style'
import useInterval from 'utils/useInterval'
import useAsyncEffect from 'use-async-effect'
import SearchBar from './SearchBar'

export default function Market(): JSX.Element {
  const [item, setItem] = useState<any[]>([])
  const [slice, setSlice] = useState(0)
  const input = useAppSelector((state) => state.searchName)
  const category = useAppSelector((state) => state.searchCategory)
  const dispatch = useAppDispatch()
  const bookmark = useRef<any[] | null>(null)
  const authenticated = useAppSelector((state) => state.authenticated)

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
  }, [input, category, authenticated])

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
      ...itemData.map((item: any) => (
        <Item
          authenticated={authenticated}
          item={item}
          bookmark={bookmark.current}
          key={shortid.generate()}
        />
      )),
    ])
  }, [dispatch, category, input, slice, authenticated])
  Intl.NumberFormat('fr-FR', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'symbol',
  })
  return (
    <>
      <SearchBar />
      <NavStyle />
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
