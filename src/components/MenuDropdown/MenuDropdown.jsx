import React, { useState } from 'react'
import { CaretDown, CaretUp } from '@phosphor-icons/react'
import list from './list.json'
import { Link } from 'react-router-dom'

const MenuDropdown = ({ children, to }) => {
	const [isOpen, setIsopen] = useState(false)

	return (
		<div>
			<button
				className="aria-select:bg-sky-700 inline-flex items-center gap-x-1.5 rounded-md border-transparent bg-white px-4 py-2 text-sm font-normal  text-lean-c12 hover:bg-lean-c3 hover:font-bold active:bg-lean-c3 "
				onClick={() => setIsopen((prev) => !prev)}
			>
				{children}
				{!isOpen ? (
					<CaretDown className="hover:font-bold" size={14} />
				) : (
					<CaretUp className="hover:font-bold" size={14} />
				)}
			</button>

			{isOpen && (
				<ul role="list" className="absolute flex">
					<div className="max-2xl mt-0.5 flex flex-col rounded border bg-white p-2 shadow-sm">
						{list.map((item, i) => (
							<Link to={item.link}>
								<li class="group/item inline-flex gap-1 rounded-sm bg-white px-4 py-2 font-semibold transition-colors hover:bg-lean-c3">
									<div className="inline-flex flex-col">
										<a className="text-sm font-normal text-lean-c12 group-hover/item:font-semibold">
											{item.title}
										</a>
										<p className=" w-40 text-xs font-light text-olingray-c9 group-hover/item:font-normal">
											{item.description}
										</p>
										<p class="invisible text-xs text-lean-c8 underline hover:visible">
											Ver todos
										</p>
									</div>
									<a class="group/item invisible group-hover/item:visible">
										<Link to={item.link}>
											<img
												src={item.img}
												alt={item.alt}
												className="h-16 w-24 rounded-md object-fill"
											/>
										</Link>
									</a>
								</li>
							</Link>
						))}
					</div>
				</ul>
			)}
		</div>
	)
}

export default MenuDropdown
