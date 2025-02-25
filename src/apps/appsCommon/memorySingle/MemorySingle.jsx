import styles from './MemorySingle.module.css';
import { useState } from 'react';
import { MemoryCard } from '../memoryCard/MemoryCard';

// 1. Lista 8 różnych emoji
const emojiTypes = ['💩', '🎉', '🚀', '🌟', '🔥', '💖', '😎', '🤩'];

// 2. Funkcja do generowania tablicy emoji (każdy typ 2 razy + losowe ułożenie)
const generateShuffledEmoji = () => {
	const doubled = emojiTypes.flatMap(emoji => [emoji, emoji]); // Każde emoji ×2
	return shuffledArray(doubled);
};

// 3. Fisher-Yates shuffle (losowe mieszanie)
const shuffledArray = array => {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Zamiana miejsc
	}
	return shuffled;
};

export const MemorySingle = ({ title, module: playerName, isActive, switchPlayer, declareWinner, setActivePlayer }) => {
	const [emoji, setEmoji] = useState(generateShuffledEmoji());
	const [flipped, setFlipped] = useState([]);
	const [matched, setMatched] = useState([]);

	// Obsługa kliknięcia na kartę
	const handleCardClick = index => {
		if (!isActive || flipped.length === 2 || flipped.includes(index) || matched.includes(index)) return;

		const newFlipped = [...flipped, index];
		setFlipped(newFlipped);

		if (newFlipped.length === 2) {
			const [firstIndex, secondIndex] = newFlipped;

			if (emoji[firstIndex] === emoji[secondIndex]) {
				// Jeśli karty pasują → zapisz je jako dopasowane
				setMatched(prev => [...prev, firstIndex, secondIndex]);

				// Resetujemy flipped po krótkim czasie, aby umożliwić kolejne ruchy
				setTimeout(() => {
					setFlipped([]);
				}, 500);

				// Sprawdź, czy wszystkie karty są odkryte (wygrana)
				if (matched.length + 2 === emoji.length) {
					declareWinner(playerName);
				}
			} else {
				// Jeśli karty NIE pasują → zmień gracza i resetuj flipped
				setTimeout(() => {
					setFlipped([]);
					switchPlayer();
				}, 1000);
			}
		}
	};

	return (
		<div className={styles.memoryPanelContainer} style={{ opacity: isActive ? 1 : 0.5 }}>
			<h1>{title}</h1>
			<span>
				<strong>{playerName}</strong> {isActive ? '👈 Your turn' : ''}
			</span>
			<div
				className={styles.memoryCardsContainer}
				style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
				{emoji.map((icon, index) => (
					<MemoryCard
						key={index}
						isFlipped={flipped.includes(index) || matched.includes(index)}
						onClick={() => handleCardClick(index)}>
						{icon}
					</MemoryCard>
				))}
			</div>
			<button
				onClick={() => {
					setEmoji(generateShuffledEmoji());
					setFlipped([]);
					setMatched([]);
					setActivePlayer(1);
				}}>
				Resetuj grę
			</button>
		</div>
	);
};
