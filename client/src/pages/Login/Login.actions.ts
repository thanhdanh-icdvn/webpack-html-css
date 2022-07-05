import * as types from './Login.constants'

export const loginRequested = () => ({
  type: types.LOGIN_REQUESTED
})

export const loginSuccess = (payload: ResLoginApi) => ({
  type: types.LOGIN_SUCCESS,
  payload
})

export const loginFailed = (payload: ResLoginApi) => ({
  type: types.LOGIN_FAILED,
  payload
})
