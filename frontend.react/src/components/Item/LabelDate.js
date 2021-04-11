import moment from 'moment'
import { useEffect, useState } from 'react'
import { LabelTime } from './style'

export default function LabelDate({ endingDate }) {
  var [date, setDate] = useState(moment.duration(moment(endingDate).diff(moment())))

  useEffect(() => {
    var timer = setInterval(
      () => setDate(moment.duration(moment(endingDate).diff(moment()))),
      1000
    )
    return function cleanup() {
      clearInterval(timer)
    }
  }, [date, endingDate])

  return (
    <LabelTime>
      Ends in : {date.days() !== 0 && date.days() + 'd'}{' '}
      {date.hours() !== 0 && date.hours()}h {date.minutes() !== 0 && date.minutes()}m{' '}
      {date.seconds()}s
    </LabelTime>
  )
}
