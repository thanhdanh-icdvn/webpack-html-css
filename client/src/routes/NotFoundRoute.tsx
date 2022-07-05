import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loading from '../components/Loading/Loading'
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))

export default function NotFoundRoutes() {
  return (
    <Routes>
      <Route
        path='*'
        element={
          <Suspense fallback={<Loading />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  )
}
