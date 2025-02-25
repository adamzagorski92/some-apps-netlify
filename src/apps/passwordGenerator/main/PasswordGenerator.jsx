import styles from './PasswordGenerator.module.css';
import { DisplayPassword } from '../displayComponents/password/DisplayPassword';

import { PasswordForm } from '../displayComponents/passwordForm/PasswordForm';
import { useState } from 'react';

export const PasswordGenerator = () => {
	const [passwordSettings, setPasswordSettings] = useState([
		{
			passwordLength: 10,
			isSpecialSigns: false,
			isNumbers: false,
			isUppercase: false,
		},
	]);

	const [password, setPassword] = useState('Your good password will appear here');

	const generatePassword = () => {
		const { passwordLength, isUppercase, isNumbers, isSpecialSigns } = passwordSettings;

		const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
		const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		const numberChars = '0123456789';
		const specialChars = '!@#$%^&*()_+-=[]{};:,.<>?';

		let allChars = lowercaseChars;
		let requiredChars = [];

		// Dodajemy wymagane znaki dla każdej zaznaczonej opcji
		if (isUppercase) {
			allChars += uppercaseChars;
			requiredChars.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);
		}
		if (isNumbers) {
			allChars += numberChars;
			requiredChars.push(numberChars[Math.floor(Math.random() * numberChars.length)]);
		}
		if (isSpecialSigns) {
			allChars += specialChars;
			requiredChars.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
		}

		// Obliczamy, ile znaków jeszcze trzeba dodać
		let remainingLength = passwordLength - requiredChars.length;
		let passwordArray = [...requiredChars]; // Startujemy od znaków, które muszą się pojawić

		// Uzupełniamy hasło losowymi znakami
		for (let i = 0; i < remainingLength; i++) {
			passwordArray.push(allChars[Math.floor(Math.random() * allChars.length)]);
		}

		// Mieszamy hasło, aby znaki specjalne / cyfry nie były zawsze na początku
		passwordArray = passwordArray.sort(() => Math.random() - 0.5);

		setPassword(passwordArray.join(''));
	};

	console.log(password);
	return (
		<div className={styles.appContainer}>
			<h1>Password Generator</h1>
			<PasswordForm
				generatePassword={generatePassword}
				passwordSettings={passwordSettings}
				setPasswordSettings={setPasswordSettings}
			/>
			<DisplayPassword password={password} />
		</div>
	);
};
