import axios from 'axios'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useAppDispatch } from '../../../hook'
import { Category, Search, SearchItem, Separator } from './style'
import React from 'react'

export default function SearchBar(): JSX.Element {
  const dispatch = useAppDispatch()
  const categoryRef = useRef('All')

  interface Category {
    id: number
    name: string
  }

  const [category, setCategory] = useState<Category[] | undefined>(undefined)

  useEffect(() => {
    ;(async () =>
      setCategory((await axios(process.env.REACT_APP_API_URL + 'category')).data))()
  }, [])

  const returnCategory = () => {
    return category?.map((category: Category, index: number) => (
      <>
        <input name="test" type="radio" id={`opt${index}`} checked />
        <label htmlFor={`opt${index}`}>{category.name}</label>
      </>
    ))
  }

  const onClickMenuOption = (e: React.MouseEvent<HTMLOptionElement, MouseEvent>) => {
    categoryRef.current = e.currentTarget.value
    dispatch({
      type: 'SET_SEARCH_CATEGORY',
      payload: e.currentTarget.id,
    })
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
      <Search>
        <SearchItem
          placeholder="Search"
          onChange={(e) => OnChangeInputSearch(e)}
        ></SearchItem>
        <Separator />
        <Category tabIndex={1}>{returnCategory()}</Category>
      </Search>
    </>
  )
}
