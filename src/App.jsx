import { Footer } from './common/footer/Footer';
import { Menu } from './common/menu/primaryMenu/Menu';
import { AppRouting } from './routes/AppRouting';

function App() {
	return (
		<>
			<Menu />
			<AppRouting />
			<Footer />
		</>
	);
}

export default App;
