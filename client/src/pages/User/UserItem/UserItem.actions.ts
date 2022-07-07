import * as types from './UserItem.constants'

export const getUserItemRequested = () => ({
  type: types.GET_USER_ITEM_REQUESTED
})

export const getUserItemSuccess = (payload: ResGetUserItemApi) => ({
  type: types.GET_USER_ITEM_SUCCESS,
  payload
})

export const getUserItemFailed = (payload: ResGetUserItemApi) => ({
  type: types.GET_USER_ITEM_FAILED,
  payload
})
