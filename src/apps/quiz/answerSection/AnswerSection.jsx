import styles from './AnswerSection.module.css';

export const AnswerSection = ({ userAnswers, resetQuiz }) => {
	return (
		<div className={styles.answerContainer}>
			<h1>Quiz Completed!</h1>
			<h2>Your Results:</h2>
			<ul className={styles.answerList}>
				{userAnswers.map((answer, index) => (
					<li key={index} className={answer.isCorrect ? styles.correct : styles.incorrect}>
						<strong>{answer.question}</strong>
						<div className={styles.answerText}>
							Your answer: {answer.selectedAnswer} {answer.isCorrect ? '✅' : '❌'}
						</div>
					</li>
				))}
			</ul>
			<button
				className={styles.resetButton}
				onClick={() => {
					resetQuiz();
				}}>
				Reset
			</button>
		</div>
	);
};
