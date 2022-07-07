import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import MainLayout from '../../layouts/MainLayout'
import { ChartComponent } from './Chart'
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
        <h2 className='mb-4'>Home</h2>
        <ChartComponent />
      </MainLayout>
    </Fragment>
  )
}
