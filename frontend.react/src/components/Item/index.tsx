import React from 'react'
import { Link } from 'react-router-dom'
import Bookmark from './Bookmark/index'
import LabelDate from './LabelDate'
import {
  ItemContainer,
  ItemCore,
  ItemFooter,
  ItemImage,
  Name,
  LastBid,
  AskedPrice,
  EthSymbol,
} from './style'
import { Hr } from '../Home/style'

export default function Item(props: {
  item: any
  authenticated: boolean
  bookmark: any[] | null
}): JSX.Element {
  const percentagePrice = Math.floor(
    ((props.item.sellPrice - props.item.basePrice) / props.item.basePrice) * 100
  )

  return (
    <ItemContainer>
      <ItemImage src={props.item.imageUrl} alt="" />
      <ItemCore>
        <Name>{props.item.name}</Name>
        <LastBid>
          <span>{props.item.sellPrice} </span>
          <EthSymbol />
          <span>&ensp; +{percentagePrice}%</span>
          Last bid
        </LastBid>
        Asked Price :<span>{props.item.askPrice}</span>
        <Hr width="100%" />
      </ItemCore>
      <ItemFooter>
        <LabelDate endingDate={props.item.biddingEndingDate} />
        {props.authenticated && (
          <>
            <Bookmark
              itemId={props.item.id}
              bookmark={
                props?.bookmark?.some((bookmark) => bookmark.itemId === props.item.id) ||
                null
              }
            />
            <button> Bid </button>
          </>
        )}
      </ItemFooter>
    </ItemContainer>
  )
}
