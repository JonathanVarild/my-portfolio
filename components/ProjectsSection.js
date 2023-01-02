import sectionStyles from "../styles/section.module.css";
import styles from "../styles/projectssection.module.css";
import ProjectWidget from "./ProjectWidget";

function ProjectsSection() {
	return (
		<section id="projects">
			<h2>My Projects</h2>
			<div className={sectionStyles.content}>These are some of the projects that I've worked on and feel extra proud about.</div>
			<div className={styles.projectsContainer}>
				<ProjectWidget
					title="EdgeHUD"
					subtitle="Server Plugin"
					tags={["Lua", "Garry's Mod", "UI", "For Sale"]}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales."
				/>
				<ProjectWidget
					title="EdgeF4"
					subtitle="Server Plugin"
					tags={["Lua", "Garry's Mod", "UI", "For Sale"]}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales. "
				/>
				<ProjectWidget
					title="EdgeScoreboard"
					subtitle="Server Plugin"
					tags={["Lua", "Garry's Mod", "UI", "For Sale"]}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales."
				/>
				<ProjectWidget
					title="BloxHosting"
					subtitle="Server Hosting Provider"
					tags={["Lua", "Garry's Mod", "UI", "For Sale"]}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales."
				/>
				<ProjectWidget
					title="KårPortalen"
					subtitle="Organisation System"
					tags={["Lua", "Garry's Mod", "UI", "For Sale"]}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales. "
				/>
				<ProjectWidget
					title="My Portfolio"
					subtitle="NextJS Website"
					tags={["Lua", "Garry's Mod", "UI", "For Sale"]}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales. "
				/>
				<ProjectWidget
					title="VW-Chat"
					subtitle="Online Java Game"
					tags={["Lua", "Garry's Mod", "UI", "For Sale"]}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales. "
				/>
				<ProjectWidget
					title="Test"
					subtitle="Server Plugin"
					tags={["Lua", "Garry's Mod", "UI", "For Sale"]}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales. "
				/>
			</div>
		</section>
	);
}

export default ProjectsSection;
