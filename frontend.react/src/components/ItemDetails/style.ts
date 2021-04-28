import styled, { createGlobalStyle } from 'styled-components'
import mixins from '../../utils/mixins'
import { ResponsiveContainer } from 'recharts'

export const BlurFocus = createGlobalStyle`
    #root > .infinite-scroll-component__outerdiv > div > *:not(#focus),
    #root > div:first-of-type,nav
    {
      pointer-events: none;
      filter: blur(10px);
    }
    body {
      overflow: hidden;
    }
`

export const Wrapper = styled.div`
  ${mixins.flex('none', 'none', 'row')}
  position: fixed;
  z-index: 2;
  top: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  left: 50%;
  @media screen and (max-width: 1400px) {
    transform: translate(0, -50%);
    left: 0;
  }
  border-radius: 10px;
  padding: 30px;
  background: #f7f7f7;
  border: 3px solid black;
`

export const Table = styled.table`
  ${mixins.shadow};
  max-width: 400px;
  width: 100%;
  table-layout: fixed;
  border-style: hidden;
  border-radius: 10px;
  border-collapse: collapse;

  tbody {
    display: block;
    width: 100%;
    overflow: auto;
    max-height: 500px;
  }

  th,
  td {
    padding: 5px;
    text-align: center;
    width: 200px;
  }
  tr {
    background: #f8f8f8;
    padding: 0.35em;
    display: block;
  }

  thead tr {
    background: black;
    color: white;
    display: block;
  }

  @media screen and (max-width: 600px) {
    box-shadow: none;

    thead {
      display: none;
    }

    tr {
      ${mixins.shadow};
      display: block;
      margin: 0 0 20px 0;
    }

    td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    td::before {
      ${mixins.bold};
      content: attr(data-label);
      float: left;
      text-transform: uppercase;
    }

    td:last-child {
      border-bottom: 0;
    }
  }
`

export const Graph = styled.div`
  margin-left: 50px;
  min-width: 0;
  max-width: 500px;
  width: 100%;
  height: 300px;
  background: white;
  padding: 10px;
  border: 1px solid #d9cdcc;
  ${mixins.shadow};
`

export const Stats = styled.div`
  ${mixins.flex()}
  min-width: 0;
  flex-shrink: 1;
`
