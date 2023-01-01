import sectionStyles from "../styles/section.module.css";
import styles from "../styles/projectssection.module.css";
import ProjectWidget from "./ProjectWidget";

function ProjectsSection() {
	return (
		<section id="projects">
			<h2>My Projects</h2>
			<div className={sectionStyles.content}>These are some of the projects that I've worked on and feel extra proud about.</div>
			<div className={styles.projectsContainer}>
				<ProjectWidget title="Test" subtitle="Server Plugin" tags={["Lua", "Garry's Mod", "UI", "For Sale", "test"]} />
				<ProjectWidget title="Test" subtitle="Server Plugin" tags={["Lua", "Garry's Mod", "UI", "For Sale"]} />
				<ProjectWidget title="Test" subtitle="Server Plugin" tags={["Lua", "Garry's Mod", "UI", "For Sale"]} />
				<ProjectWidget title="Test" subtitle="Server Plugin" tags={["Lua", "Garry's Mod", "UI", "For Sale"]} />
				<ProjectWidget title="Test" subtitle="Server Plugin" tags={["Lua", "Garry's Mod", "UI", "For Sale"]} />
				<ProjectWidget title="Test" subtitle="Server Plugin" tags={["Lua", "Garry's Mod", "UI", "For Sale"]} />
			</div>
		</section>
	);
}

export default ProjectsSection;
