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
          "https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/original/79667e32-f5aa-47c4-a5da-8ef2dd420f41.png"
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
      <Link>
      <p>Bath + Body</p>
      </Link>
      <Link>
      <p>Skincare</p>
      </Link>
    </nav>
  </div>
  )
}

export default Header
