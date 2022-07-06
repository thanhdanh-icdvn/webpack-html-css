import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { PATH } from '../../constants/paths'
import MainLayout from '../../layouts/MainLayout'
import { NotFoundContainer } from './NotFound.styles'

export default function NotFound(): JSX.Element {
  return (
    <Fragment>
      <Helmet prioritizeSeoTags>
        <title>404 | Page Not Found</title>
      </Helmet>
      <MainLayout>
        <NotFoundContainer>
          <h2 className='text text-danger'> 404 </h2>
          <h3>Page not found </h3>
          <p>
            <Link to={PATH.HOME}>Go home</Link>
          </p>
        </NotFoundContainer>
      </MainLayout>
    </Fragment>
  )
}
