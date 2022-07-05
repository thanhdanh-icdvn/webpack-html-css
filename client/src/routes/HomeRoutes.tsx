import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthenticatedGuard from '../guards/AuthenticatedGuard'
import { PATH } from '../constants/paths'
import Loading from '../components/Loading/Loading'
const Home = lazy(() => import('../pages/Home/Home'))

export default function HomeRoutes() {
  return (
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
    </Routes>
  )
}
