import Image from "next/image";
import sectionStyles from "../styles/section.module.css";
import styles from "../styles/skillssection.module.css";
import react_white from "../public/logos/react_white.png";
import WidgetScroller from "./WidgetScroller";
import MiniWidgetScroller from "./MiniWidgetScroller";

function SkillsSection() {
	return (
		<section id="skills">
			<h2>Skills</h2>
			<div className={sectionStyles.content}>
				These are some of the skills that I have acquired over the years. I am a fast learner and is always open to learn something new! Click on each widget to learn more.{" "}
				<a href="#">Click here</a> for a readable list.
			</div>
			<div className={styles.widgetContainer}>
				<WidgetScroller
					items={[
						{ logo: react_white, alt: "ReactJS Logo in white" },
						{ logo: react_white, alt: "ReactJS Logo in white" },
						{ logo: react_white, alt: "ReactJS Logo in white" },
						{ logo: react_white, alt: "ReactJS Logo in white" },
					]}
				/>

				<WidgetScroller
					items={[
						{ logo: react_white, alt: "ReactJS Logo in white" },
						{ logo: react_white, alt: "ReactJS Logo in white" },
						{ logo: react_white, alt: "ReactJS Logo in white" },
						{ logo: react_white, alt: "ReactJS Logo in white" },
					]}
					reverse={true}
				/>

				<MiniWidgetScroller
					items={[
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
					]}
				/>
			</div>
		</section>
	);
}

export default SkillsSection;
