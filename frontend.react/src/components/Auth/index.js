import { Form, InputDiv, Input, Login } from './style'
import axios from 'axios'
import { useForm } from 'react-hook-form'

export default function Auth(props) {
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    const token = (await axios.post(process.env.REACT_APP_API_URL + 'login', data)).data
    localStorage.setItem('token', token)
    props.onSubmit()
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputDiv>
        <Input
          type="text"
          placeholder="Username"
          {...register('username', { required: true, maxLength: 15 })}
        />
      </InputDiv>
      <InputDiv>
        <Input
          type="text"
          placeholder="Password"
          {...register('password', { required: true, maxLength: 15 })}
        />
      </InputDiv>
      <Login type="submit">Login</Login>
    </Form>
  )
}
