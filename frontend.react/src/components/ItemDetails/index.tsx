import axios from 'axios'
import { ItemImage } from 'components/Item/style'
import React, { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import shortid from 'shortid'
import useAsyncEffect from 'use-async-effect'
import Graph from './Graph'
import { Stats, Table, Wrapper } from './style'

export default function ItemDetails(): JSX.Element {
  const [bidData, setBidData] = useState<Record<string, unknown>[] | undefined>(undefined)
  const navigate = useNavigate()
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
  }, [id])

  return (
    <>
      <Wrapper>
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
        {bidData !== undefined && <Graph data={[...bidData, item.current?.lastBid]} />}
        <ItemImage src={item.current?.imageUrl} alt="" />
      </Wrapper>
    </>
  )
}
