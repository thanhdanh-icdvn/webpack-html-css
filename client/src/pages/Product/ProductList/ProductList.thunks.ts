import * as actions from './ProductList.actions'
import { getProductListApi } from '@/apis/product.api'

export const getProductList = () => (dispatch: AppDispatch) => {
  dispatch(actions.getProductListRequested())
  return getProductListApi()
    .then((res: ResGetProductApi) => dispatch(actions.getProductListSuccess(res)))
    .catch((err) => Promise.reject(dispatch(actions.getProductListFailed(err))))
}
