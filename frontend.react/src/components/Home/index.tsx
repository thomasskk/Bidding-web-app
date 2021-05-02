import React from 'react'
import img from './img/image.svg'
import {
  MainImg,
  Text,
  Description,
  DTitle,
  DText,
  Span,
  Line1,
  Line3,
  Hr,
  DRight,
  Recent,
  RTitle,
} from './style'

export default function Home(): JSX.Element {
  return (
    <>
      <MainImg src={img} />
      <Text>
        <Line1>
          <Span>Find</Span>
        </Line1>
        <div>
          <div>
            <Span> the Rarest</Span>{' '}
          </div>
          <Line3>
            <Span>Collections</Span>
            <Span>of NFT</Span>
          </Line3>
        </div>
      </Text>
      <Description>
        <DTitle>
          <h6>How To use</h6>
          <h6>Bidding</h6>
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
    </>
  )
}
