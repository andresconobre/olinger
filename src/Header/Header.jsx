import React from 'react'
import NavItem from './NavItem'
import Button from '../components/Button'

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
      <header className='border-b border-blue-olinger-c3 py-5'>
        <div className="container">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-3">
            <img src="/img/logo-olinger-blue.svg" alt="Logotipo azul da Olinger" className='w-36 h-full object-contain' />
            <nav>
              <ul className='flex flex-wrap items-center justify-center gap-6 py-2 px-4'>
                <NavItem>Início</NavItem>
                <NavItem>
                  <span className='flex items-center gap-2'>
                    Produtos
                    <figure className='w-3.5 h-3.5 grid place-items-center'>
                      <img src="/img/caret-down-icon.svg" alt="Ícone de seta para baixo" className='object-contain' />
                    </figure>
                  </span>
                </NavItem>
                <NavItem>Clientes</NavItem>
                <NavItem>Qualidade</NavItem>
                <NavItem>Sobre</NavItem>
              </ul>
            </nav>
            <Button>Fazer orçamento</Button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header