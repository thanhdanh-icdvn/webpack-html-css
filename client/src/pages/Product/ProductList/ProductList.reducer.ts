import * as types from './ProductList.constants'
import produce from 'immer'

const initialState = {
  loading: false,
  productList: [] as Product[]
}

export const productListReducer = (state = initialState, action: ActionRedux) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.GET_PRODUCT_LIST_REQUESTED:
        draft.loading = true
        break
      case types.GET_PRODUCT_LIST_SUCCESS:
        draft.loading = false
        draft.productList = action.payload.data.products
        break
      case types.GET_PRODUCT_LIST_FAILED:
        draft.loading = false
        break
      default:
        return state
    }
  })
