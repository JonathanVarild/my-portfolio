import styles from "../styles/startsection.module.css";
import Image from "next/image";
import memoji_happy from "../public/memoji_happy_hq.png";

function StartSection() {
	return (
		<>
			<div className={styles.sectionBackground} />
			<section id={styles.startSection}>
				<div className={styles.container}>
					<h1>Jonathan Värild</h1>
					<h2>
						presenting <span>my portfoilio.</span>
					</h2>
					<h3>Full-stack developer and designer, focused on creating exceptional digital experiences.</h3>
				</div>
				<Image src={memoji_happy} height={"1rem"}/>
			</section>
		</>
	);
}

export default StartSection;
