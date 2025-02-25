import { QuizButton } from '../../appsCommon/buttons/quizButton/QuizButton';
import styles from './QuizSection.module.css';

export const QuizSection = ({ questionData, onAnswerClick, questionNumber }) => {
	return (
		<div className={styles.quizContainer}>
			<h1>Quiz</h1>
			<h2>Question {questionNumber}</h2>
			<p>{questionData.question}</p>
			<div className={styles.quizButtonsContainer}>
				{questionData.answers.map((answer, index) => (
					<QuizButton key={index} onClick={() => onAnswerClick(answer)}>
						{answer.answer}
					</QuizButton>
				))}
			</div>
		</div>
	);
};
