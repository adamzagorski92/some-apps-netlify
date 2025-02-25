import styles from './CalcButton.module.css';

export const CalcButton = ({ children, variant, onClick }) => {
	return (
		<button className={`${styles.calcBtn} ${variant ? styles[variant] : ''}`} onClick={onClick}>
			{children}
		</button>
	);
};
