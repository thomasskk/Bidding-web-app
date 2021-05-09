import moment from 'moment'
import { useState } from 'react'
import { Container } from './style'
import React from 'react'
import useInterval from 'utils/useInterval'

export default function LabelDate(props: { endDate: string }): JSX.Element {
  const [date, setDate] = useState<moment.Duration>(
    moment.duration(moment(props.endDate).diff(moment()))
  )

  const udpateDate = () => {
    setDate(moment.duration(moment(props.endDate).diff(moment())))
  }

  useInterval(udpateDate, 1000)

  return (
    <Container>
      Ends in : <br />
      <b>{date.days() !== 0 && date.days()}</b>Days{' '}
      <b>{date.hours() !== 0 && date.hours()}</b>h{' '}
      <b>{date.minutes() !== 0 && date.minutes()}</b>m <b>{date.seconds()}</b>s
    </Container>
  )
}
