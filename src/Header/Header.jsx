import React from 'react'
import NavItem from './NavItem'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import MenuDropdown from './MenuDropdown'

const Header = () => {
  const list = [
    {
        "title": "Social",
        "description": "Algodão, Poliéster, Chambray, Linho, Tricoline",
        "img": "/img/fabric-example.png",
        "alt": "Imagem de um tecido de poliester",
        "link": ""
    },
    {
        "title": "Polo",
        "description": "Algodão, Dry Fit, Poliéster, PV, Piquet.",
        "img": "/img/fabric-example.png",
        "alt": "Imagem de um tecido de linho",
        "link": ""
    },
    {
        "title": "Moleton",
        "description": "Algodão, Poliéster.",
        "img": "/img/fabric-example.png",
        "alt": "Imagem de um tecido de algodão",
        "link": ""
    },
    {
        "title": "Jaquetas",
        "description": "Aspen, Bariloche, Lã,  Nylon, Corta vento.",
        "img": "/img/fabric-example.png",
        "alt": "Imagem de um tecido aspen",
        "link": ""
    }
  ]
  
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
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-3">
            <Link to="/">
              <img src="/img/logo-olinger-blue.svg" alt="Logotipo azul da Olinger" className='w-36 h-full object-contain' />
            </Link>
            <nav>
              <ul className='flex flex-wrap items-center justify-center gap-6 py-2 px-4'>
                <NavItem>Início</NavItem>
                <MenuDropdown list={list}>Produtos</MenuDropdown>
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