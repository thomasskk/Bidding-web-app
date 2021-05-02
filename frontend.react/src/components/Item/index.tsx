import React from 'react'
import { Link } from 'react-router-dom'
import Bookmark from './Bookmark/index'
import LabelDate from './LabelDate'
import { ItemContainer, ItemCore, ItemFooter, ItemImage } from './style'
import { Hr } from '../Home/style'

export default function Item(props: {
  item: any
  authenticated: boolean
  bookmark: any[] | null
}): JSX.Element {
  const percentagePrice = Math.floor(
    ((props.item.sellPrice - props.item.initialPrice) / props.item.initialPrice) * 100
  )

  return (
    <ItemContainer>
      <ItemImage>
        <img src={`https://robohash.org/${props.item.id}/300/300`} alt="" />
      </ItemImage>
      <ItemCore>
        <label>{props.item.name}</label>
        <label> {props.item.description}</label>
        <label>
          {' '}
          Current price : <span>{props.item.sellPrice}</span> <span>&#x2B27;</span>{' '}
          <span>&ensp; +{percentagePrice}%</span>{' '}
        </label>
      </ItemCore>
      <Hr width="85%" />
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
