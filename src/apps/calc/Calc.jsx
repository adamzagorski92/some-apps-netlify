import styles from './Calc.module.css';
import { CalcButton } from '../appsCommon/buttons/calcButton/CalcButton';
import { useState } from 'react';
import { buttons, equals } from './utils';

export const Calc = () => {
	const [display, setDisplay] = useState('0');
	const [mathComponentsArray, setMathComponentsArray] = useState([]);

	const handleButtonClick = value => {
		setMathComponentsArray(prev => {
			const lastItem = prev[prev.length - 1];

			if (['+', '-', '*', '/'].includes(value)) {
				if (prev.length === 0 || ['+', '-', '*', '/'].includes(lastItem)) {
					return prev; // Nie dodajemy operatora na początku ani po innym operatorze
				}
				return [...prev, value];
			}

			if (!isNaN(value) || value === '.') {
				if (!isNaN(lastItem) || lastItem?.includes('.')) {
					return [...prev.slice(0, -1), lastItem + value]; // Łączymy liczby
				}
				return [...prev, value]; // Nowa liczba
			}

			return prev;
		});

		setDisplay(prev => (prev === '0' ? value.toString() : prev + value));
	};

	const handleEquals = () => {
		if (mathComponentsArray.length === 0) return;

		const lastItem = mathComponentsArray[mathComponentsArray.length - 1];
		let newArray = [...mathComponentsArray];

		if (['+', '-', '*', '/'].includes(lastItem)) {
			newArray.pop();
		}

		const result = equals(newArray);
		setDisplay(result.toString());
		setMathComponentsArray([result.toString()]);
	};

	const handleReset = () => {
		setDisplay('0');
		setMathComponentsArray([]);
	};

	const handlerOnClick = label => {
		if (label === '=') handleEquals();
		else if (label === 'C') handleReset();
		else handleButtonClick(label);
	};

	return (
		<div className={styles.calcAppContainer}>
			<h1>Calc</h1>
			<div className={styles.calcContainer}>
				<div className={styles.displayContainer}>
					<p>{display}</p>
				</div>
				<div className={styles.buttonsContainer}>
					{buttons.map(({ label, variant }, index) => (
						<CalcButton key={index} variant={variant} onClick={() => handlerOnClick(label)}>
							{label}
						</CalcButton>
					))}
				</div>
			</div>
		</div>
	);
};
