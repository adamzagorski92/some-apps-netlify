import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.css';

export const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{/* Ikona hamburgera */}
			<div className={styles.hamburger} onClick={toggleMenu}>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
			</div>

			{/* Wysuwane menu */}
			<nav className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
				<ul className={styles.menuList}>
					<li>
						<Link to='/' onClick={toggleMenu}>
							Password generator
						</Link>
					</li>
					<li>
						<Link to='/calc' onClick={toggleMenu}>
							Calculator
						</Link>
					</li>
					<li>
						<Link to='/memory-single-player' onClick={toggleMenu}>
							Memory Single-player
						</Link>
					</li>
					<li>
						<Link to='/memory-multiplayer' onClick={toggleMenu}>
							Memory-Multiplayer
						</Link>
					</li>
					<li>
						<Link to='/quiz' onClick={toggleMenu}>
							Quiz
						</Link>
					</li>
				</ul>
			</nav>

			{/* Overlay przy otwartym menu */}
			{isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
		</>
	);
};
