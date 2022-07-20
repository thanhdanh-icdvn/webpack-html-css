import * as types from './FileManager.constants'

export const getAllResourceRequested = () => ({
  type: types.GET_ALL_RESOURCES_REQUESTED
})

export const getAllResourceSuccess = (payload: ResGetAllCloudinaryResourceApi) => ({
  type: types.GET_ALL_RESOURCES_SUCCESS,
  payload
})

export const getAllResourceFailed = (payload: ResGetAllCloudinaryResourceApi) => ({
  type: types.GET_ALL_RESOURCES_FAILED,
  payload
})
