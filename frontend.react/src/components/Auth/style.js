import styled from 'styled-components'

export const Form = styled.form`
  position: absolute;
  top: 40%;
  margin: auto;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  max-width: 300px;
  justify-content: center;
  align-items: center;
  padding: 50px;
  border-radius: 10px;
  border-color: black;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  flex-direction: column;
  background-color: white;
`

export const InputDiv = styled.div`
  border: 1px solid #d0d0d0;
  height: 45px;
  padding: 6px;
  width: 150px;
  display: flex;
  margin: 7px;
  border-radius: 5px;
`

export const Input = styled.input`
  min-width: 0;
  font-size: 15px;
  border: none;
  outline: none;
`

export const Login = styled.button`
  outline: none;
  border: none;
  background: black;
  height: 30px;
  color: white;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  margin-top: 15px;
`
