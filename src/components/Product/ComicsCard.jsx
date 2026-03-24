import styles from './Card.module.css'

const ComicsCard = (props) => {
	const { id, thumb, title } = props.product
	return (
		<div className={styles.comicsCard}>
			<img src={thumb} alt={title} />
			<h3>{title}</h3>
		</div>
	)
}

export default ComicsCard
