import axios from 'axios'
import { useAppSelector } from 'hook'
import React, { ChangeEvent, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import shortid from 'shortid'
import useAsyncEffect from 'use-async-effect'
import {
  ArrowUpDown,
  Category,
  Container,
  FilterE,
  ItemList,
  List,
  Price,
  Range,
  Search,
  SearchItem,
  Separator,
  SortBy,
} from './style'

export default function Filter(): JSX.Element {
  const [category, setCategory] = useState<any[] | undefined>(undefined)
  const [filterParams, setFilterParams] = useSearchParams()
  const ETHUSD = useAppSelector((state) => state.ETHUSD)

  useAsyncEffect(async () => {
    setCategory((await axios(process.env.REACT_APP_API_URL + 'category')).data)
  }, [])

  const CategoryOnChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const isSelected = e.currentTarget.getAttribute('data-focus')
    const targetCategory = e.currentTarget.innerHTML
    const categoryList = filterParams.getAll('category')

    if (isSelected === 'true') {
      setFilterParams({ category: categoryList.filter((e) => e !== targetCategory) })
      e.currentTarget.setAttribute('data-focus', 'false')
    } else {
      setFilterParams({ category: [...categoryList, targetCategory] })
    }
  }

  const returnCategory = () => {
    return category?.map((category: any) => (
      <ItemList
        key={shortid.generate()}
        onClick={(e) => CategoryOnChange(e)}
        data-focus={
          filterParams.getAll('category').includes(category.name) ? 'true' : 'false'
        }
      >
        {category.name}
      </ItemList>
    ))
  }

  const SearchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()
    filterParams.set('search', e.currentTarget.value)
    setFilterParams(filterParams)
  }

  const PriceRangeOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    const placeholder = e.currentTarget.getAttribute('placeholder')
    if (placeholder === 'Min') {
      value
        ? filterParams.set('priceMin', String(Number(value) / ETHUSD))
        : filterParams.delete('priceMin')
    } else {
      value
        ? filterParams.set('priceMax', String(Number(value) / ETHUSD))
        : filterParams.delete('priceMax')
    }
    setFilterParams(filterParams)
  }

  return (
    <Container>
      <Search>
        <SearchItem placeholder="Search" onChange={(e) => SearchOnChange(e)}></SearchItem>
        <Separator />
        <Category tabIndex={1}>
          <span>
            Categories
            <ArrowUpDown />
          </span>
          <div>
            <List>{returnCategory()}</List>
          </div>
        </Category>
      </Search>
      <FilterE>
        <Price>
          <span>Price Range ($) :</span>
          <Range
            placeholder="Min"
            type="number"
            onChange={(e) => PriceRangeOnChange(e)}
          />
          <Range
            placeholder="Max"
            type="number"
            onChange={(e) => PriceRangeOnChange(e)}
          />
          <SortBy tabIndex={1}>
            <span>
              Sort by
              <ArrowUpDown />
            </span>
          </SortBy>
        </Price>
      </FilterE>
    </Container>
  )
}
