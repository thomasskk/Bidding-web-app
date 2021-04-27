import React, { useState, useEffect, useRef } from 'react'
import { BlurFocus, Wrapper, Table, Res } from './style'
import Item from '../Item'
import { Cross } from '../Auth/style'
import cross from '../Auth/img/cross.png'
import axios from 'axios'
import shortid from 'shortid'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'

export default function ItemDetails(props: {
  item: any
  authenticated: boolean
  bookmark: any[] | null
  setfocus: () => void
}) {
  const [bidData, setBidData] = useState<any[] | undefined>(undefined)

  useEffect(() => {
    ;(async () => {
      const data = await (
        await axios(process.env.REACT_APP_API_URL + 'bid/get', {
          params: { itemId: props.item.id, sliceWeeks: 7 },
        })
      ).data
      setBidData(data)
    })()
  }, [props.item.id])

  return (
    <>
      <Wrapper id="focus">
        <Cross src={cross} onClick={props.setfocus} />
        <BlurFocus />
        <Item
          focused={true}
          item={props.item}
          authenticated={props.authenticated}
          bookmark={props.bookmark}
        />
        {bidData && (
          <Table>
            <thead>
              <tr>
                <th>User</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {bidData?.map((bid: any) => (
                <tr key={shortid.generate()}>
                  <td data-label="User">{bid.user.username}</td>
                  <td data-label="Pice">{bid.price}</td>
                  <td data-label="Date">{bid.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <div style={{ position: 'relative', height: 100 + '%', width: 100 + '%' }}>
          <Res>
            <LineChart
              width={400}
              height={400}
              margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
            >
              <Line data={bidData} type="monotone" dataKey="price" stroke="#8884d8" />
              <XAxis />
              <YAxis />
            </LineChart>
          </Res>
        </div>
      </Wrapper>
    </>
  )
}
