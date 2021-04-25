import styled, { createGlobalStyle, css } from 'styled-components'
import mixins from '../../utils/mixins'

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
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1400px;
  background: white;
  border-radius: 10px;
  padding: 10px;
`

export const Table = styled.table`
  ${mixins.shadow};
  max-width: 400px;
  width: 100%;
  max-height:100px;
  overflow: scroll;
  table-layout: fixed;
  border-style: hidden;
  margin: 35px 0 0 0;
  border-radius: 10px;
  border-collapse: collapse;

  tr {
    background: #f8f8f8;
    padding: 0.35em;
  }

  tbody:nth-of-type(odd) {
    tr {
      background: #e8e8e8;
    }
  }

  th:first-child {
    border-radius: 10px 0 0 0;
  }

  th:last-child {
    border-radius: 0 10px 0 0;
  }

  tbody:last-child > tr > td:first-child {
    border-radius: 0 0 0 10px;
  }

  tbody:last-child > tr > td:last-child {
    border-radius: 0 0 10px 0;
  }

  th,
  td {
    padding: 0.625em;
    text-align: center;
  }

  thead tr {
    background: red;
  }

  th {
    overflow: hidden;
    font-size: 16px;
    letter-spacing: 0.1em;
    color: white;
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
