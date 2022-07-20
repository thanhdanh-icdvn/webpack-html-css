import produce from 'immer'
import * as types from './FileManager.constants'
const initialState = {
  loading: false,
  resources: [] as CloudinaryResource[]
}
export const resourcesReducer = (state = initialState, action: ActionRedux) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_ALL_RESOURCES_REQUESTED:
        draft.loading = true
        break
      case types.GET_ALL_RESOURCES_SUCCESS:
        draft.loading = false
        draft.resources = action.payload.data.resources
        break
      case types.GET_ALL_RESOURCES_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
