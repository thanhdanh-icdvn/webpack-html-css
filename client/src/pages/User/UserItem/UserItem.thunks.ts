import * as actions from './UserItem.actions'
import { getUserItemApi } from '../../../apis/user.api'

export const getUserItem = (id: string) => (dispatch: AppDispatch) => {
  dispatch(actions.getUserItemRequested())
  return getUserItemApi(id)
    .then((res) => dispatch(actions.getUserItemSuccess(res)))
    .catch((err) => Promise.reject(dispatch(actions.getUserItemFailed(err))))
}
