import styled from 'styled-components'
import mixins from '../../utils/mixins'
import { createGlobalStyle } from 'styled-components'
import { CoreWrapper } from '../../style'
import { Nav } from 'components/Navbar/style'

export const Center = createGlobalStyle`
${CoreWrapper} {
  ${mixins.flex('center', 'center')};
}
`

export const LoginForm = styled.form`
  ${mixins.flex('center', 'center', 'column')};
  z-index: 204;
  max-width: 300px;
  padding: 50px;
  border-color: black;
  background-color: white;
  border: 1px solid black;
`

export const RegisterForm = styled(LoginForm)`
  top: 40px;
  flex-wrap: wrap;
  max-width: 800px;
`

export const InputDiv = styled.div`
  border: 1px solid #d0d0d0;
  height: 45px;
  padding: 6px;
  display: flex;
  margin: 7px;
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
  margin-top: 15px;
`

export const Select = styled.select`
  ${mixins.border};
  flex: 1;
`
