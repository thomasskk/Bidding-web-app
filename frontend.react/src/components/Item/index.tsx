import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'
import ItemDetails from '../ItemDetails'
import Bookmark from './Bookmark/index'
import LabelDate from './LabelDate'
import { ItemContainer, ItemCore, ItemFooter, ItemImage } from './style'

export default function Item(props: {
  item: any
  authenticated: boolean
  bookmark: any[] | null
  focused?: boolean
}) {
  let match = useRouteMatch()

  const percentagePrice = Math.floor(
    ((props.item.sellPrice - props.item.initialPrice) / props.item.initialPrice) * 100
  )

  return (
    <>
      <ItemContainer>
        <Link to={`${match.url}/ItemDetails/${props.item.id}`}>
          <ItemImage>
            <img src={`https://robohash.org/${props.item.id}/300/300`} alt="" />
          </ItemImage>
        </Link>
        <ItemCore>
          <label>{props.item.name}</label>
          <label> {props.item.description}</label>
          <label>
            {' '}
            Current price : <span>{props.item.sellPrice}</span> <span>&#x2B27;</span>{' '}
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
              <button> Bid </button>
            </>
          )}
        </ItemFooter>
      </ItemContainer>
      <Switch>
        <Route exact path={`${match.path}/ItemDetails/${props.item.id}`}>
          <ItemDetails
            item={props.item}
            authenticated={props.authenticated}
            bookmark={props.bookmark}
          />
        </Route>
      </Switch>
    </>
  )
}
