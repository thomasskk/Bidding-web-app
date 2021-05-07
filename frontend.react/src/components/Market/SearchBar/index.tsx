import axios from 'axios'
import { useAppDispatch, useAppSelector } from 'hook'
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
  const categoryList = useAppSelector((state) => state.searchCategory)

  interface Category {
    id: number
    name: string
  }

  const [category, setCategory] = useState<Category[] | undefined>(undefined)

  useEffect(() => {
    ;(async () =>
      setCategory((await axios(process.env.REACT_APP_API_URL + 'category')).data))()
  }, [])

  const onClickCategory = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement
    const data = target.getAttribute('data-focus')
    if (data === 'false')
      dispatch({
        type: 'ADD_CATEGORY',
        payload: e.currentTarget.innerHTML,
      })
    else
      dispatch({
        type: 'REMOVE_CATEGORY',
        payload: e.currentTarget.innerHTML,
      })
    target.setAttribute('data-focus', 'false')
  }

  const returnCategory = () => {
    return category?.map((category: Category) => (
      <ItemListCategory
        key={shortid.generate()}
        onClick={(e) => onClickCategory(e)}
        data-focus={categoryList.includes(category.name) ? 'true' : 'false'}
      >
        {category.name}
      </ItemListCategory>
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
            <span>Categories</span>
            <ListCategory>{returnCategory()}</ListCategory>
          </Category>
        </Search>
      </Wrapper>
    </>
  )
}
