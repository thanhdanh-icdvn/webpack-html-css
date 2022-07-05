import MainLayout from '../../layouts/MainLayout'
import { ChartComponent } from './Chart'
export default function Home() {
  return (
    <MainLayout>
      <h2 className='mb-4'>Home</h2>
      <ChartComponent />
    </MainLayout>
  )
}
