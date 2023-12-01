import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="header">
    <header className="nav1">
      <p>BUILD YOUR OWN GIFT!</p>
    </header>

    <nav className="nav2">
      <h4>search</h4>
      <img
       className='logo'
        src={
          "https://www.honest.com/on/demandware.static/Sites-honest-Site/-/default/dw500263c2/images/svg-icons/logo-lg.svg"
        }
        alt=""
      />
      <h4>sign up</h4>
      <h4>cart</h4>
    </nav>

    <nav className="nav3">
      <Link to="/">
      <p>Subscriptions</p>
      </Link>
      <Link to="/Baby">
      <p>Baby + Diapers</p>
      </Link>
      <Link to="/Allwipes">
      <p>Wipes</p>
      </Link>
      <Link to="/Allwipes">
      <p>Bath + Body</p>
      </Link>
      <Link to="/Skin">
      <p>Skincare</p>
      </Link>
    </nav>
  </div>
  )
}

export default Header
