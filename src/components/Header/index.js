import React from 'react'
import {NavLink} from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <div className='nav-links-container'>
    <NavLink to={'/'} className='active'>
      <p className='text' >Counter</p>
      </NavLink>
      <NavLink to={'/display_3x3_grid'} className='active'>
      <p className='text'>display-all-the-data-in-3*3-Grid </p>
      </NavLink>
      <NavLink to={'/postApi'} className='active'>
      <p className='text'>Post Api</p>
      </NavLink>
    </div>
  )
}

export default Header
