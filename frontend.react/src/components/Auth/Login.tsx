import { LoginForm, InputDiv, Input, Submit, Center } from './style'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export default function Login(): JSX.Element {
  const navigate = useNavigate()
  const loginErrorMessage = useRef<string>('')
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

  const onSubmit = async (data: never) => {
    try {
      const token = (await axios.post(process.env.REACT_APP_API_URL + 'login', data)).data
      localStorage.setItem('token', token)
      dispatch({
        type: 'AUTHENTICATED',
        payload: true,
      })
      navigate(-1)
    } catch (error) {
      loginErrorMessage.current = 'Wrong username or password'
    }
  }

  return (
    <>
      <Center />
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
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
