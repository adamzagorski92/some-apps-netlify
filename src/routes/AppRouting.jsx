import { Routes, Route } from 'react-router-dom';
import { PasswordGenerator } from '../apps/passwordGenerator/main/PasswordGenerator';
import { Calc } from '../apps/calc/Calc';

import { MemoryMultiplayer } from '../apps/memoryMultiple/MemoryMultiplayer';
import { Quiz } from '../apps/quiz/Quiz';
import { MemorySinglePlayer } from '../apps/memorySingle/MemorySinglePlayer';

export const AppRouting = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<PasswordGenerator />} />
				<Route path='/calc' element={<Calc />} />
				<Route path='/memory-single-player' element={<MemorySinglePlayer />} />
				<Route path='/memory-multiplayer' element={<MemoryMultiplayer />} />
				<Route path='/quiz' element={<Quiz />} />
			</Routes>
		</>
	);
};
