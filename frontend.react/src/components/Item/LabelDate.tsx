import moment from 'moment'
import { useEffect, useState } from 'react'
import { LabelTime } from './style'

export default function LabelDate(props: { endingDate: string }) {
  var [date, setDate] = useState<moment.Duration>(moment.duration(moment(props.endingDate).diff(moment())))

  useEffect(() => {
    var timer = setInterval(
      () => setDate(moment.duration(moment(props.endingDate).diff(moment()))),
      1000
    )
    return function cleanup() {
      clearInterval(timer)
    } 
  }, [date, props.endingDate])

  return (
    <LabelTime>
      Ends in : <b>{date.days() !== 0 && date.days()}</b>Days{' '}
      <b>{date.hours() !== 0 && date.hours()}</b>h <b>{date.minutes() !== 0 && date.minutes()}</b>m{' '}
      <b>{date.seconds()}</b>s
    </LabelTime>
  )
}
