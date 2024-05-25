import React from 'react'

const Header = () => {
  return (
    <>
      <div className='bg-blue-olinger-c2 font-DM-Sans text-black text-xs'>
        <div className="container py-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
            <div className="flex items-center gap-1">
              <img src="/img/pin-icon.svg" alt="Ícone de pin" className='w-3 h-3 object-contain' />
              <a href='https://maps.app.goo.gl/w7VMrvv15sJ5KKvL8' rel='noreferrer' target='_blank'>Avenida Senador Flávio Carvalho Guimarães, 1600</a>
            </div>
            <div className="flex items-center">
              <a href="tel:4232396250" className='flex items-center gap-1 border-r border-blue-olinger-c5 pr-4'><img src="/img/phone-icon.svg" alt="Ícone de telefone" className='w-3 h-3 object-contain' />(42) 3239-6250</a>
              <a href="tel:4232396250" className='flex items-center gap-1 pl-4'><img src="/img/phone-icon.svg" alt="Ícone de telefone" className='w-3 h-3 object-contain' />(42) 3239-6250</a>
            </div>
          </div>
        </div>
      </div>
      <header>
        
      </header>
    </>
  )
}

export default Header