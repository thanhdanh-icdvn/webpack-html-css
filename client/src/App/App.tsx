import AppRoutes from '../routes/routes'
import '../assets/scss/index.scss'
import { Fragment } from 'react'
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop'
import { HelmetProvider } from 'react-helmet-async'
function App(): JSX.Element {
  return (
    <Fragment>
      <HelmetProvider>
        <AppRoutes />
        <ScrollToTop scrollOffset={100} />
      </HelmetProvider>
    </Fragment>
  )
}
export default App
