import axios from 'axios'
import { useAppDispatch } from 'hook'
import { useEffect } from 'react'
import useInterval from '../utils/useInterval'

export default function updateETHUSD(): void {
  const dispatch = useAppDispatch()

  const update = async () => {
    const exchangeRData = await (
      await axios('https://api.coinbase.com/v2/prices/ETH-USD/buy', {
        headers: {
          Authorization:
            'Bearer abd90df5f27a7b170cd775abf89d632b350b7c1c9d53e08b340cd9832ce52c2c',
        },
      })
    ).data

    dispatch({
      type: 'ETH_USD',
      payload: exchangeRData.data.amount,
    })
  }

  useEffect(() => {
    update()
  }, [])

  useInterval(update, 30000)
}
