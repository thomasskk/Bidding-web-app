import { Container } from './style'
import { Line } from 'react-chartjs-2'
import moment from 'moment'
import React, { useEffect, useState } from 'react'

export default function Graph(props: { data: Record<string, any>[] }): JSX.Element {
  const [dataPrice, setDataPrice] = useState<Record<string, unknown>[] | null>(null)

  useEffect(() => {
    let data: Record<string, unknown>[] = []
    const today = moment()
    const initialPrice = props.data.pop()

    while (data.length !== 7) {
      const bid = props.data?.find(
        (e: Record<string, any>) => moment(e.date).date() <= today.date()
      )

      const price = bid?.sellPrice + bid?.price || initialPrice

      data = [
        {
          price,
          date: today.format('MM/DD'),
        },
        ...data,
      ]
      today.subtract(1, 'd')
    }

    setDataPrice(data)
  }, [])

  const data = {
    datasets: [
      {
        label: 'price',
        data: dataPrice,
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
    <Container>
      <Line data={data} type="line" options={options} />
    </Container>
  )
}
