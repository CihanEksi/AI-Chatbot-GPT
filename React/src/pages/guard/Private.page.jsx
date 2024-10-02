import { Navigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const PrivatePage = ({ component: RouteComponent }) => {
  const sessionID = Cookies.get('sessionID')

  if (sessionID) {
    return <RouteComponent />
  }

  return <Navigate to="/" />
}

export default PrivatePage