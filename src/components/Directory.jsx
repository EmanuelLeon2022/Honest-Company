import React from 'react'
import { Link } from 'react-router-dom'

function Directory() {
  return (
    <div className='dir'>
      <Link>
      <h5>Subscriptions</h5>
      </Link>
      <Link to="/Baby">
      <h5>Baby + Diapers</h5>
      </Link>
      <Link to="/Allwipes">
      <h5>Wipes</h5>
      </Link>
      <Link>
      <h5>Bath + Body</h5>
      </Link>
      <Link>
      <h5>Skincare</h5>
      </Link>
      <Link>
      <h5>Makeup</h5>
      </Link>
      <Link>
      <h5>Baby Clothing</h5>
      </Link>
      <Link>
      <h5>Cleaning</h5>
      </Link>
      <Link to="/">
      <h5>Gifts + Kits</h5>
      </Link>
    </div>
  )
}

export default Directory