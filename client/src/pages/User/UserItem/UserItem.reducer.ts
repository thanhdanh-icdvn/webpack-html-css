import * as types from './UserItem.constants'
import produce from 'immer'

const initialState = {
  loading: false,
  userItem: null as User | null
}

export const userItemReducer = (state = initialState, action: ActionRedux) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_USER_ITEM_REQUESTED:
        draft.loading = true
        draft.userItem = null
        break
      case types.GET_USER_ITEM_SUCCESS:
        draft.loading = false
        draft.userItem = action.payload.data.user
        break
      case types.GET_USER_ITEM_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
