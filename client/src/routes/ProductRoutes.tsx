import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthenticatedGuard from '../guards/AuthenticatedGuard'
import { PATH } from '../constants/paths'
import Loading from '../components/Loading/Loading'
const ProductList = lazy(() => import('../pages/Product/ProductList/ProductList'))
const ProductItem = lazy(() => import('../pages/Product/ProductItem/ProductItem'))
export default function ProductRoutes() {
  return (
    <Routes>
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
    </Routes>
  )
}
