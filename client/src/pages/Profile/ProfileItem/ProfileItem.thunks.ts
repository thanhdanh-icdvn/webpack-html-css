import * as types from './ProfileItem.constants'
import produce from 'immer'

const initialState = {
  loading: false
}

export const getProfileReducer = (state = initialState, action: ActionRedux) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_PROFILE_REQUESTED:
        draft.loading = true
        break
      case types.GET_PROFILE_SUCCESS:
        draft.loading = false
        break
      case types.GET_PROFILE_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
