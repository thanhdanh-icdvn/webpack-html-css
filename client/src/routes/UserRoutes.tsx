import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthenticatedGuard from '../guards/AuthenticatedGuard'
import { PATH } from '../constants/paths'
import Loading from '../components/Loading/Loading'
const UserList = lazy(() => import('../pages/User/UserList/UserList'))
export default function UserRoutes() {
  return (
    <Routes>
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
    </Routes>
  )
}
