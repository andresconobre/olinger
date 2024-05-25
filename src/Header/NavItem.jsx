import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ children, to }) => {
  return (
    <li className='text-blue-olinger-c12 text-sm rounded hover:font-bold hover:bg-blue-olinger-c3'>
        <Link to={to} className='py-2 px-4 inline-block'>{children}</Link>
    </li>
  )
}

export default NavItem