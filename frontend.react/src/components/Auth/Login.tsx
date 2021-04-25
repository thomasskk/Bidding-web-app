import { LoginForm, InputDiv, Input, Submit, BlurFocus, Cross } from './style'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useRef } from 'react'
import cross from './img/cross.png'
import { useDispatch } from 'react-redux'

export default function Login(props: { show: any }) {
  let loginErrorMessage = useRef<String>('')
  const dispatch = useDispatch()

  type FormValues = {
    username: string
    password: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = async (data: any) => {
    try {
      const token = (await axios.post(process.env.REACT_APP_API_URL + 'login', data)).data
      localStorage.setItem('token', token)
      dispatch({
        type: 'AUTHENTICATED',
        payload: true,
      })
      props.show()
    } catch (error) {
      loginErrorMessage.current = 'Wrong username or password'
    }
  }

  return (
    <>
      <BlurFocus />
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Cross src={cross} alt="" onClick={props.show}></Cross>
        <span>{loginErrorMessage.current}</span>
        <InputDiv>
          <Input
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
