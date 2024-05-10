// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <button
            className="button"
            type="button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu className="icon" />.
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <div className="button-container" data-testid="closeButton">
              <button
                className="close-button button"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose className="icon" />.
              </button>
            </div>
            <ul className="info-container">
              <li className="list-item">
                <Link
                  to="/"
                  className="modal-info-container"
                  onClick={() => close()}
                >
                  <AiFillHome className="info-icon" />
                  <h1 className="info-heading">Home</h1>
                </Link>
              </li>
              <li className="list-item">
                <Link
                  to="/about"
                  className="modal-info-container"
                  onClick={() => close()}
                >
                  <BsInfoCircleFill className="info-icon" />
                  <h1 className="info-heading">About</h1>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
