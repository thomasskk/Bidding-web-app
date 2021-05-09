import React, { memo } from 'react'
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
  Price,
} from './style'
import { Hr } from '../Home/style'
import { useAppSelector } from 'hook'
import { Link } from 'react-router-dom'

export default function Item(props: {
  item: any
  authenticated: boolean
  bookmark: any[] | null
}): JSX.Element {
  const ETHUSD = useAppSelector((state) => state.ETHUSD)

  const percentagePrice = Math.floor(
    ((props.item.lastBid - props.item.askPrice) / props.item.askPrice) * 100
  )
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'symbol',
    }).format(ETHUSD * price)
  }

  return (
    <ItemContainer>
      <Link to={`itemDetails/${props.item.id}`}>
        <ItemImage src={props.item.imageUrl} alt="" />
      </Link>
      <ItemCore>
        <Name>{props.item.name}</Name>
        <Price>
          <LastBid>
            Last bid <br />
            {props.item.lastBid === 0 ? (
              <>
                <span> - </span>
                <br />
                <span> &nbsp; </span>
              </>
            ) : (
              <>
                <span>{props.item.lastBid}</span>
                <EthSymbol />
                &nbsp; ({formatPrice(props.item.lastBid)})
                {percentagePrice >= 0 ? (
                  <span style={{ color: '#0eab30' }}>
                    <br /> +{percentagePrice}%
                  </span>
                ) : (
                  <span style={{ color: '#c91508' }}>
                    <br /> {percentagePrice}%
                  </span>
                )}
              </>
            )}
          </LastBid>
          <AskedPrice>
            <span>Asked Price</span> <br />
            <span>{props.item.askPrice}</span>
            <EthSymbol /> <span>&nbsp; ({formatPrice(props.item.askPrice)})</span>{' '}
          </AskedPrice>
        </Price>
        <Hr width="100%" />
      </ItemCore>
      <ItemFooter>
        <LabelDate endDate={props.item.endDate} />
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
