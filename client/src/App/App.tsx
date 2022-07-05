import AppRoutes from '../routes/routes'
import '../assets/scss/index.scss'
import { Fragment } from 'react'
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop'
function App(): JSX.Element {
  return (
    <Fragment>
      <AppRoutes />
      <ScrollToTop scrollOffset={300} />
    </Fragment>
  )
}
export default App
