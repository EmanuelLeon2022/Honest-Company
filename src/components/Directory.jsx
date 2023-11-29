import React from 'react'
import { Link } from 'react-router-dom'

function Directory() {
  return (
    <div className='dir'>
      <Link to="/">
      <h5>Subscriptions</h5>
      </Link>
      <Link to="/Baby">
      <h5>Baby + Diapers</h5>
      </Link>
      <Link to="/Allwipes">
      <h5>Wipes</h5>
      </Link>
      <Link to=''>
      <h5>Bath + Body</h5>
      </Link>
      <Link to='Skin'>
      <h5>Skincare</h5>
      </Link>
      <Link to="/Makeup">
      <h5>Makeup</h5>
      </Link>
      <Link to=''>
      <h5>Baby Clothing</h5>
      </Link>
      <Link to="/Clean">
      <h5>Cleaning</h5>
      </Link>
      <Link to="/Gifts">
      <h5>Gifts + Kits</h5>
      </Link>
    </div>
  )
}

export default Directory