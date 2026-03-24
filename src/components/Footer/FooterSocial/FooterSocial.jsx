import facebook from '../../../assets/img/footer-facebook.png'
import twitter from '../../../assets/img/footer-twitter.png'
import youtube from '../../../assets/img/footer-youtube.png'
import pinterest from '../../../assets/img/footer-pinterest.png'
import periscope from '../../../assets/img/footer-periscope.png'
import styles from './FooterSocial.module.css'

export default function FooterSocial() {
	const items = [
		{ img: facebook, text: 'facebook' },
		{ img: twitter, text: 'twitter' },
		{ img: youtube, text: 'youtube' },
		{ img: pinterest, text: 'pintarest' },
		{ img: periscope, text: 'periscope' },
	]

	return (
		<>
			<section className={styles.container}>
				<button className={styles.button}>SIGN-UP NOW!</button>
				<div className={styles.items}>
					<p>Folow US</p>
					{items.map((item, index) => (
						<div key={index} className={styles.item}>
							<img src={item.img} alt={item.text} />
						</div>
					))}
				</div>
			</section>
		</>
	)
}
