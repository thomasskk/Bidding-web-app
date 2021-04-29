import axios from 'axios'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import shortid from 'shortid'
import { useAppDispatch } from '../../hook'
import ClickOutsideListener from '../../utils/ClickOutsideListener'
import { MenuOption } from '../Navbar/style'
import { Category, Container, MenuCategory, Search, SearchItem, Separator } from './style'
import React from 'react'

export default function SearchBar(): JSX.Element {
  const dispatch = useAppDispatch()
  const categoryRef = useRef('All')
  const menuRef = useRef<HTMLDivElement | null>(null)
  const [isActive, setIsActive] = ClickOutsideListener(menuRef, false)

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
    return category?.map((category: Category) => (
      <MenuOption
        key={shortid.generate()}
        id={category.name}
        onClick={(e) => onClickMenuOption(e)}
      >
        {category.name}
      </MenuOption>
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
    <Container>
      <Search>
        <SearchItem>
          <div>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => OnChangeInputSearch(e)}
            />
          </div>
        </SearchItem>
        <Separator />
        <Category onClick={() => setIsActive(!isActive)}>
          <label>Category : {categoryRef.current}</label>
          <MenuCategory className={`${isActive ? 'active' : 'inactive'}`} ref={menuRef}>
            {returnCategory()}
          </MenuCategory>
        </Category>
      </Search>
    </Container>
  )
}
