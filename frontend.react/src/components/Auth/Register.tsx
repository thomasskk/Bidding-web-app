import {
  RegisterForm,
  InputDiv,
  Input,
  Submit,
  Select,
  BlurFocus,
  Cross,
} from './style'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { useRef } from 'react'
import cross from './img/cross.png'
import { useAppDispatch } from '../../hook'

export default function Register(props: { show: any }) {
  let registrationErrorMessage = useRef<String>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm()

  const dispatch = useAppDispatch()

  const onSubmit = async (data: any) => {
    try {
      const token = (await axios.post(process.env.REACT_APP_API_URL + 'register', data))
        .data
      localStorage.setItem('token', token)
      dispatch({
        type: 'AUTHENTICATED',
        payload: true,
      })
      props.show()
    } catch (error) {
      registrationErrorMessage.current = error.response.data.message
    }
  }

  return (
    <>
      <BlurFocus />
      <RegisterForm onSubmit={handleSubmit(onSubmit)}>
        <Cross src={cross} alt="" onClick={props.show}></Cross>
        <span>{registrationErrorMessage.current}</span>
        <InputDiv>
          <Input
            type="text"
            placeholder="First name"
            {...register('firstName', {
              required: 'This field is required.',
              maxLength: {
                value: 30,
                message: 'Max lenght is 30 characters.',
              },
            })}
          />
        </InputDiv>
        <ErrorMessage
          errors={errors}
          name="firstName"
          render={({ message }) => <span>{message}</span>}
        />
        <InputDiv>
          <Input
            type="text"
            placeholder="Last name"
            {...register('lastName', {
              required: 'This field is required.',
              maxLength: {
                value: 30,
                message: 'Max lenght is 30 characters.',
              },
            })}
          />
        </InputDiv>
        <ErrorMessage
          errors={errors}
          name="lastName"
          render={({ message }) => <span>{message}</span>}
        />
        <InputDiv>
          <Select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </InputDiv>
        <InputDiv>
          <Input
            type="text"
            placeholder="Email"
            {...register('email', {
              required: 'This field is required.',
              pattern: {
                value: /^(?=.{3,50}$)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'Enter a valid email.',
              },
            })}
          />
        </InputDiv>
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <span>{message}</span>}
        />
        <InputDiv>
          <Input
            type="tel"
            placeholder="Phone number"
            {...register('phone', {
              required: 'This field is required.',
              pattern: {
                value: /^[0-9]{7,15}$/,
                message: 'Enter a valid number.',
              },
            })}
          />
        </InputDiv>
        <ErrorMessage
          errors={errors}
          name="phone"
          render={({ message }) => <span>{message}</span>}
        />
        <InputDiv>
          <Input
            type="text"
            placeholder="Street"
            {...register('street', {
              required: 'This field is required.',
              maxLength: {
                value: 90,
                message: 'Max lenght is 90 characters.',
              },
            })}
          />
        </InputDiv>
        <ErrorMessage
          errors={errors}
          name="street"
          render={({ message }) => <span>{message}</span>}
        />
        <InputDiv>
          <Input
            type="text"
            placeholder="ZIP"
            {...register('zip', {
              required: 'This field is required.',
              maxLength: {
                value: 10,
                message: 'Max lenght is 10 characters.',
              },
            })}
          />
        </InputDiv>
        <ErrorMessage
          errors={errors}
          name="zip"
          render={({ message }) => <span>{message}</span>}
        />
        <InputDiv>
          <Input
            type="text"
            placeholder="City"
            {...register('city', {
              required: 'This field is required.',
              maxLength: {
                value: 50,
                message: 'Max lenght is 50 characters.',
              },
            })}
          />
        </InputDiv>
        <ErrorMessage
          errors={errors}
          name="city"
          render={({ message }) => <span>{message}</span>}
        />
        <InputDiv>
          <Input
            type="text"
            placeholder="Username"
            {...register('username', {
              required: 'This field is required.',
              maxLength: {
                value: 30,
                message: 'Max lenght is 30 characters.',
              },
              minLength: {
                value: 5,
                message: 'Min lenght is 5 characters.',
              },
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
              maxLength: {
                value: 30,
                message: 'Max lenght is 30 characters.',
              },
              minLength: {
                value: 5,
                message: 'Min lenght is 5 characters.',
              },
            })}
          />
        </InputDiv>
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <span>{message}</span>}
        />
        <InputDiv>
          <Input
            type="password"
            placeholder="Confirm"
            {...register('passwordRepeat', {
              required: 'This field is required.',
              validate: {
                validate: (value) =>
                  value === getValues().password || 'Password must match',
              },

              maxLength: {
                value: 30,
                message: 'Max lenght is 30 characters.',
              },
              minLength: {
                value: 5,
                message: 'Min lenght is 5 characters.',
              },
            })}
          />
        </InputDiv>
        <ErrorMessage
          errors={errors}
          name="passwordRepeat"
          render={({ message }) => <span>{message}</span>}
        />

        <Submit type="submit">Register</Submit>
      </RegisterForm>
    </>
  )
}
