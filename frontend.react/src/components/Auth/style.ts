import styled, { createGlobalStyle } from 'styled-components'
import { CoreWrapper } from '../../style'
import mixins from '../../utils/mixins'

export const Center = createGlobalStyle`
${CoreWrapper} {
  ${mixins.flex('center', 'center')};
}
`

export const LoginForm = styled.form`
  ${mixins.flex('center', 'center', 'column', 'flex-grow')};
  z-index: 204;
  max-width: 300px;
  width: 100%;
  padding: 50px;
  border-color: black;
  background-color: white;
  border: 1px solid black;
`

export const RegisterForm = styled(LoginForm)`
  margin-top: 40px;
  max-width: 800px;
  @media screen and (max-width: 550px) {
    padding: 10px 10px 10px 0;
  }
`

export const FormWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 100%;
  @media screen and (max-width: 550px) {
    display: block;
  }
`

export const InputDiv = styled.div`
  border: 1px solid #d0d0d0;
  height: 45px;
  padding: 6px;
  display: flex;
  margin: 7px;
  max-width: 300px;
  min-width: 100%;
`

export const Input = styled.input`
  width: 100%;
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
  margin-top: 15px;
`

export const Select = styled.select`
  ${mixins.border};
  flex: 1;
`
