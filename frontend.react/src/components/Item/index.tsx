import React, { useState } from 'react'
import shortid from 'shortid'
import Bookmark from '../Bookmark/index'
import LabelDate from './LabelDate'
import { ItemContainer, ItemCore, ItemFooter, ItemImage } from './style'

export default function Item(props: {
  item: any
  authenticated: boolean
  bookmark: any[] | null
}) {
  const [focus, setFocus] = useState<boolean>(false)

  return (
    <>
      <ItemContainer key={shortid.generate()} focus={focus}>
        <ItemImage>
          <img src={`https://robohash.org/${props.item.id}/300/300`} alt="" />
        </ItemImage>
        <ItemCore>
          <label>{props.item.name}</label>
          <label> {props.item.description}</label>
          <label> Current price : {props.item.initialPrice}$</label>
          <label> Category : {props.item.category.name}</label>
        </ItemCore>
        <ItemFooter>
          <LabelDate endingDate={props.item.biddingEndingDate} />
          {props.authenticated && (
            <>
              <Bookmark
                itemId={props.item.id}
                bookmark={props!.bookmark!.some(
                  (bookmark) => bookmark.itemId === props.item.id
                )}
              />
              <button> Bid </button>
            </>
          )}
        </ItemFooter>
      </ItemContainer>
    </>
  )
}
