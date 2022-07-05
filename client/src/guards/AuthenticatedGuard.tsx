import { RouteProps } from 'react-router-dom'
import { connect } from 'react-redux'
import React from 'react'
import ProtectedRoutes from '../components/ProtectedRoute/ProtectedRoute'

interface ReduxProps {
  isAuthenticated: boolean
}
interface Props extends ReduxProps, RouteProps {
  isAuthenticated: boolean
}
const AuthenticatedGuard: React.FC<Props> = (props: Props): JSX.Element => {
  return <ProtectedRoutes {...props} />
}
function mapStateToProps(state: AppState): { isAuthenticated: boolean } {
  return {
    isAuthenticated: state.app.isAuthenticated
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedGuard)
