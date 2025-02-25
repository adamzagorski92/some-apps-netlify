import styles from './QuizButton.module.css';

export const QuizButton = ({ children, onClick, className }) => {
	return (
		<button className={`${styles.quizButton} ${className ? styles[className] : ''}`} onClick={onClick}>
			{children}
		</button>
	);
};
