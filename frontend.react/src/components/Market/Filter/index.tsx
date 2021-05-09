import axios from 'axios'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import shortid from 'shortid'
import {
  Category,
  ItemListCategory,
  ListCategory,
  Search,
  SearchItem,
  Separator,
  Price,
  From,
  To,
  Container,
  FilterE,
} from './style'

export default function Filter(): JSX.Element {
  const [filterParams, setFilterParams] = useSearchParams()

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
    const isSelected = e.currentTarget.getAttribute('data-focus')
    const category = e.currentTarget.innerHTML
    const categoryList = filterParams.getAll('category')

    if (isSelected === 'true') {
      setFilterParams({ category: categoryList.filter((e) => e !== category) })
      e.currentTarget.setAttribute('data-focus', 'false')
    } else {
      setFilterParams({ category: [...categoryList, category] })
    }
  }

  const returnCategory = () => {
    return category?.map((category: Category) => (
      <ItemListCategory
        key={shortid.generate()}
        onClick={(e) => onClickCategory(e)}
        data-focus={
          filterParams.getAll('category').includes(category.name) ? 'true' : 'false'
        }
      >
        {category.name}
      </ItemListCategory>
    ))
  }

  const OnChangeInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()
    setFilterParams({ searchInput: e.target.value })
  }

  return (
    <>
      <Container>
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
        <FilterE>
          <Price>
            <From placeholder="Min" />
            <To placeholder="Max" />
          </Price>
        </FilterE>
      </Container>
    </>
  )
}
