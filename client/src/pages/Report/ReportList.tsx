import MainLayout from '@/layouts/MainLayout'
import { Helmet } from 'react-helmet-async'

const ReportList: React.FC<unknown> = (): JSX.Element => {
  return (
    <MainLayout>
      <Helmet>
        <title>Report list</title>
      </Helmet>
      <h1>Report list</h1>
    </MainLayout>
  )
}

export default ReportList
