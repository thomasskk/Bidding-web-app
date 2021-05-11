import axios from 'axios'
import { Dh6, Hr } from 'components/Home/style'
import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import shortid from 'shortid'
import useAsyncEffect from 'use-async-effect'
import Graph from './Graph'
import {
  Center,
  ItemInfo,
  Stats,
  Table,
  Text,
  Img,
  Text2,
  UserImg,
  UserInfo,
  Profile,
  ViewImg,
} from './style'
import view from 'assets/img/view.png'
import Bookmark from 'components/Item/Bookmark'
import { useAppSelector } from 'hook'

export default function ItemDetails(): JSX.Element {
  const [bidData, setBidData] = useState<Record<string, any>[] | undefined>(undefined)
  const item = useRef<Record<string, any> | null>(null)
  const { id } = useParams()

  useAsyncEffect(async () => {
    item.current = await (
      await axios(process.env.REACT_APP_API_URL + 'item', {
        params: { id },
      })
    ).data

    const data = await (
      await axios(process.env.REACT_APP_API_URL + 'bid', {
        params: { itemId: id, slice: 0, day: 7 },
      })
    ).data
    setBidData(data)
    console.log(item.current)
  }, [id])

  return (
    <>
      <Center />
      <ItemInfo>
        <Text>
          <Dh6 style={{ fontSize: '3em' }}>{item.current?.name}</Dh6>
          <br />
          <span>{item.current?.description}</span>
        </Text>
        <Img src={item.current?.imageUrl} alt="" />
        <Text2>
          <UserInfo>
            <UserImg src={'https://via.placeholder.com/150'} alt="" />
            <Profile>
              <span>@{item.current?.user.username}</span>
              <span style={{ fontSize: '0.8em', color: 'grey' }}> Owner</span>
            </Profile>
          </UserInfo>
          <Hr width={'100%'} />
          <ViewImg src={view} alt="" />
          <Bookmark
            itemId={item.current?.id}
          />
        </Text2>
      </ItemInfo>
      <Stats>
        <Table>
          <thead>
            <tr>
              <th>User</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bidData?.map((bid: Record<string, any>) => (
              <tr key={shortid.generate()}>
                <td data-label="User">{bid.user.username}</td>
                <td data-label="Pice">{bid.price}</td>
                <td data-label="Date">{bid.date}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {bidData !== undefined && <Graph bidData={[...bidData, item.current?.lastBid]} />}
      </Stats>
    </>
  )
}
