import styles from './Main.module.css'
import ServicesBar from '../ServicesBar/ServicesBar'
import Comics from '../../components/Product/Comics'

export default function Main() {
	return (
		<main className={styles.Main}>
			<section className={styles.section1}>
				<div className={styles.container}>
					<Comics />
				</div>
			</section>

			<ServicesBar />
		</main>
	)
}
