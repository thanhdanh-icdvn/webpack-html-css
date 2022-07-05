import * as types from './ProductList.constants'

export const getProductListRequested = () => ({
  type: types.GET_PRODUCT_LIST_REQUESTED
})

export const getProductListSuccess = (payload: ResGetProductApi) => {
  return {
    type: types.GET_PRODUCT_LIST_SUCCESS,
    payload
  }
}

export const getProductListFailed = (payload: ResGetProductApi) => {
  return {
    type: types.GET_PRODUCT_LIST_FAILED,
    payload
  }
}
