import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { PATH } from '../../constants/paths'
import MainLayout from '../../layouts/MainLayout'
import {
  FlatButtonLink,
  NotFoundContainer,
  NotFoundLeft,
  NotFoundRight,
  NotFoundSubtitle,
  NotFoundTitle
} from './NotFound.styles'

export default function NotFound(): JSX.Element {
  return (
    <Fragment>
      <Helmet prioritizeSeoTags>
        <title>404 | Page Not Found</title>
      </Helmet>
      <MainLayout>
        <NotFoundContainer className='d-flex flex-row flex-wrap'>
          <NotFoundLeft className='col-md-4'>
            <NotFoundTitle> 404 </NotFoundTitle>
            <NotFoundSubtitle>not found </NotFoundSubtitle>
            <p>
              <FlatButtonLink to={PATH.HOME}>Go home</FlatButtonLink>
            </p>
          </NotFoundLeft>
          <NotFoundRight className='col-md-8'>
            <div>Right</div>
          </NotFoundRight>
        </NotFoundContainer>
      </MainLayout>
    </Fragment>
  )
}
