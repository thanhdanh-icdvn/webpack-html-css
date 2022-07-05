import { Navigate, Outlet } from 'react-router-dom'
import { PATH } from '../../constants/paths'

const ProtectedRoutes = (props: any) => {
  return props.isAuthenticated && localStorage.getItem('token') ? (
    <Outlet {...props} />
  ) : (
    <Navigate to={PATH.LOGIN} />
  )
}
export default ProtectedRoutes
