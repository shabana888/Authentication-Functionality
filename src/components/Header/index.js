// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-container">
    <ul>
      <li className="list">
        <Link to="/" className="text">
          Home
        </Link>
      </li>

      <li className="list">
        <Link to="/about" className="text">
          About
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
