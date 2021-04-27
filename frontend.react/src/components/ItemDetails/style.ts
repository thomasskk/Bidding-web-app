import styled, { createGlobalStyle, css } from 'styled-components'
import mixins from '../../utils/mixins'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'

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
  height: 600px;
  width: 100%;
  transform: translate(-50%, -50%);
  left: 50%;
  @media screen and (max-width: 1400px) {
    transform: translate(0, -50%);
    left: 0;
  }
  background: white;
  border-radius: 10px;
  padding: 10px;
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


export const Res = styled(ResponsiveContainer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
