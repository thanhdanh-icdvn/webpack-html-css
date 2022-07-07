import MainLayout from '../../../layouts/MainLayout'
import { connect, ConnectedProps } from 'react-redux'
import { getUserItem } from './UserItem.thunks'
import { useNavigate, useParams } from 'react-router-dom'
import { handlePrice } from '../../../helper/priceString'
import { Fragment, useEffect } from 'react'
import { GoBackButton } from './UserItem.styles'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { Helmet } from 'react-helmet-async'
const mapStateToProps = (state: AppState) => ({
  userItem: state.userItem.userItem
})

const mapDispatchToProps = {
  getUserItem
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

function UserItem(props: Props): JSX.Element {
  const { userItem, getUserItem } = props
  const params: { userId?: string } = useParams()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }
  useEffect(() => {
    const { userId } = params
    if (userId) {
      getUserItem(userId)
    }
  }, [params, getUserItem])
  return (
    <Fragment>
      <Helmet>
        <title>{params.userId} | User Detail</title>
      </Helmet>
      <MainLayout>
        <GoBackButton type='button' onClick={handleGoBack} className='btn btn-outline-success'>
          <RiArrowGoBackFill />
          Go Back
        </GoBackButton>
        {userItem && (
          <>
            <h2>{userItem.id}</h2>
            <p>Is Admin: {userItem.isAdmin + ''}</p>
            <p>
              Avatar: <img src={userItem.avatar} />{' '}
            </p>
            <p>
              Thumbnail: <img src={userItem.thumbnail} width={150} />{' '}
            </p>
          </>
        )}
      </MainLayout>
    </Fragment>
  )
}

export default connector(UserItem)
