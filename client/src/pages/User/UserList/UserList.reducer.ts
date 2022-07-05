import * as types from './UserList.constants'
import produce from 'immer'

const initialState = {
  loading: false,
  userList: [] as User[]
}

export const userListReducer = (state = initialState, action: ActionRedux) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_USER_LIST_REQUESTED:
        draft.loading = true
        break
      case types.GET_USER_LIST_SUCCESS:
        draft.loading = false
        draft.userList = action.payload.data.users
        break
      case types.GET_USER_LIST_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
