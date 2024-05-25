import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = ({ children, to }) => {
	return (
		<li className="list-none rounded text-sm text-lean-c12 hover:bg-lean-c3 hover:font-bold">
			<Link to={to} className="inline-block px-4 py-2">
				{children}
			</Link>
		</li>
	)
}

export default NavItem
