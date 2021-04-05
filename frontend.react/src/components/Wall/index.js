import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import shortid from 'shortid'
import Bookmark from './Bookmark.js'
import { Container, ItemContainer, ItemCore, ItemFooter, ItemImage } from './style'
import LabelDate from './LabelDate'

export default function Wall() {
  const [item, setItem] = useState([])
  const [slice, setSlice] = useState(0)
  const searchName = useSelector((state) => state.searchName)
  const searchCategory = useSelector((state) => state.searchCategory)

  useEffect(() => {
    setItem([])
    setSlice(0)
  }, [searchName, searchCategory])

  useEffect(() => {
    ;(async () => {
      const data = (
        await axios(
          process.env.REACT_APP_API_URL + `item/${searchCategory}/${slice}/${searchName}`
        )
      ).data
      setItem((item) => [
        ...item,
        ...data.map((item) => (
          <ItemContainer key={shortid.generate()}>
            <ItemImage>
              <img src={`https://robohash.org/${item.itemId}/300/300`} alt="" />
            </ItemImage>
            <ItemCore>
              <label>{item.name}</label>
              <label> {item.description}</label>
              <label> Current price : {item.initialPrice}$</label>
              <label> {item.category.name}</label>
            </ItemCore>
            <ItemFooter>
              <LabelDate endingDate={item.biddingEndingDate} />
              <Bookmark />
              <button> Bid </button>
            </ItemFooter>
          </ItemContainer>
        )),
      ])
    })()
  }, [searchCategory, searchName, slice])

  return (
    <Container
      dataLength={item.length}
      next={() => setSlice(slice + 1)}
      scrollThreshold={0.8}
      hasMore={slice >= item.length ? false : true}
    >
      {item}
    </Container>
  )
}
