import { useAppSelector } from 'hook'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Hr } from '../Home/style'
import Bookmark from './Bookmark/index'
import LabelDate from './LabelDate'
import {
  AskedPrice,
  EthSymbol,
  ItemContainer,
  ItemCore,
  ItemFooter,
  ItemImg,
  LastBid,
  Name,
  Price,
} from './style'

export default function Item(props: {
  item: any
  authenticated: boolean
  ETHUSD: number
}): JSX.Element {
  const percentagePrice = Math.floor(
    ((props.item.lastBid - props.item.listPrice) / props.item.listPrice) * 100
  )
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'USD',
      currencyDisplay: 'symbol',
    }).format(props.ETHUSD * price)
  }

  return (
    <ItemContainer>
      <Link to={`/itemDetails/${props.item.id}`}>
        <ItemImg src={props.item.imageUrl} alt="" loading="lazy" />
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
            <span>{props.item.listPrice}</span>
            <EthSymbol /> <span>&nbsp; ({formatPrice(props.item.listPrice)})</span>
          </AskedPrice>
        </Price>
        <Hr width="100%" />
      </ItemCore>
      <ItemFooter>
        <LabelDate endDate={props.item.endDate} />
        {props.authenticated && (
          <>
            <Bookmark itemId={props.item.id} />
            <button> Bid </button>
          </>
        )}
      </ItemFooter>
    </ItemContainer>
  )
}
