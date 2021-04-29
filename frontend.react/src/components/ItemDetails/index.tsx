import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useRef, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useNavigate, useParams } from 'react-router-dom'
import shortid from 'shortid'
import cross from '../Auth/img/cross.png'
import { Cross } from '../Auth/style'
import { BlurFocus, Graph, Stats, Table, Wrapper } from './style'

export default function ItemDetails() {
  const [bidData, setBidData] = useState<any[] | undefined>(undefined)
  const [priceData, setPriceData] = useState<any[]>([])
  const navigate = useNavigate()
  const item = useRef()
  const { id } = useParams()

  useEffect(() => {
    ;(async () => {
      item.current = await (
        await axios(process.env.REACT_APP_API_URL + 'item/get', {
          params: { id },
        })
      ).data
    })()
  }, [id])

  useEffect(() => {
    ;(async () => {
      const data = await (
        await axios(process.env.REACT_APP_API_URL + 'bid/get', {
          params: { itemId: id, slice: 0 },
        })
      ).data

      setBidData(data)

      let priceDataTemp: any[] = []
      const today = moment()

      while (priceDataTemp.length !== 7) {
        const bid = data.find((e: any) => moment(e.date).date() <= today.date()) || 0

        const price = bid.sellPrice + bid.price || bid.initialPrice

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
  }, [id])

  const data = {
    datasets: [
      {
        label: 'price',
        data: priceData,
      },
    ],
  }
  const options = {
    parsing: {
      xAxisKey: 'date',
      yAxisKey: 'price',
    },
    maintainAspectRatio: false,
    borderColor: '#F85F73',
  }

  return (
    <Wrapper id="focus">
      <Cross src={cross} onClick={() => navigate('/')} />
      <BlurFocus />
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
          <Line data={data} type="line" options={options} />
        </Graph>
      </Stats>
    </Wrapper>
  )
}
