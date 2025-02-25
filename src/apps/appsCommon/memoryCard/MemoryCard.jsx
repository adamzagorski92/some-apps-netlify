import styles from './MemoryCard.module.css';

export const MemoryCard = ({ children, isFlipped, onClick }) => {
	return (
		<div onClick={onClick} className={`${styles.memoryCard} ${isFlipped ? styles.flipped : ''}`}>
			{children}
		</div>
	);
};
