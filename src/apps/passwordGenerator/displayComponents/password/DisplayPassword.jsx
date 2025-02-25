import styles from './DisplayPassword.module.css';
import { Button } from '../../../../common/buttons/Button';
import { useState } from 'react';

export const DisplayPassword = ({ password }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [copySuccess, setCopySuccess] = useState(false);

	const toggleVisibility = () => {
		setIsVisible(prev => !prev);
	};

	const copyToClipboard = () => {
		navigator.clipboard
			.writeText(password)
			.then(() => {
				setCopySuccess(true);
				setTimeout(() => setCopySuccess(false), 2000); // Reset komunikatu po 2s
			})
			.catch(err => console.error('Błąd kopiowania: ', err));
	};
	return (
		<>
			<div className={styles.passwordContainer}>
				<h2>Your password:</h2>
				<p className={isVisible ? '' : styles.hiddenPassword}>{password}</p>
			</div>
			<div className={styles.buttonGroup}>
				<Button onClick={toggleVisibility}>Show</Button>
				<Button onClick={copyToClipboard}>Copy</Button>
				{copySuccess && <span>✅ Skopiowano!</span>}
			</div>
		</>
	);
};
