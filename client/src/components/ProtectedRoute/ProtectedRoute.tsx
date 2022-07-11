import { Navigate, Outlet, OutletProps } from 'react-router-dom'
import { PATH } from '@/constants/paths'

const ProtectedRoutes = (props: OutletProps) => {
  return localStorage.getItem('token') ? (
    <Outlet {...props} />
  ) : (
    <Navigate
      to={{
        pathname: PATH.LOGIN
      }}
    />
  )
}
export default ProtectedRoutes
