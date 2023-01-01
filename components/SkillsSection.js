import Image from "next/image";
import sectionStyles from "../styles/section.module.css";
import styles from "../styles/skillssection.module.css";
import react_white from "../public/logos/react_white.png";

function SkillsSection() {
	return (
		<section id="skills">
			<h2>Skills</h2>
			<div className={sectionStyles.content}>
				These are some of the skills that I have acquired over the years. I'm a fast learner and is always open to learn something new! Click on each widget to learn more.
			</div>
			<div className={styles.widgetContainer}>
				<div className={styles.widgetRow}>
					<div className={styles.widget}>
						<Image src={react_white} alt="ReactJS logo in white." />
					</div>
					<div className={styles.widget}>
						<Image src={react_white} alt="NextJS logo in white." />
					</div>
					<div className={styles.widget}>
						<Image src={react_white} alt="MySQL logo in white." />
					</div>
					<div className={styles.widget}>
						<Image src={react_white} alt="MySQL logo in white." />
					</div>
				</div>
				<div className={styles.widgetRow}>
					<div className={styles.widget}>
						<Image src={react_white} alt="ReactJS logo in white." />
					</div>
					<div className={styles.widget}>
						<Image src={react_white} alt="NextJS logo in white." />
					</div>
					<div className={styles.widget}>
						<Image src={react_white} alt="MySQL logo in white." />
					</div>
					<div className={styles.widget}>
						<Image src={react_white} alt="MySQL logo in white." />
					</div>
				</div>
				<div className={styles.miniWidgetRow}>
					<div className={styles.miniWidget}>Dev Ops</div>
					<div className={styles.miniWidget}>QA</div>
					<div className={styles.miniWidget}>Customer Contact</div>
					<div className={styles.miniWidget}>Something Else</div>
				</div>
			</div>
		</section>
	);
}

export default SkillsSection;
