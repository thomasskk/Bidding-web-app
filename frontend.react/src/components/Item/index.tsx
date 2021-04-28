import React, { useState } from 'react'
import Bookmark from './Bookmark/index'
import LabelDate from './LabelDate'
import { ItemContainer, ItemCore, ItemFooter, ItemImage } from './style'
import ItemDetails from '../ItemDetails'

export default function Item(props: {
  item: any
  authenticated: boolean
  bookmark: any[] | null
  focused?: boolean
}) {
  const [focus, setFocus] = useState(false)

  const percentagePrice = Math.floor(
    ((props.item.sellPrice - props.item.initialPrice) / props.item.initialPrice) * 100
  )

  return (
    <>
      <ItemContainer>
        <ItemImage
          onClick={() => {
            !props.focused && setFocus(!focus)
          }}
        >
          <img src={`https://robohash.org/${props.item.id}/300/300`} alt="" />
        </ItemImage>
        <ItemCore>
          <label>{props.item.name}</label>
          <label> {props.item.description}</label>
          <label>
            {' '}
            Current price : <span>{props.item.sellPrice}</span> <span>&#x2B27;</span> {' '}
            <span>&ensp; +{percentagePrice}%</span>{' '}
          </label>
        </ItemCore>
        <ItemFooter>
          <LabelDate endingDate={props.item.biddingEndingDate} />
          {props.authenticated && (
            <>
              <Bookmark
                itemId={props.item.id}
                bookmark={
                  props?.bookmark?.some(
                    (bookmark) => bookmark.itemId === props.item.id
                  ) || null
                }
              />
              <button
                onClick={() => {
                  !props.focused && setFocus(!focus)
                }}
              >
                {' '}
                Bid{' '}
              </button>
            </>
          )}
        </ItemFooter>
      </ItemContainer>
      {focus && (
        <ItemDetails
          setfocus={() => setFocus(!focus)}
          item={props.item}
          authenticated={props.authenticated}
          bookmark={props.bookmark}
        />
      )}
    </>
  )
}
