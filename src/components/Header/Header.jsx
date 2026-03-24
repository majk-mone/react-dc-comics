import styles from './Header.module.css'

export default function Header() {
	const links = [
		{ id: 1, text: 'CHARACTERS', url: '#', current: false },
		{ id: 2, text: 'COMICS', url: '#', current: true },
		{ id: 3, text: 'MOVIES', url: '#', current: false },
		{ id: 5, text: 'TV', url: '#', current: false },
		{ id: 6, text: 'GAMES', url: '#', current: false },
		{ id: 7, text: 'COLLECTIBLES', url: '#', current: false },
		{ id: 8, text: 'VIDEOS', url: '#', current: false },
		{ id: 9, text: 'FANS', url: '#', current: false },
		{ id: 10, text: 'NEWS', url: '#', current: false },
		{ id: 11, text: 'SHOP', url: '#', current: false },
	]

	return (
		<header className={styles.header}>
			<figure>
				<img src="logo\dc-logo.png" alt="Logo" />
			</figure>
			<nav>
				<ul>
					{links.map((link) => {
						return (
							<li key={link.id}>
								<a
									href={link.url}
									className={link.current ? 'active' : ''}
									style={link.styles}
								>
									{link.text}
								</a>
							</li>
						)
					})}
				</ul>
			</nav>
		</header>
	)
}
