import { ItemContainer, ItemCore, ItemFooter, ItemImage } from './style'
import shortid from 'shortid'
import Bookmark from '../Bookmark/index.js'
import LabelDate from './LabelDate'

export default function Item(props) {
  return (
    <ItemContainer key={shortid.generate()}>
      <ItemImage>
        <img src={`https://robohash.org/${props.item.id}/300/300`} alt="" />
      </ItemImage>
      <ItemCore>
        <label>{props.item.name}</label>
        <label> {props.item.description}</label>
        <label> Current price : {props.item.initialPrice}$</label>
        <label> Category : {props.item.category.name}</label>
      </ItemCore>
      <ItemFooter>
        <LabelDate endingDate={props.item.biddingEndingDate} />
        {props.authenticated && (
          <>
            <Bookmark
              itemId={props.item.id}
              bookmark={props.bookmark?.some(
                (bookmark) => bookmark.itemId === props.item.id
              )}
            />
            <button> Bid </button>
          </>
        )}
      </ItemFooter>
    </ItemContainer>
  )
}
