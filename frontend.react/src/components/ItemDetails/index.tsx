import React, { useState, useEffect, useRef } from 'react'
import { BlurFocus, Wrapper, Table } from './style'
import Item from '../Item'
import { Cross } from '../Auth/style'
import cross from '../Auth/img/cross.png'
import axios from 'axios'
import shortid from 'shortid'

export default function ItemDetails(props: {
  item: any
  authenticated: boolean
  bookmark: any[] | null
  setfocus: () => void
}) {
  const [bid, setBid] = useState<any[] | null>(null)

  useEffect(() => {
    ;(async () => {
      const data = await (
        await axios(process.env.REACT_APP_API_URL + `bid/get/${props.item.id}`)
      ).data
      setBid(data)
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
        {bid && (
          <Table>
            <thead>
              <tr>
                <th>User</th>
                <th>Pice</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {bid?.map((bid: any) => (
                <tr key={shortid.generate()}>
                  <td data-label="User">{bid.user.username}</td>
                  <td data-label="Pice">{bid.price}</td>
                  <td data-label="Date">{bid.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Wrapper>
    </>
  )
}
