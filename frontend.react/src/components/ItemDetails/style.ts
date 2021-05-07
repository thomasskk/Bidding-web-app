import styled from 'styled-components'
import mixins from '../../utils/mixins'

export const Wrapper = styled.div`
  ${mixins.flex('center')}
  padding-top: 50px;
  position: relative;
  height: 100vh;
  z-index:204;
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

export const Stats = styled.div`
  min-width: 0;
`
