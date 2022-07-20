import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import MainLayout from '../../layouts/MainLayout'
import { ChartComponent } from './Chart'
import { HomeWrapper } from './Home.styles'
export default function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>Home page</title>
        <meta name='description' content='Description goes here.' />
        <link rel='canonical' href='/' />
        <meta name='robots' content='index, follow' />
      </Helmet>
      <MainLayout>
        <HomeWrapper className='px-3'>
          <h2 className='mb-4'>Home</h2>
          <ChartComponent />
        </HomeWrapper>
      </MainLayout>
    </Fragment>
  )
}
