import axios from 'axios'
import { useAppSelector } from 'hook'
import React, { ChangeEvent, useRef, useState } from 'react'
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
  SortAction,
} from './style'
import sortAction from './sortAction'

export default function Filter(): JSX.Element {
  const [category, setCategory] = useState<any[] | undefined>(undefined)
  const [filterParams, setFilterParams] = useSearchParams()
  const ETHUSD = useAppSelector((state) => state.ETHUSD)
  const params = useRef<Record<string, string | string[]>>({})

  useAsyncEffect(async () => {
    setCategory((await axios(process.env.REACT_APP_API_URL + 'category')).data)
  }, [])

  const CategoryOnChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const isSelected = e.currentTarget.getAttribute('data-focus')
    const targetCategory = e.currentTarget.innerHTML
    const categoryList = filterParams.getAll('category')

    if (isSelected === 'true') {
      params.current.category = categoryList.filter((e) => e !== targetCategory)
      e.currentTarget.setAttribute('data-focus', 'false')
    } else {
      params.current.category = [...categoryList, targetCategory]
    }
    setFilterParams(params.current)
  }

  const SearchOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()
    const value = e.currentTarget.value
    value ? (params.current.search = value) : delete params.current.search
    setFilterParams(params.current)
  }

  const PriceRangeOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    const placeholder = e.currentTarget.getAttribute('placeholder')
    if (placeholder === 'Min') {
      value
        ? (params.current.priceMin = String(Number(value) / ETHUSD))
        : delete params.current.priceMin
    } else {
      value
        ? (params.current.priceMax = String(Number(value) / ETHUSD))
        : delete params.current.priceMax
    }
    setFilterParams(params.current)
  }

  const SortActionOnChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const action = e.currentTarget.innerHTML
    const isSelected = e.currentTarget.getAttribute('data-focus')

    if (isSelected === 'true') {
      delete params.current.sort
      e.currentTarget.setAttribute('data-focus', 'false')
    } else {
      params.current.sort = action
    }

    setFilterParams(params.current)
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
          <List>
            {category?.map((category: any) => (
              <ItemList
                key={shortid.generate()}
                onClick={(e) => CategoryOnChange(e)}
                data-focus={
                  filterParams.getAll('category').includes(category.name)
                    ? 'true'
                    : 'false'
                }
              >
                {category.name}
              </ItemList>
            ))}
          </List>
        </Category>
      </Search>
      <FilterE>
        <Price>
          <span>Price Range ($) :</span>
          <Range
            placeholder="Min"
            type="number"
            onChange={(e) => PriceRangeOnChange(e)}
            min="1"
          />
          <Range
            placeholder="Max"
            type="number"
            onChange={(e) => PriceRangeOnChange(e)}
            min="1"
          />
          <SortAction tabIndex={1}>
            <span>
              Sort by
              <ArrowUpDown />
            </span>
            <List>
              <>
                {Object.entries(sortAction).map(([key]) => (
                  <ItemList
                    key={shortid.generate()}
                    onClick={(e) => SortActionOnChange(e)}
                    data-focus={params.current.sort === key ? 'true' : 'false'}
                  >
                    {key}
                  </ItemList>
                ))}
              </>
            </List>
          </SortAction>
        </Price>
      </FilterE>
    </Container>
  )
}
