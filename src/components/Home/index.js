// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import LogoutButton from '../LogoutButton'
import Header from '../Header'

import './index.css'

const Home = props => {
  const logoutUser = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">Home Route</h1>
        <LogoutButton logoutUser={logoutUser} />
      </div>
    </div>
  )
}

export default withRouter(Home)
