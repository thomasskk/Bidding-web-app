import img from 'assets/img/homeRight.jpg'
import axios from 'axios'
import Item from 'components/Item'
import { useAppSelector } from 'hook'
import React, { useState } from 'react'
import shortid from 'shortid'
import useAsyncEffect from 'use-async-effect'
import {
  Description,
  Dh6,
  DRight,
  DText,
  DTitle,
  Hr,
  MainImg,
  Recent,
  RecentItem,
  RTitle,
  Span,
  Square,
  Text,
} from './style'

export default function Home(): JSX.Element {
  const [item, setItem] = useState<any[]>([])
  const ETHUSD = useAppSelector((state) => state.ETHUSD)
  const authenticated = useAppSelector((state) => state.authenticated)

  useAsyncEffect(async () => {
    const itemData = await (
      await axios(process.env.REACT_APP_API_URL + 'item/filter', {
        params: {
          slice: 0,
          amount: 6,
          sortAttribute: 'startDate',
          sortDirection: 'DESC',
        },
      })
    ).data

    setItem(
      itemData.map((item: any) => (
        <Item
          item={item}
          key={shortid.generate()}
          authenticated={authenticated}
          ETHUSD={ETHUSD}
        />
      ))
    )
  }, [])

  return (
    <>
      <Square />
      <MainImg src={img} />
      <Text>
        <Span>Find the Rarest</Span>
        <Span>Collections</Span>
        <Span>of NFT</Span>
      </Text>
      <Description>
        <DTitle>
          <Dh6>How To use</Dh6>
          <Dh6>Bidding</Dh6>
        </DTitle>
        <DRight>
          <DText>
            <h6>what is a nft ?</h6>
            <span>
              NFT or Non-fungible token are used to store a digital asset on the Ethereum
              blockchain. Thereby transactions are digitally recorded and totally secured.
            </span>
          </DText>
          <DText>
            <h6>buying & selling.</h6>{' '}
            <span>
              Place a bid or purchase at the asking price. Show your own collection and
              sell any digital art you want.
            </span>
          </DText>
        </DRight>
      </Description>
      <Hr width="70%" />
      <Recent>
        <RTitle>Recent Art</RTitle>{' '}
      </Recent>
      <RecentItem>{item}</RecentItem>
    </>
  )
}
