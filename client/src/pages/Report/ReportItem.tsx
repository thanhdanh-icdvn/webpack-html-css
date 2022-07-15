import MainLayout from '@/layouts/MainLayout'
import { Helmet } from 'react-helmet-async'

const ReportItem: React.FC<unknown> = (): JSX.Element => {
  return (
    <MainLayout>
      <Helmet>
        <title>Report item</title>
      </Helmet>
      <h1>Report item</h1>
    </MainLayout>
  )
}

export default ReportItem
