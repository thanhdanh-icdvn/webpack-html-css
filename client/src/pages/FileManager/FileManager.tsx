import MainLayout from '@/layouts/MainLayout'
import { Helmet } from 'react-helmet-async'

const FileManager: React.FC<unknown> = (): JSX.Element => {
  return (
    <MainLayout>
      <Helmet>
        <title>File manager</title>
      </Helmet>
      <h1>File manager</h1>
    </MainLayout>
  )
}

export default FileManager
