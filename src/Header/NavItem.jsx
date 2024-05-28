import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ children, to, className, ...props }) => {
  return (
    <li className={`text-blue-olinger-c12 text-sm rounded hover:font-bold hover:bg-blue-olinger-c3 transition-all ${className}`} {...props}>
        <Link to={to} className='py-2 px-4 inline-block'>{children}</Link>
    </li>
  )
}

export default NavItem