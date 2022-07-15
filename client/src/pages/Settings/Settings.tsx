import MainLayout from '@/layouts/MainLayout'
import { Helmet } from 'react-helmet-async'

const Settings: React.FC<unknown> = (): JSX.Element => {
  return (
    <MainLayout>
      <Helmet>
        <title>Settings page</title>
      </Helmet>
      <h1>Settings</h1>
    </MainLayout>
  )
}

export default Settings
