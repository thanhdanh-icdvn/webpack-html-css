import React, { Fragment, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from './Login.thunks'
import { PATH } from '../../constants/paths'
import { Helmet } from 'react-helmet-async'

import { LoginButton, StyledGoogleButton, Title } from './Login.styles'
import { FiLogIn } from 'react-icons/fi'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import theme from '@/theme'

const mapStateToProps = (state: AppState) => ({
  loading: state.login.loading
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
              <div className='login-email-block py-3'>
                <Title>Login</Title>
                <p className='text-muted text-sm-center'>Login by username and password</p>
                <input
                  autoComplete='username'
                  type='text'
                  placeholder='Username'
                  onChange={handleUsername}
                  className='form-control form-control-lg mb-4'
                />
                <input
                  autoComplete='current-password'
                  type='password'
                  placeholder='Password'
                  onChange={handlePassword}
                  className='form-control form-control-lg mb-4'
                />
                {error && <div className='mb-3 text-danger text-xl-center'>{error}</div>}
                <LoginButton type='submit' className='btn btn-info btn-lg'>
                  <FiLogIn />
                  Login
                </LoginButton>
              </div>
              <StyledGoogleButton className='google-btn'>
                <button className='google-btn__wrapper'>
                  <FcGoogle className='google-btn__icon' />
                  <div className='google-btn__text'>
                    <span>Sign in with Google</span>
                  </div>
                </button>
              </StyledGoogleButton>
              <StyledGoogleButton className='facebook-btn mt-3'>
                <button className='facebook-btn__wrapper'>
                  <FaFacebook className='facebook-btn__icon' color={theme.facebook} />
                  <div className='facebook-btn__text'>
                    <span>Sign in with Facebook</span>
                  </div>
                </button>
              </StyledGoogleButton>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default connector(Login)
