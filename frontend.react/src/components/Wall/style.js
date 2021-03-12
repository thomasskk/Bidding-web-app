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
  margin: 40px;
  border-radius: 10px;
  box-shadow:0 0 0 1px hsla(0, 0%, 47.8%, 0.5);;  
  align-items: center;
  padding: 30px 30px 5px 30px;
  background:white;
  > img {
    border-radius: 10px;
  }
  div:first-of-type {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5px 0 50px 0;
    // name
    label:first-of-type {
      font-size: 18px;
      margin-bottom: 12px;
    }
    // price
    label:last-of-type {
      font-size: 15px;
      font-weight: bold;
    }
  }

  // date
  div:last-of-type {
    display: flex;
    width: 100%;
    justify-content: space-between;
    label {
      font-size: 12px;
    }
    img {
      width: 20px;
    }
    button {
      justify-content: space-evenly;
      display: flex;
      justify-content: center;
      cursor: pointer;
      border: none;
      outline: none;
      // bid
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
