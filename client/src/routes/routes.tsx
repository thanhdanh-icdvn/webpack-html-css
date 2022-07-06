import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loading from '../components/Loading/Loading'
import { PATH } from '../constants/paths'
import AuthenticatedGuard from '../guards/AuthenticatedGuard'
const Home = lazy(() => import('../pages/Home/Home'))
const ProductList = lazy(() => import('../pages/Product/ProductList/ProductList'))
const ProductItem = lazy(() => import('../pages/Product/ProductItem/ProductItem'))
const UserList = lazy(() => import('../pages/User/UserList/UserList'))
const Login = lazy(() => import('../pages/Login/Login'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthenticatedGuard />}>
          <Route
            path={PATH.HOME}
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
        </Route>
        <Route path={PATH.PRODUCTS} element={<AuthenticatedGuard />}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <ProductList />
              </Suspense>
            }
          />
          <Route
            path={PATH.PRODUCTS + '/:productId'}
            element={
              <Suspense fallback={<Loading />}>
                <ProductItem />
              </Suspense>
            }
          />
        </Route>
        <Route element={<AuthenticatedGuard />}>
          <Route
            path={PATH.USERS}
            element={
              <Suspense fallback={<Loading />}>
                <UserList />
              </Suspense>
            }
          />
        </Route>
        <Route
          path={PATH.LOGIN}
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />{' '}
        <Route
          path='*'
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
