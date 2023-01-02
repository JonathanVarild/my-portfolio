import styles from "../styles/projectwidget.module.css";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleArrowDown, faCircleArrowRight, faCloudArrowDown, faDownload, faGlobe } from "@fortawesome/free-solid-svg-icons";

function ProjectWidget({ title, subtitle, description, tags }) {
	return (
		<div className={styles.body}>
			<div className={styles.dynamicContainer}>
				<div className={styles.infoContainer}>
					<div className={styles.title}>{title}</div>
					<div className={styles.subtitle}>{subtitle}</div>
				</div>
				<div className={styles.tagsContainer}>
					<div className={styles.tagRow}>
						{tags.map((tag, index) => (
							<Fragment key={index}>{index < Math.floor(tags.length / 2) && <div>{tag}</div>}</Fragment>
						))}
					</div>
					<div className={styles.tagRow}>
						{tags.map((tag, index) => (
							<Fragment key={index}>{index >= Math.floor(tags.length / 2) && <div>{tag}</div>}</Fragment>
						))}
					</div>
				</div>
				<div className={styles.iconContainer}>
					<a href="">
						<FontAwesomeIcon icon={faGithub} />
					</a>
					<a href="">
						<FontAwesomeIcon icon={faCircleArrowDown} />
					</a>
				</div>
			</div>
			<div className={styles.descContainer}>{description}</div>
			<div className={styles.bottomButton}>
				<div>Read More</div>
				<FontAwesomeIcon icon={faCircleArrowRight} />
			</div>
		</div>
	);
}

export default ProjectWidget;
