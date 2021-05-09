import { Container } from './style'
import { Line } from 'react-chartjs-2'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { defaults } from 'react-chartjs-2'

export default function Graph(props: { data: Record<string, any>[] }): JSX.Element {
  const [dataPrice, setDataPrice] = useState<Record<string, unknown>[] | null>(null)

  useEffect(() => {
    let data: Record<string, unknown>[] = []
    const today = moment()

    //bidData + askedPrice
    let lastBid = props.data.pop()

    while (data.length !== 7) {
      //for day d associate highest bid j made on day d, if j=null j=lastest bid made
      const bid = props.data?.find(
        (e: Record<string, any>) => moment(e.date).format() <= today.format()
      )

      lastBid = bid?.price || lastBid

      data = [
        {
          lastBid,
          date: today.format('MM/DD'),
        },
        ...data,
      ]
      today.subtract(1, 'd')
    }

    setDataPrice(data)
    console.log(data)
  }, [])

  const data = {
    datasets: [
      {
        label: 'lastBid',
        data: dataPrice,
        fill: true,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'red',
      },
    ],
  }

  const options = {
    parsing: {
      xAxisKey: 'date',
      yAxisKey: 'lastBid',
    },
    axisY: {
      valueFormatString: '#####',
    },
    animation: {
      easing: 'linear',
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
      line: {
        borderJoinStyle: 'round',
      },
    },
    layout: {
      padding: 20,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  return (
    <Container>
      <Line data={data} type="line" options={options} height={300} />
    </Container>
  )
}
