import styles from './Calc.module.css';
import { CalcButton } from '../appsCommon/buttons/calcButton/CalcButton';
import { useState } from 'react';

const equals = arr => {
	let newArr = [...arr];

	// Najpierw wykonujemy mnożenie i dzielenie
	for (let i = 0; i < newArr.length; i++) {
		if ((newArr[i] === '*' || newArr[i] === '/') && i > 0 && i < newArr.length - 1) {
			let a = parseFloat(newArr[i - 1]);
			let b = parseFloat(newArr[i + 1]);

			if (!isNaN(a) && !isNaN(b)) {
				let result = newArr[i] === '*' ? a * b : a / b;
				newArr.splice(i - 1, 3, result.toString());
				i = Math.max(0, i - 2);
			}
		}
	}
	// Następnie wykonujemy dodawanie i odejmowanie
	for (let i = 0; i < newArr.length; i++) {
		if ((newArr[i] === '+' || newArr[i] === '-') && i > 0 && i < newArr.length - 1) {
			let a = parseFloat(newArr[i - 1]);
			let b = parseFloat(newArr[i + 1]);

			if (!isNaN(a) && !isNaN(b)) {
				let result = newArr[i] === '+' ? a + b : a - b;
				newArr.splice(i - 1, 3, result.toString());
				i = Math.max(0, i - 2);
			}
		}
	}

	return parseFloat(newArr[0]); // Wynik końcowy
};

const buttons = [
	{ label: '1' },
	{ label: '2' },
	{ label: '3' },
	{ label: '+', variant: 'btnGray' },
	{ label: '4' },
	{ label: '5' },
	{ label: '6' },
	{ label: '-', variant: 'btnGray' },
	{ label: '7' },
	{ label: '8' },
	{ label: '9' },
	{ label: '*', variant: 'btnGray' },
	{ label: '0' },
	{ label: '.', variant: 'btnGray' },
	{ label: 'C', variant: 'btnRed' },
	{ label: '/', variant: 'btnGray' },
	{ label: '=', variant: 'btnOrange' },
];

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
