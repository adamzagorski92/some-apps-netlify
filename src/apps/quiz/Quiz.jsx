import { useState } from 'react';
import { qAndA } from './data/qAndA';
import { QuizSection } from './quizSection/QuizSection';
import { AnswerSection } from './answerSection/AnswerSection';

export const Quiz = () => {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [isQuizCompleted, setIsQuizCompleted] = useState(false); // Nowa flaga zakończenia quizu

	const handleAnswerClick = answer => {
		// Zapisujemy odpowiedź użytkownika
		setUserAnswers(prev => [
			...prev,
			{
				question: qAndA[currentQuestion].question,
				selectedAnswer: answer.answer,
				isCorrect: answer.isCorrect,
			},
		]);

		// Jeśli to ostatnie pytanie, kończymy quiz
		if (currentQuestion + 1 >= qAndA.length) {
			setIsQuizCompleted(true);
		} else {
			// Przechodzimy do następnego pytania
			setCurrentQuestion(prev => prev + 1);
		}
	};

	const resetQuiz = () => {
		setIsQuizCompleted(false);
		setUserAnswers([]);
		setCurrentQuestion(0);
	};

	return (
		<>
			{isQuizCompleted ? (
				<AnswerSection userAnswers={userAnswers} resetQuiz={resetQuiz} />
			) : (
				<QuizSection
					questionData={qAndA[currentQuestion]}
					onAnswerClick={handleAnswerClick}
					questionNumber={currentQuestion + 1}
				/>
			)}
		</>
	);
};
