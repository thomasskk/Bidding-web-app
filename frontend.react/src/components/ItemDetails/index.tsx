import React, { useState, useEffect } from 'react'
import { BlurFocus, Wrapper, Table, Graph, Stats } from './style'
import Item from '../Item'
import { Cross } from '../Auth/style'
import cross from '../Auth/img/cross.png'
import axios from 'axios'
import shortid from 'shortid'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import moment from 'moment'

export default function ItemDetails(props: {
  item: any
  authenticated: boolean
  bookmark: any[] | null
  setfocus: () => void
}) {
  const [bidData, setBidData] = useState<any[] | undefined>(undefined)
  const [priceData, setPriceData] = useState<any[]>([])

  useEffect(() => {
    ;(async () => {
      const data = await (
        await axios(process.env.REACT_APP_API_URL + 'bid/get', {
          params: { itemId: props.item.id, slice: 0 },
        })
      ).data

      setBidData(data)

      let priceDataTemp: any[] = []
      const today = moment()

      while (priceDataTemp.length !== 7) {
        const item = data.find((e: any) => moment(e.date).date() <= today.date()) || 0
        const price = item.sellPrice + item.price || props.item.initialPrice

        priceDataTemp = [
          {
            price,
            date: today.format('MM/DD'),
          },
          ...priceDataTemp,
        ]
        today.subtract(1, 'd')
      }
      setPriceData(priceDataTemp)
    })()
  }, [props])

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
              {bidData?.map((bid: any) => (
                <tr key={shortid.generate()}>
                  <td data-label="User">{bid.user.username}</td>
                  <td data-label="Pice">{bid.price}</td>
                  <td data-label="Date">{bid.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Graph>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceData}>
                <Line type="monotone" stroke="#8884d8" dataKey="price" />
                <XAxis dataKey="date" tick={{ dy: 10, fontSize: 12 }} />
                <YAxis
                  dataKey="price"
                  domain={[props.item.initialPrice, 'price']}
                  tick={{ dx: -15, fontSize: 12 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Graph>
        </Stats>
      </Wrapper>
    </>
  )
}
