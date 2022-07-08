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
        <HomeWrapper>
          <h2 className='mb-4'>Home</h2>
          <div>Button</div>
          <button className='button'> Button</button>
          <button className='button button--primary'> Button</button>
          <button className='button button--info'> Button info</button>
          <button className='button button--success'> Button success</button>
          <button className='button button--danger'> Button danger</button>
          <button className='button button--warning'> Button waring</button>
          <button className='button button--dark'> Button dark</button>
          <div>Button outline</div>
          <button className='button button-outline'> Button</button>
          <button className='button button-outline--primary'> Button outline primary</button>
          <button className='button button-outline--info'> Button outline info</button>
          <button className='button button-outline--success'> Button outline success</button>
          <button className='button button-outline--danger'> Button outline danger</button>
          <button className='button button-outline--warning'> Button outline warning</button>
          <button className='button button-outline--dark'> Button outline dark</button>
          <ChartComponent />
        </HomeWrapper>
      </MainLayout>
    </Fragment>
  )
}
