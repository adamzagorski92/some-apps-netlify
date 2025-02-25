import { useState } from 'react';
import { MemorySingle } from '../appsCommon/memorySingle/MemorySingle';

export const MemoryMultiplayer = () => {
	const [activePlayer, setActivePlayer] = useState(1); // 1 = pierwszy gracz, 2 = drugi gracz
	const [winner, setWinner] = useState(null);

	// Funkcja do zmiany gracza
	const switchPlayer = () => {
		setActivePlayer(prev => (prev === 1 ? 2 : 1));
	};

	// Funkcja do ustawienia zwycięzcy
	const declareWinner = player => {
		setWinner(player);
	};

	return (
		<div style={{ textAlign: 'center', padding: '20px' }}>
			{winner ? (
				<>
					<h2>🎉 Zwycięzca: {winner} 🎉</h2>
					<button onClick={() => setWinner(null)}>Play again</button>
				</>
			) : (
				<>
					<div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
						{activePlayer === 1 ? (
							<MemorySingle
								key={1}
								title='Memory Multiplayer'
								module='First player'
								isActive={activePlayer === 1}
								switchPlayer={switchPlayer}
								declareWinner={declareWinner}
								setActivePlayer={setActivePlayer}
							/>
						) : (
							<MemorySingle
								key={2}
								title='Memory Multiplayer'
								module='Second player'
								isActive={activePlayer === 2}
								switchPlayer={switchPlayer}
								declareWinner={declareWinner}
								setActivePlayer={setActivePlayer}
							/>
						)}
					</div>
				</>
			)}
		</div>
	);
};
