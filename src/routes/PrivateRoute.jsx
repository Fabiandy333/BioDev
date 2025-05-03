import { Navigate } from 'react-router-dom'
import useAuth from '../pages/auth/use-auth'

const PrivateRoute = ({ children }) => {
  const { userLooged } = useAuth()
  return userLooged ? children : <Navigate to="/inicio-sesion" />
}

export default PrivateRoute
