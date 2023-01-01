import sectionStyles from "../styles/section.module.css";

function AboutSection() {
	return (
		<section id="about">
			<h2>About Me</h2>
			<div className={sectionStyles.content}>
				Since 2015 I've designed and developed software using various tools and programming languages. I'm a mostly self-learnt programmer that is driven by the ambition to learn new
				things and to deliver results beyond peoples expectation. This has in turn made me a quick learner who isn't affraid to learn new technologies and approaches to
				technical problems.
			</div>
		</section>
	);
}

export default AboutSection;
