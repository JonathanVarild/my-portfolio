import styles from "../styles/projectwidget.module.css";
import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCircleArrowDown, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import classCondition from "../modules/classCondition";

function ProjectWidget({ title, subtitle, description, tags, background, lightMode }) {
	return (
		<div className={classCondition(styles.body, [styles.lightMode, lightMode])} style={{ background: background || "white" }}>
			<div className={styles.overlayContainer} />
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
