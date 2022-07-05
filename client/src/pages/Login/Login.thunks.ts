import { loginApi } from '../../apis/user.api'
import { loginFailed, loginRequested, loginSuccess } from './Login.actions'

export const login = (payload: ReqLogin) => (dispatch: AppDispatch) => {
  dispatch(loginRequested())
  return loginApi(payload)
    .then((res: ResLoginApi) => {
      localStorage.setItem('token', res.data.accessToken)
      return dispatch(loginSuccess(res))
    })
    .catch((err) => Promise.reject(dispatch(loginFailed(err))))
}
