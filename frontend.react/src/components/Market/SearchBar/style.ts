import styled from 'styled-components'
import mixins from '../../../utils/mixins'

export const Search = styled.div`
  ${mixins.flex('none', 'center', 'none', 1)};
  max-width: 500px;
  background: white;
  padding: 0;
  border-radius: 15px;
`


export const SearchItem = styled.input`
  ${mixins.border};
  width: 100%;
  padding: 10px;
  border-radius: 15px;
`

export const Separator = styled.div`
  height: 20px;
  border-left: 1px solid gray;
`

export const Category = styled.div<{ tabIndex: number }>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 250px;
  height: 40px;
  label {
    border-radius: 15px;
    padding: 0 30px 0 10px;
    min-height: 40px;
    display: flex;
    align-items: center;
    background: white;
    position: absolute;
    top: 0;
    width: 100%;
    pointer-events: none;
    order: 2;
    z-index: 1;
    transition: background 0.4s ease-in-out;
    box-sizing: border-box;
    overflow: hidden;
    white-space: nowrap;
    &:hover {
      background: #666;
    }
  }
  &:focus label {
    position: relative;
    pointer-events: all;
  }
  input {
    opacity: 0;
    position: absolute;
    left: -99999px;
    &:checked + label {
      order: 1;
      z-index: 2;
      background: white;
      border-top: none;
      position: relative;
    }
    &:checked + label:after {
      content: '';
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid white;
      position: absolute;
      right: 10px;
      top: calc(50% - 2.5px);
      pointer-events: none;
      z-index: 3;
    }
    &:checked + label:before {
      position: absolute;
      right: 0;
      height: 40px;
      width: 40px;
      content: '';
      background: white;
    }
  }
`
