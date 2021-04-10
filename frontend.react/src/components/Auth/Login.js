import { LoginForm, InputDiv, Input, Submit, GlobalStyleForm, Cross } from './style'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useRef } from 'react'
import cross from './img/cross.png'

export default function Login(props) {
  let loginErrorMessage = useRef('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const token = (await axios.post(process.env.REACT_APP_API_URL + 'login', data)).data
      localStorage.setItem('token', token)
      props.show()
    } catch (error) {
      loginErrorMessage.current = 'Wrong username or password'
    }
  }

  return (
    <>
      <GlobalStyleForm />
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Cross src={cross} alt="" onClick={props.show} ></Cross>
        <span>{loginErrorMessage.current}</span>
        <InputDiv>
          <Input
            name="username"
            type="text"
            placeholder="Username"
            {...register('username', {
              required: 'This field is required.',
            })}
          />
        </InputDiv>
        <ErrorMessage
          errors={errors}
          name="username"
          render={({ message }) => <span>{message}</span>}
        />
        <InputDiv>
          <Input
            name="password"
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'This field is required.',
            })}
          />
        </InputDiv>
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <span>{message}</span>}
        />
        <Submit type="submit">Login</Submit>
      </LoginForm>
    </>
  )
}
