import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Loading from '@/components/Loading/Loading'
import { PATH } from '@/constants/paths'
import AuthenticatedGuard from '@/guards/AuthenticatedGuard'
const Home = lazy(() => import('@/pages/Home/Home'))
const ProductList = lazy(() => import('@/pages/Product/ProductList/ProductList'))
const ProductItem = lazy(() => import('@/pages/Product/ProductItem/ProductItem'))
const UserItem = lazy(() => import('@/pages/User/UserItem/UserItem'))
const UserList = lazy(() => import('@/pages/User/UserList/UserList'))
const Login = lazy(() => import('@/pages/Login/Login'))
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'))
const ReportList = lazy(() => import('@/pages/Report/ReportList'))
const ReportItem = lazy(() => import('@/pages/Report/ReportItem'))
const FileManager = lazy(() => import('@/pages/FileManager/FileManager'))
const Settings = lazy(() => import('@/pages/Setting/Settings'))
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
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
          <Route
            path={PATH.USERS + '/:userId'}
            element={
              <Suspense fallback={<Loading />}>
                <UserItem />
              </Suspense>
            }
          />
        </Route>
        <Route element={<AuthenticatedGuard />}>
          <Route
            path={PATH.FILE_MANAGER}
            element={
              <Suspense fallback={<Loading />}>
                <FileManager />
              </Suspense>
            }
          />
        </Route>
        <Route element={<AuthenticatedGuard />}>
          <Route
            path={PATH.REPORTS}
            element={
              <Suspense fallback={<Loading />}>
                <ReportList />
              </Suspense>
            }
          />
          <Route
            path={PATH.REPORTS + '/:reportId'}
            element={
              <Suspense fallback={<Loading />}>
                <ReportItem />
              </Suspense>
            }
          />
        </Route>
        <Route element={<AuthenticatedGuard />}>
          <Route
            path={PATH.SETTINGS}
            element={
              <Suspense fallback={<Loading />}>
                <Settings />
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
