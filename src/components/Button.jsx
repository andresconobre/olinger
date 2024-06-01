import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, to, arrow, light }) => {
  return (
    <Link to={to} className={`${light ? 'bg-blue-olinger-c3 text-blue-olinger-c9 hover:text-blue-olinger-c1' : 'bg-blue-olinger-c9'} hover:bg-blue-olinger-c10 transition-colors py-2 px-4 flex items-center justify-center gap-2 font-bold text-sm text-blue-olinger-c1 rounded`}>
        {children}
        {arrow ? <img src='/img/arrow-right-icon.svg' alt='Ícone de seta para direita' className='w-4 h-4 object-contain'/> : null}
    </Link>
  )
}

export default Button