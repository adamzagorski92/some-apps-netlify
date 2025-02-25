import { Link } from 'react-router-dom';
import styles from './Menu.module.css';
import { MobileMenu } from '../mobileMenu/MobileMenu';

export const Menu = () => {
	return (
		<header className={styles.menuContainer}>
			<div className={styles.menuHeader}>
				<h2 className={styles.menuPrimaryHeader}>Made by Adam Zagórski</h2>
				<p>
					<i>Inspired by `Zrozumieć React`</i>
				</p>
			</div>
			<nav className={styles.desktopMenu}>
				<ul className={styles.menuList}>
					<li>
						<Link to='/'>Password generator</Link>
					</li>
					<li>
						<Link to='/calc'>Calculator</Link>
					</li>
					<li>
						<Link to='/memory-single-player'>Memory Single-player</Link>
					</li>
					<li>
						<Link to='/memory-multiplayer'>Memory-Multiplayer</Link>
					</li>
					<li>
						<Link to='/quiz'>Quiz</Link>
					</li>
				</ul>
			</nav>

			{/* Komponent dla menu mobilnego */}
			<MobileMenu />
		</header>
	);
};
