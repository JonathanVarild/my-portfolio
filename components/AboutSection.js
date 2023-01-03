import sectionStyles from "../styles/section.module.css";

function AboutSection() {
	return (
		<section id="about">
			<h2>About Me</h2>
			<div className={sectionStyles.content}>
				I have since 2015 been designing and developing software using various tools and programming languages. I am a mostly self-learnt programmer that is driven by the
				ambition to learn new things and to deliver results beyond peoples expectation. That has in turn made me a quick learner who is not affraid to learn new
				technologies and approaches to technical problems.
			</div>
		</section>
	);
}

export default AboutSection;
