import { getAllCloudinaryResourcesApi } from '@/apis/cloudinary.api'
import * as actions from './FileManager.actions'

export const getAllCloudinaryResources = () => (dispatch: AppDispatch) => {
  dispatch(actions.getAllResourceRequested())
  return getAllCloudinaryResourcesApi()
    .then((res) => dispatch(actions.getAllResourceSuccess(res)))
    .catch((err) => Promise.reject(dispatch(actions.getAllResourceFailed(err))))
}
