import sectionStyles from "../styles/section.module.css";

function AboutSection() {
	return (
		<section id="about">
			<h2>About Me</h2>
			<div className={sectionStyles.content}>
				Since 2015, I have been designing and developing software using various tools and programming languages. I am a mostly self-taught programmer who is driven by the
				ambition to learn new things and to deliver results beyond people's expectations. That has in turn made me a quick learner who is not afraid to learn new
				technologies and approaches to technical problems.
			</div>
		</section>
	);
}

export default AboutSection;
