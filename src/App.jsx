import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import MenuDropdown from './components/MenuDropdown/MenuDropdown'

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes></Routes>
		</BrowserRouter>
	)
}

export default App
