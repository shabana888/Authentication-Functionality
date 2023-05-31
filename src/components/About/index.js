// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import LogoutButton from '../LogoutButton'
import Header from '../Header'

import './index.css'

const About = props => {
  const logoutUser = () => {
    const {history} = props
    Cookies.get('jwt_token')
    history.replace('/login')
  }
  return (
    <div>
      <Header />
      <div className="about-container">
        <h1 className="about-heading">About Route</h1>
        <LogoutButton logoutUser={logoutUser} />
      </div>
    </div>
  )
}

export default withRouter(About)
