import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import FooterLinks from './components/FooterLinks/FooterLinks'
import './Index.css'
import './components/Header/Header.module.css'

function App() {
	return (
		<>
			<Header />
			<Main />
			<FooterLinks />
		</>
	)
}

export default App
