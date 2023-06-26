import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/footer.module.css";

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.ratingContainer}>
				<div className={styles.starContainer}>
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} className={styles.unchecked} />
				</div>
				<div className={styles.subTitle}>Rate my portfolio</div>
			</div>
			<div className={styles.copyrightContainer}>
				<div className={styles.row}>Copyright © 2022 Jonathan Värild. All rights reserved.</div>
				<div className={styles.row}>Memojis and other trademarks are the property of their respective owners.</div>
			</div>
			<div className={styles.githubContainer}>
				<div className={styles.row}>
					Made with <a href="https://nextjs.org" target="_blank">Next.js</a>
				</div>
				<div className={styles.row}>View source code on <a href="https://github.com/JonathanVarild/my-portfolio" target="_blank">Github</a></div>
			</div>
		</footer>
	);
}

export default Footer;
