import { BrowserRouter } from 'react-router-dom'
import HomeRoutes from './HomeRoutes'
import LoginRoutes from './LoginRoutes'
import ProductRoutes from './ProductRoutes'
import UserRoutes from './UserRoutes'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <ProductRoutes />
      <UserRoutes />
      <LoginRoutes />
    </BrowserRouter>
  )
}
