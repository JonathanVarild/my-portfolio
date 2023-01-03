import sectionStyles from "../styles/section.module.css";
import styles from "../styles/projectssection.module.css";
import ProjectWidget from "./ProjectWidget";
import portfolioBackground from "../public/project_portfolio_background.jpg";
import edgehud_logo from "../public/edgehud_logo.png";
import edgef4_logo from "../public/edgef4_logo.png";
import edgescoreboard_logo from "../public/edgescoreboard_logo.png";
import bloxhosting_logo from "../public/bloxhosting_logo.png";
import karportalen_logo from "../public/karportalen_logo.png";
import portfolio_logo from "../public/portfolio_logo.png";
import java_logo from "../public/java_logo.png";

function ProjectsSection() {
	return (
		<section id="projects">
			<h2>My Projects</h2>
			<div className={sectionStyles.content}>These are some of the projects that I've worked on and feel extra proud about.</div>
			<div className={styles.projectsContainer}>
				<ProjectWidget
					title="BloxHosting"
					subtitle="Server Hosting Provider"
					tags={["Nginx", "Quality Assurance", "WHMCS", "DevOps", "Billing"]}
					background="white"
					logo={bloxhosting_logo}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales."
					lightMode={true}
				/>
				<ProjectWidget
					title="KårPortalen"
					subtitle="Organisation System"
					tags={["NextJS", "Debian Linux", "DevOps", "Nginx", "Domains"]}
					background="white"
					logo={karportalen_logo}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales. "
					lightMode={true}
				/>
				<ProjectWidget
					title="EdgeHUD"
					subtitle="Server Plugin"
					tags={["Lua", "Garry's Mod", "User Interface", "For Sale"]}
					background="linear-gradient(0deg, #0c2442 0%, #0d4c9b 100%);"
					logo={edgehud_logo}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales."
				/>
				<ProjectWidget
					title="EdgeF4"
					subtitle="Server Plugin"
					tags={["Lua", "Garry's Mod", "User Interface", "For Sale"]}
					background="linear-gradient(0deg, #0c2442 0%, #0d4c9b 100%);"
					logo={edgef4_logo}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales. "
				/>
				<ProjectWidget
					title="EdgeScoreboard"
					subtitle="Server Plugin"
					tags={["Lua", "Garry's Mod", "User Interface", "For Sale"]}
					background="linear-gradient(0deg, #0c2442 0%, #0d4c9b 100%);"
					logo={edgescoreboard_logo}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales."
				/>
				<ProjectWidget
					title="My Portfolio"
					subtitle="NextJS Website"
					tags={["NextJS", "DevOps", "Nginx", "ReactJS", "SSR"]}
					background={"url(" + portfolioBackground.src + ")"}
					logo={portfolio_logo}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales. "
				/>
				<ProjectWidget
					title="VW-Chat"
					subtitle="Online Java Game"
					tags={["Java", "WebSockets", "Server/Client", "NetBeans"]}
					background="linear-gradient(0deg, rgba(25,61,83,1) 0%, rgba(48,90,116,1) 100%);"
					logo={java_logo}
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas congue urna non feugiat. In porttitor posuere justo ac feugiat. Donec a laoreet odio. Nam posuere, libero id fringilla laoreet, felis leo tincidunt felis, sed condimentum ligula nulla nec purus. Aliquam dapibus libero id sodales. "
				/>
			</div>
		</section>
	);
}

export default ProjectsSection;
