import React, { Fragment, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { login } from './Login.thunks'
import { LoginButton, Title } from './Login.styles'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../constants/paths'
import { FiLogIn } from 'react-icons/fi'
import { Helmet } from 'react-helmet-async'
const mapStateToProps = (state: any) => ({
  loading: state.loading
})

const mapDispatchToProps = {
  login
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

const Login = (props: Props) => {
  const { login, loading } = props
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!loading) {
      const payload = { username, password }
      login(payload)
        .then(() => {
          navigate(PATH.HOME, { replace: true })
        })
        .catch((err) => {
          setError(err.payload.message)
        })
    }
  }

  return (
    <Fragment>
      <Helmet>
        <title>Login page</title>
        <meta name='description' content='Login page' />
        <link rel='canonical' href='/login' />
        <meta name='robots' content='index, follow' />
        <meta property='og:description' content='Login page' />
        <meta property='og:image' content='https://via.placeholder.com/150/92c952.jpg' />
      </Helmet>
      <div className='container'>
        <div className='min-vh-100 row'>
          <div className='col-md-6 m-auto'>
            <form className='p-5 rounded-sm shadow text-center' onSubmit={submit}>
              <Title>Login</Title>
              <p className='text-muted'>Please enter your login and password!</p>
              <input
                type='text'
                placeholder='Username'
                onChange={handleUsername}
                className='form-control form-control-lg mb-4'
              />
              <input
                type='password'
                placeholder='Password'
                onChange={handlePassword}
                className='form-control form-control-lg mb-4'
              />
              {error && <div className='mb-3 text-danger text-xl-center'>{error}</div>}
              <LoginButton type='submit' className='btn btn-block btn-info btn-lg'>
                <FiLogIn />
                Login
              </LoginButton>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default connector(Login)
