import { combineReducers } from 'redux'
import { AppReducer } from '../App/App.reducer'
import { loginReducer } from '../pages/Login/Login.reducer'
import { productListReducer } from '../pages/Product/ProductList/ProductList.reducer'
import { productItemReducer } from '../pages/Product/ProductItem/ProductItem.reducer'
import { userListReducer } from '../pages/User/UserList/UserList.reducer'
import { userItemReducer } from '../pages/User/UserItem/UserItem.reducer'

const rootReducer = combineReducers({
  app: AppReducer,
  login: loginReducer,
  productList: productListReducer,
  userList: userListReducer,
  productItem: productItemReducer,
  userItem: userItemReducer
})

export default rootReducer
