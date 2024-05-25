import React from 'react'
import { ArrowRight, MapPin, Phone } from '@phosphor-icons/react'

import MenuDropdown from '../components/MenuDropdown/MenuDropdown'
import NavItem from './NavItem'

const Header = () => {
	return (
		//Menu do topo
		<nav>
			<nav className="flex w-auto bg-lean-c2 py-2 ">
				<div className="mx-16 inline-flex w-screen justify-between ">
					<div className="inline-flex items-center gap-1">
						<MapPin className="text-lean-c9" size={14} weight="fill" />
						<p className="text-xs text-black">
							Avenida Senador Flávio Carvalho Guimarães, 1600
						</p>
					</div>
					<div className="inline-flex gap-2">
						<div className="inline-flex items-center gap-1">
							<Phone className="text-lean-c9" size={14} weight="fill" />
							<p className="text-xs text-black">(42) 3239-6250</p>
						</div>
						<span className="h-auto w-1 border-r-2 border-olingray-c5 "></span>
						<div className="inline-flex items-center gap-1">
							<Phone className="text-lean-c9" size={14} weight="fill" />
							<p className="text-xs text-black">(42) 3239-6250</p>
						</div>
					</div>
				</div>
			</nav>

			<nav className="inline-flex w-screen border-b border-lean-c3">
				<div className="mx-16 flex h-24 w-screen justify-between bg-white py-2">
					<div className="h-auto w-auto self-center">
						<img
							src="/img/logo.svg"
							alt="Logotipo azul da Olinger"
							className="h-full w-36 object-contain"
						/>
					</div>
					<div className="content-center">
						<div className="itens-center inline-flex content-center space-x-2">
							<NavItem>Início</NavItem>
							<MenuDropdown>Produtos</MenuDropdown>
							<NavItem>Clientes</NavItem>
							<NavItem>Qualidade</NavItem>
							<NavItem>Sobre</NavItem>
						</div>
					</div>

					<div className="content-center">
						<button className="inline-flex items-center gap-2 rounded-md bg-lean-c9 px-4 py-2 text-sm font-semibold text-white hover:bg-lean-c10">
							<span> Fazer orçamento </span>
							<ArrowRight size={14} weight="bold" />
						</button>
					</div>
				</div>
			</nav>
		</nav>
	)
}

export default Header
