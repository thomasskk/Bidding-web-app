import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 20px;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: thin solid gray;
  margin: 40px;
  border-radius: 10px;
  align-items: center;
  padding: 30px 30px 8px 30px;
  > img {
    border-radius:10px;
  }

    // name price
    div:first-of-type {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;
    label:first-of-type {
      font-size: 18px;
    }
    label:last-of-type {
      font-size: 15px;
      font-weight: bold;
    }
  }


  // date bookmark bid
  div:last-of-type {
    display: flex;
    width: 100%;
    justify-content: space-between;

    label {
      font-size: 12px;
    }
    img {
      width:20px;
    }
    button {
      justify-content: space-evenly;
      display: flex;
      justify-content: center;
      cursor: pointer;
      border: none;
      outline: none;
      :first-of-type{
        border-radius:50%;
        width: 30px;
        height: 30px;
        img{
          width:100%;
          height:100%;
        }

      }
      :last-of-type {
        background-color: dodgerblue;
        color: white;
        border-radius: 10px;
        width: 55px;
        height: 20px;
      }
    }
  }
`;
