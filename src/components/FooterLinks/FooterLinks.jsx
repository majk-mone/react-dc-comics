import styles from './FooterLinks.module.css'

export default function FooterLinks() {
	const footerLinksData = [
		{
			id: 1,
			title: 'DC COMICS',
			links: [
				{ id: 1, section: 'Characters', url: '#' },
				{ id: 2, section: 'Comics', url: '#' },
				{ id: 3, section: 'Movies', url: '#' },
				{ id: 4, section: 'TV', url: '#' },
				{ id: 5, section: 'Games', url: '#' },
				{ id: 6, section: 'Videos', url: '#' },
				{ id: 7, section: 'News', url: '#' },
			],
		},
		{
			id: 2,
			title: 'SHOP',
			links: [
				{ id: 1, section: 'Shop DC', url: '#' },
				{ id: 2, section: 'Shop DC Collectibles', url: '#' },
			],
		},
		{
			id: 3,
			title: 'DC',
			links: [
				{ id: 1, section: 'Terms of Use', url: '#' },
				{ id: 2, section: 'Privacy policy (New)', url: '#' },
				{ id: 3, section: 'Ad Choices', url: '#' },
				{ id: 4, section: 'Advertising', url: '#' },
				{ id: 5, section: 'Jobs', url: '#' },
				{ id: 6, section: 'Subscription', url: '#' },
				{ id: 7, section: 'Talent Workshops', url: '#' },
				{ id: 8, section: 'CPSC Certificates', url: '#' },
				{ id: 9, section: 'Ratings', url: '#' },
				{ id: 10, section: 'Shop Help', url: '#' },
				{ id: 11, section: 'Contact US', url: '#' },
			],
		},
		{
			id: 4,
			title: 'SITES',
			links: [
				{ id: 1, section: 'DC', url: '#' },
				{ id: 2, section: 'MAD Magazine', url: '#' },
				{ id: 3, section: 'DC Kids', url: '#' },
				{ id: 4, section: 'DC Universe', url: '#' },
				{ id: 5, section: 'DC Power Visa', url: '#' },
			],
		},
	]

	return (
		<footer className={styles.footer}>
			<nav className={styles.nav}>
				{/* Colonna 1: DC COMICS + SHOP */}
				<div className={styles.column}>
					{footerLinksData.slice(0, 2).map((section) => (
						<div key={section.id} className={styles.section}>
							<h3 className={styles.title}>{section.title}</h3>
							<ul className={styles.list}>
								{section.links.map((link) => (
									<li
										key={link.id}
										className={styles.listItem}
									>
										<a
											href={link.url}
											className={styles.link}
										>
											{link.section}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Colonna 2: DC */}
				<div className={styles.column}>
					<h3 className={styles.title}>{footerLinksData[2].title}</h3>
					<ul className={styles.list}>
						{footerLinksData[2].links.map((link) => (
							<li key={link.id} className={styles.listItem}>
								<a href={link.url} className={styles.link}>
									{link.section}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Colonna 3: SITES */}
				<div className={styles.column}>
					<h3 className={styles.title}>{footerLinksData[3].title}</h3>
					<ul className={styles.list}>
						{footerLinksData[3].links.map((link) => (
							<li key={link.id} className={styles.listItem}>
								<a href={link.url} className={styles.link}>
									{link.section}
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</footer>
	)
}
