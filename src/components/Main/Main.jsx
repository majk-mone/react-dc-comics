import styles from './Main.module.css'
import ServicesBar from '../ServicesBar/ServicesBar'

export default function Main() {
	return (
		<main className={styles.Main}>
			<section className={styles.section1}>
				<div className={styles.container}>
					<h2>{'--> Content goes here <--'}</h2>
				</div>
			</section>

			<ServicesBar />
		</main>
	)
}
