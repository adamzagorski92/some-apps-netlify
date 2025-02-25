import { Button } from '../../../../common/buttons/Button';
import styles from './Passwordform.module.css';

export const PasswordForm = ({ generatePassword, passwordSettings, setPasswordSettings }) => {
	const handleChange = e => {
		const { id, type, checked, value } = e.target;

		setPasswordSettings(prev => ({
			...prev,
			[id]: type === 'checkbox' ? checked : parseInt(value, 10) || 10,
		}));
	};

	return (
		<>
			<div className={styles.formContainer}>
				<label className={styles.inLineComp} htmlFor='passwordLength'>
					Password length:
				</label>
				<input
					className={styles.inputField}
					type='number'
					id='passwordLength'
					value={passwordSettings.passwordLength ?? 10} // ✅ Domyślna wartość
					onChange={handleChange}
				/>

				<div className={styles.checkboxGroup}>
					<input
						className={styles.checkbox}
						type='checkbox'
						id='isSpecialSigns'
						checked={passwordSettings.isSpecialSigns ?? false} // ✅ Domyślna wartość
						onChange={handleChange}
					/>
					<label className={styles.checkboxLabel} htmlFor='isSpecialSigns'>
						Special characters
					</label>
				</div>

				<div className={styles.checkboxGroup}>
					<input
						className={styles.checkbox}
						type='checkbox'
						id='isNumbers'
						checked={passwordSettings.isNumbers ?? false} // ✅ Domyślna wartość
						onChange={handleChange}
					/>
					<label className={styles.checkboxLabel} htmlFor='isNumbers'>
						Numbers
					</label>
				</div>

				<div className={styles.checkboxGroup}>
					<input
						className={styles.checkbox}
						type='checkbox'
						id='isUppercase'
						checked={passwordSettings.isUppercase ?? false} // ✅ Domyślna wartość
						onChange={handleChange}
					/>
					<label className={styles.checkboxLabel} htmlFor='isUppercase'>
						Capital letters
					</label>
				</div>
			</div>

			<Button onClick={generatePassword} bgColorClass='btnGreen'>
				Generate password
			</Button>
		</>
	);
};
