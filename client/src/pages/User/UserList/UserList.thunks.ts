import * as actions from './UserList.actions'
import { getUserListApi } from '@/apis/user.api'

export const getUserList = () => (dispatch: AppDispatch) => {
  dispatch(actions.getUserListRequested())
  return getUserListApi()
    .then((res: ResGetUserApi) => dispatch(actions.getUserListSuccess(res)))
    .catch((err) => Promise.reject(dispatch(actions.getUserListFailed(err))))
}
