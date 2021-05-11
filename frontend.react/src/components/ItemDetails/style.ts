import { ItemImg } from 'components/Item/style'
import { CoreWrapper } from 'style'
import styled, { createGlobalStyle } from 'styled-components'
import mixins from '../../utils/mixins'

export const Center = createGlobalStyle`
${CoreWrapper} {
  ${mixins.flex('none', 'center', 'column')}  
}
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
  ${mixins.flex('center', 'center', 'row')}
  display:none;
`

export const ItemInfo = styled.div`
  z-index: 210;
  ${mixins.flex('center', 'none', 'row')}
  margin-top: 150px;
  width: 100%;
  ${ItemImg} {
    width: 500px;
    height: 500px;
  }
`

export const Text2 = styled.div`
  ${mixins.flex('none', 'none', 'column')}
  margin-top: 20px;
`

export const Text = styled(Text2)`
  font-size: 0.9em;
`

export const Img = styled(ItemImg)`
  margin: 0 120px 0 120px;
`

export const UserInfo = styled.div`
  ${mixins.flex('none', 'none')}
  margin-bottom:50px;
`

export const UserImg = styled(ItemImg)`
  border-radius: 50% 50%;
  max-width: 45px;
  max-height: 45px;
`

export const Profile = styled.div`
  ${mixins.flex('none', 'none', 'column')}
  font-size:0.9em;
  margin-left: 16px;
`

export const ViewImg = styled.img`
  max-width: 25px;
  max-height: 25px;
`
