import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div className='nav1'>
            <h4>BUILD YOUR OWN GIFT!</h4>
        </div>
        <div className='nav2'>
            <input type='text' className='serch'></input>
            <Link to="/">
            <h3>HONEST</h3>
            </Link>
            <Link to="/">
            <h4>sign up</h4>
            </Link>
            <Link to="/">
            <h4>cart</h4>
            </Link>
        </div>
    </div>
  )
}

export default Header
