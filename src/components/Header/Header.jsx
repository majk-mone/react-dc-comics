import styles from './Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<figure>
				<img src="logo\dc-logo.png" alt="Logo" />
			</figure>
			<nav>
				<ul>
					<li>
						<a href="#">CHARACTERS</a>
					</li>
					<li>
						<a href="#">COMICS</a>
					</li>
					<li>
						<a href="#">MOVIES</a>
					</li>
					<li>
						<a href="#">TV</a>
					</li>
					<li>
						<a href="#">GAMES</a>
					</li>
					<li>
						<a href="#">COLLECTIBELES</a>
					</li>
					<li>
						<a href="#">VIDEOS</a>
					</li>
					<li>
						<a href="#">FANS</a>
					</li>
					<li>
						<a href="#">NEWS</a>
					</li>
					<li>
						<a href="#">SHOP</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}
