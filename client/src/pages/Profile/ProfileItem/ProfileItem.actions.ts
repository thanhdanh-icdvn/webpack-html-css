import * as types from './ProfileItem.constants'
export const getProfileRequested = () => ({
  type: types.GET_PROFILE_REQUESTED
})

export const getProfileSuccess = (payload: ResGetUserApi) => ({
  type: types.GET_PROFILE_SUCCESS,
  payload
})

export const getProfile = (payload: ResGetUserApi) => ({
  type: types.GET_PROFILE_FAILED,
  payload
})
