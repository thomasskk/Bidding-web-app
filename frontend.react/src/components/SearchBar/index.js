import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import ClickOutsideListener from '../../utils/ClickOutsideListener'
import { MenuOption } from '../Navbar/style'
import { Category, Container, MenuCategory, Search, SearchItem, Separator } from './style'

export default function SearchBar() {
  const dispatch = useDispatch()
  const categoryRef = useRef('All')
  const menuRef = useRef()
  const [isActive, setIsActive] = ClickOutsideListener(menuRef, false)
  const [category, setCategory] = useState([])

  useEffect(() => {
    ;(async () =>
      setCategory((await axios(process.env.REACT_APP_API_URL + 'category')).data))()
  }, [])

  const returnCategory = () => {
    return category.map((category) => (
      <MenuOption
        key={category.categoryId}
        id={category.name}
        onClick={(e) => onClickMenuOption(e)}
      >
        {category.name}
      </MenuOption>
    ))
  }

  const onClickMenuOption = (e) => {
    categoryRef.current = e.target.value
    dispatch({
      type: 'SET_SEARCH_CATEGORY',
      payload: e.target.id,
    })
  }

  const OnChangeInputSearch = (e) => {
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
