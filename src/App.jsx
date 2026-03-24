import { useState } from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import FooterLinks from './components/Footer/FooterLinks/FooterLinks'
import FooterSocial from './components/Footer/FooterSocial/FooterSocial'
import Footer from './components/Footer/Footer'

import './Index.css'
import './components/Header/Header.module.css'

function App() {
	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	)
}

export default App
