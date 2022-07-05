import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../constants/paths'
import Loading from '../components/Loading/Loading'
const Login = lazy(() => import('../pages/Login/Login'))

export default function LoginRoutes() {
  return (
    <Routes>
      <Route
        path={PATH.LOGIN}
        element={
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        }
      />
    </Routes>
  )
}
