import styles from './Button.module.css';

export const Button = ({ children, bgColorClass, onClick }) => {
	return (
		<button onClick={onClick} className={`${styles.btn} ${bgColorClass ? styles[bgColorClass] : ''}`}>
			{children}
		</button>
	);
};
