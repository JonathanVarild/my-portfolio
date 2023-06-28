import Image from "next/image";
import sectionStyles from "../styles/section.module.css";
import styles from "../styles/skillssection.module.css";
import react_white from "../public/logos/react_white.png";

function SkillsSection() {
	const row1_WidgetElements = [
		{ logo: react_white, alt: "ReactJS Logo in white" },
		{ logo: react_white, alt: "ReactJS Logo in white" },
		{ logo: react_white, alt: "ReactJS Logo in white" },
		{ logo: react_white, alt: "ReactJS Logo in white" },
	].map((element, index) => (
		<button className={styles.widget} key={index}>
			<Image src={element.logo} alt={element.alt} loading="eager"/>
		</button>
	));

	const row2_WidgetElements = [
		{ logo: react_white, alt: "ReactJS Logo in white" },
		{ logo: react_white, alt: "ReactJS Logo in white" },
		{ logo: react_white, alt: "ReactJS Logo in white" },
		{ logo: react_white, alt: "ReactJS Logo in white" },
	].map((element, index) => (
		<button className={styles.widget} key={index}>
			<Image src={element.logo} alt={element.alt} loading="eager" />
		</button>
	));

	const row3_TextElements = [
		{ text: "Dev Ops" },
		{ text: "QA" },
		{ text: "Web Development" },
		{ text: "Server Administration" },
		{ text: "Active Directory" },
		{ text: "User Experience" },
		{ text: "Linux" },
		{ text: "MacOS" },
		{ text: "Windows" },
		{ text: "REST API" },
	].map((element, index) => (
		<button className={styles.miniWidget} key={index}>
			{element.text}
		</button>
	));

	return (
		<section id="skills">
			<h2>Skills</h2>
			<div className={sectionStyles.content}>
				These are some of the skills that I have acquired over the years. I am a fast learner and is always open to learn something new! Click on each widget to learn more.
			</div>
			<div className={styles.widgetContainer}>
				<div className={styles.widgetRow}>
					<div className={styles.widgetMover + " " + styles.forwardPrimaryMover}>{row1_WidgetElements}</div>
					<div className={styles.widgetMover + " " + styles.forwardSecondaryMover}>{row1_WidgetElements}</div>
				</div>

				<div className={styles.widgetRow}>
					<div className={styles.widgetMover + " " + styles.reversePrimaryMover}>{row2_WidgetElements}</div>
					<div className={styles.widgetMover + " " + styles.reverseSecondaryMover}>{row2_WidgetElements}</div>
				</div>

				<div className={styles.miniWidgetRow}>
					<div className={styles.widgetMover + " " + styles.forwardPrimaryMover}>{row3_TextElements}</div>
					<div className={styles.widgetMover + " " + styles.forwardSecondaryMover}>{row3_TextElements}</div>
				</div>
			</div>
		</section>
	);
}

export default SkillsSection;
