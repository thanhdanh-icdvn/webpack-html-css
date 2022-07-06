import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import MainLayout from '../../layouts/MainLayout'
import { ChartComponent } from './Chart'
export default function Home() {
  return (
    <Fragment>
      <Helmet>
        <title>Home</title>
        <meta property='og:title' content='Home' />
        <meta property='og:url' content={window.location.href} />
        <link rel='canonical' href={window.location.href} />
      </Helmet>
      <MainLayout>
        <h2 className='mb-4'>Home</h2>
        <ChartComponent />
      </MainLayout>
    </Fragment>
  )
}
