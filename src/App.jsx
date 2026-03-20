import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import FooterLinks from './components/FooterLinks/FooterLinks'
import FooterSocial from './components/FooterSocial/FooterSocial'
import './Index.css'
import './components/Header/Header.module.css'

function App() {
	return (
		<>
			<Header />
			<Main />
			<FooterLinks />
			<FooterSocial />
		</>
	)
}

export default App
