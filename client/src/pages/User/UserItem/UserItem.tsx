import MainLayout from '../../../layouts/MainLayout'
import { connect, ConnectedProps } from 'react-redux'
import { getUserItem } from './UserItem.thunks'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Fragment, useEffect } from 'react'
import { GoBackButton, UserCard } from './UserItem.styles'
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
        <GoBackButton type='button' onClick={handleGoBack} className='btn btn-outline-success mb-3'>
          <RiArrowGoBackFill />
          Go Back
        </GoBackButton>
        {userItem && (
          <>
            <UserCard className='card'>
              <img src={userItem.thumbnail} alt='' className='card-img-top' />
              <div className='card-body'>
                <h5 className='card-title'>{userItem.username}</h5>
                <p className='card-text'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati ullam
                  reprehenderit, dolore sit nihil suscipit. Quo numquam ipsum laborum id placeat
                  neque facere debitis ducimus veritatis doloribus. Doloribus, quos a?
                </p>
                <Link to='#' className='btn btn-primary'>
                  Go somewhere
                </Link>
              </div>
            </UserCard>
          </>
        )}
      </MainLayout>
    </Fragment>
  )
}

export default connector(UserItem)
