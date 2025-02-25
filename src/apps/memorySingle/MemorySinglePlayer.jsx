import { MemorySingle } from '../appsCommon/memorySingle/MemorySingle';

export const MemorySinglePlayer = () => {
	return (
		<MemorySingle
			title='Memory'
			module='Single-player'
			isActive={true}
			switchPlayer={() => {}} // Nie zmienia gracza
		/>
	);
};
