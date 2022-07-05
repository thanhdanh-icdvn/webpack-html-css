import * as types from './UserList.constants'

export const getUserListRequested = () => ({
  type: types.GET_USER_LIST_REQUESTED
})

export const getUserListSuccess = (payload: ResGetUserApi) => {
  return {
    type: types.GET_USER_LIST_SUCCESS,
    payload
  }
}

export const getUserListFailed = (payload: ResGetUserApi) => {
  return {
    type: types.GET_USER_LIST_FAILED,
    payload
  }
}
