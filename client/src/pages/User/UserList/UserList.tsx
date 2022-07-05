import { connect, ConnectedProps } from 'react-redux'
import MainLayout from '../../../layouts/MainLayout'
import { getUserList } from './UserList.thunks'
import { Link } from 'react-router-dom'
import { PATH } from '../../../constants/paths'
import { TableContainer } from './UserList.styles'
import { useEffect } from 'react'

const mapStateToProps = (state: AppState) => ({
  userList: state.userList.userList
})

const mapDispatchToProps = {
  getUserList
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>
const UserList = (props: Props) => {
  const { getUserList, userList } = props

  useEffect(() => {
    getUserList()
  }, [getUserList])

  return (
    <MainLayout>
      <h2>User List</h2>
      <TableContainer>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Password</th>
              <th>Is admin</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList &&
              userList.map((user, index) => (
                <tr key={user.id}>
                  <th>{index + 1}</th>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.isAdmin + ''}</td>
                  <td>
                    <Link className='btn btn-primary' to={PATH.PRODUCTS + `/${user.id}`}>
                      Detail
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </TableContainer>
    </MainLayout>
  )
}

export default connector(UserList)
