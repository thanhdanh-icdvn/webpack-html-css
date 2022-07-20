import { combineReducers } from 'redux'
import { AppReducer } from '../App/App.reducer'
import { loginReducer } from '../pages/Login/Login.reducer'
import { productListReducer } from '../pages/Product/ProductList/ProductList.reducer'
import { productItemReducer } from '../pages/Product/ProductItem/ProductItem.reducer'
import { userListReducer } from '../pages/User/UserList/UserList.reducer'
import { userItemReducer } from '../pages/User/UserItem/UserItem.reducer'
import { getProfileReducer } from '@/pages/Profile/ProfileItem/ProfileItem.reducer'
import { resourcesReducer } from '@/pages/FileManager/FileManager.reducer'

const rootReducer = combineReducers({
  app: AppReducer,
  login: loginReducer,
  productList: productListReducer,
  userList: userListReducer,
  productItem: productItemReducer,
  userItem: userItemReducer,
  profileItem: getProfileReducer,
  resources: resourcesReducer
})

export default rootReducer
