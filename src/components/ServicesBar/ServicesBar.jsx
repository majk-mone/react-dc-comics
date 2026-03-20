import digital from '../../assets/img/buy-comics-digital-comics.png'
import merchandise from '../../assets/img/buy-comics-merchandise.png'
import subscription from '../../assets/img/buy-comics-subscriptions.png'
import shop from '../../assets/img/buy-comics-shop-locator.png'
import power from '../../assets/img/buy-dc-power-visa.png'
import styles from './ServicesBar.module.css'

export default function ServicesBar() {
	const items = [
		{ img: digital, text: 'DIGITAL COMICS' },
		{ img: merchandise, text: 'DC MERCHANDISE' },
		{ img: subscription, text: 'SUBSCRIPTION' },
		{ img: shop, text: 'COMIC SHOP LOCATOR' },
		{ img: power, text: 'DC POWER VISA' },
	]

	return (
		<>
			<section className={styles.products}>
				<div className={styles.container}>
					<div className={styles.items}>
						{items.map((item, index) => (
							<div key={index} className={styles.item}>
								<img src={item.img} alt={item.text} />
								<span>{item.text}</span>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
