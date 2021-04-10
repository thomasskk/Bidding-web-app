import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import mixins from '../../utils/mixins'

export const LoginForm = styled.form`
  ${mixins.flex('center', 'center', 'column')};
  z-index: 10;
  position: absolute;
  top: 250px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  max-width: 300px;
  padding: 50px;
  border-radius: 10px;
  border-color: black;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
`

export const RegisterForm = styled(LoginForm)`
  top: 40px;
  flex-wrap: wrap;
`

export const GlobalStyleForm = createGlobalStyle`
  #root > div,nav:not(${LoginForm}){ 
    pointer-events: none;
    filter: blur(10px);
    }
  body{
    overflow: hidden;
  }
`
export const Cross = styled.img`
  position: absolute;
  ${mixins.WH(15, 15)};
  right:0;
  top:0;
  margin:10px;
  cursor:pointer;
`

export const InputDiv = styled.div`
  border: 1px solid #d0d0d0;
  height: 45px;
  padding: 6px;
  display: flex;
  margin: 7px;
  border-radius: 5px;
  width: 100%;
`

export const Input = styled.input`
  min-width: 0;
  font-size: 15px;
  ${mixins.border};
`

export const Submit = styled.button`
  ${mixins.border};
  background: black;
  height: 30px;
  color: white;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  margin-top: 15px;
`

export const Select = styled.select`
  ${mixins.border};
  flex: 1;
`
