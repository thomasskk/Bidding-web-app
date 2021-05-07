import axios from 'axios'
import { useAppDispatch } from 'hook'
import React, { ChangeEvent, useEffect, useState } from 'react'
import shortid from 'shortid'
import {
  Category,
  ItemListCategory,
  ListCategory,
  Search,
  SearchItem,
  Separator,
  Wrapper,
} from './style'

export default function SearchBar(): JSX.Element {
  const dispatch = useAppDispatch()

  interface Category {
    id: number
    name: string
  }

  const [category, setCategory] = useState<Category[] | undefined>(undefined)

  useEffect(() => {
    ;(async () =>
      setCategory((await axios(process.env.REACT_APP_API_URL + 'category')).data))()
  }, [])

  const onClickCategory = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {

    dispatch({
      type: 'SET_SEARCH_CATEGORY',
      payload: e.currentTarget.innerHTML,
    })
  }

  const returnCategory = () => {
    return category?.map((category: Category, index: number) => (
      <ItemListCategory key={shortid.generate()}>{category.name}</ItemListCategory>
    ))
  }

  const OnChangeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()
    dispatch({
      type: 'SET_SEARCH_NAME',
      payload: e.target.value,
    })
  }

  return (
    <>
      <Wrapper>
        <Search>
          <SearchItem
            placeholder="Search"
            onChange={(e) => OnChangeInputSearch(e)}
          ></SearchItem>
          <Separator />
          <Category tabIndex={1}>
            <span>Category</span>
            <ListCategory>{returnCategory()}</ListCategory>
          </Category>
        </Search>
      </Wrapper>
    </>
  )
}
