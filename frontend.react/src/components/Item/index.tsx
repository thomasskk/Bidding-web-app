import React, { useRef, useState } from 'react'
import cross from '../Auth/img/cross.png'
import { Cross } from '../Auth/style'
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

  return (
    <>
      <ItemContainer
        onClick={() => {
          !props.focused && setFocus(!focus)
        }}
      >
        <ItemImage>
          <img src={`https://robohash.org/${props.item.id}/300/300`} alt="" />
        </ItemImage>
        <ItemCore>
          <label>{props.item.name}</label>
          <label> {props.item.description}</label>
          <label>
            {' '}
            Current price : {props.item.sellPrice}${' '}
            <span>
              &ensp; +
              {(props.item.sellPrice - props.item.initialPrice) / props.item.initialPrice}
              %
            </span>{' '}
          </label>
          <label> Category : {props.item.category.name}</label>
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
              <button> Bid </button>
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
