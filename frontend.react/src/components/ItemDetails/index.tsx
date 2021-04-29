import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useHistory } from 'react-router-dom'
import shortid from 'shortid'
import cross from '../Auth/img/cross.png'
import { Cross } from '../Auth/style'
import Item from '../Item'
import { BlurFocus, Graph, Stats, Table, Wrapper } from './style'

export default function ItemDetails(props: {
  item: any
  authenticated: boolean
  bookmark: any[] | null
}) {
  const [bidData, setBidData] = useState<any[] | undefined>(undefined)
  const [priceData, setPriceData] = useState<any[]>([])
  let history = useHistory()

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
  }

  return (
    <>
      <Wrapper id="focus">
        <Cross src={cross} onClick={() => history.goBack()} />
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
            <Line data={data} type="line" height={400} width={500} options={options} />
          </Graph>
        </Stats>
      </Wrapper>
    </>
  )
}
