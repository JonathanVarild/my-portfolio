import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/footer.module.css";

function Footer() {
	const currentRating = 4;
	const [selectedStar, setSelectedStar] = useState(currentRating);

	return (
		<footer className={styles.footer}>
			<div className={styles.ratingContainer}>
				<div
					className={styles.starContainer}
					onMouseLeave={() => {
						setSelectedStar(currentRating);
						console.log("left");
					}}
				>
					<FontAwesomeIcon
						icon={faStar}
						className={selectedStar > 0 ? styles.checked : ""}
						onMouseEnter={() => {
							setSelectedStar(1);
						}}
					/>
					<FontAwesomeIcon
						icon={faStar}
						className={selectedStar > 1 ? styles.checked : ""}
						onMouseEnter={() => {
							setSelectedStar(2);
						}}
					/>
					<FontAwesomeIcon
						icon={faStar}
						className={selectedStar > 2 ? styles.checked : ""}
						onMouseEnter={() => {
							setSelectedStar(3);
						}}
					/>
					<FontAwesomeIcon
						icon={faStar}
						className={selectedStar > 3 ? styles.checked : ""}
						onMouseEnter={() => {
							setSelectedStar(4);
						}}
					/>
					<FontAwesomeIcon
						icon={faStar}
						className={selectedStar > 4 ? styles.checked : ""}
						onMouseEnter={() => {
							setSelectedStar(5);
						}}
					/>
				</div>
				<div className={styles.subTitle}>Rate my portfolio</div>
			</div>
			<div className={styles.copyrightContainer}>
				<div className={styles.row}>Copyright © {new Date().getFullYear()} Jonathan Värild. All rights reserved.</div>
				<div className={styles.row}>Memojis and other trademarks are the property of their respective owners.</div>
			</div>
			<div className={styles.githubContainer}>
				<div className={styles.row}>
					Made with{" "}
					<a href="https://nextjs.org" target="_blank">
						Next.js
					</a>
				</div>
				<div className={styles.row}>
					View source code on{" "}
					<a href="https://github.com/JonathanVarild/my-portfolio" target="_blank">
						Github
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
