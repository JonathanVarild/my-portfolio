import sectionStyles from "../styles/section.module.css";

function ProjectsSection() {
	return (
		<section id="projects">
			<h2>My Projects</h2>
            <div className={sectionStyles.content}>These are some of the projects that I've worked on and feel extra proud about.</div>
		</section>
	);
}

export default ProjectsSection;
