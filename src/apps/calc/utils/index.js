export const equals = arr => {
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

export const buttons = [
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
