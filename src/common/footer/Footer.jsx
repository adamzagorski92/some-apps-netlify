import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footerContainer}>
			<p className={styles.footerText}>&copy; {new Date().getFullYear()} Adam Zagórski. All rights reserved.</p>
			<p className={styles.footerContact}>
				Contact: <a href='mailto:kontakt@adamzagorski.pl'>kontakt@adamzagorski.pl</a>
			</p>
			<p className={styles.footerGithub}>
				GitHub:{' '}
				<a href='https://github.com/adamzagorski92' target='_blank' rel='noopener noreferrer'>
					github.com/adamzagorski
				</a>
			</p>
		</footer>
	);
};
