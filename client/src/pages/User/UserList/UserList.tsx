import { connect, ConnectedProps } from 'react-redux'
import MainLayout from '../../../layouts/MainLayout'
import { getUserList } from './UserList.thunks'
import { Link } from 'react-router-dom'
import { PATH } from '../../../constants/paths'
import { TableContainer } from './UserList.styles'
import { Fragment, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

const mapStateToProps = (state: AppState) => ({
  userList: state.userList.userList
})

const mapDispatchToProps = {
  getUserList
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>
const UserList = (props: Props): JSX.Element => {
  const { getUserList, userList } = props

  useEffect(() => {
    getUserList()
  }, [getUserList])

  return (
    <Fragment>
      <Helmet>
        <title>User List</title>
      </Helmet>
      <MainLayout>
        <h2>User List</h2>
        <TableContainer>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Password</th>
                <th>Thumnail</th>
                <th>Avatar</th>
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
                    <td>
                      {user.thumbnail ? (
                        <img
                          src={user.thumbnail}
                          alt={user.username}
                          srcSet={user.thumbnail}
                          width={150}
                          height={150}
                        />
                      ) : (
                        'No thumnail'
                      )}
                    </td>
                    <td>
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.username} srcSet={user.avatar} />
                      ) : (
                        'No avatar'
                      )}
                    </td>
                    <td>{user.isAdmin + ''}</td>
                    <td>
                      <Link className='btn btn-primary' to={PATH.USERS + `/${user.id}`}>
                        Detail
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </TableContainer>
      </MainLayout>
    </Fragment>
  )
}

export default connector(UserList)
