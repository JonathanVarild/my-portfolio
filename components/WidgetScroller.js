import { useState, useEffect } from "react";
import styles from "../styles/skillssection.module.css";
import Image from "next/image";
import classCondition from "../modules/classCondition";

function WidgetScroller({ items, reverse }) {
	const [pauseAnimation, setPauseAnimation] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setPauseAnimation(true);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
			setPauseAnimation(false);
		};
	}, [pauseAnimation]);

	const widgetElements = items.map((element, index) => (
		<button className={styles.widget} key={index}>
			<Image src={element.logo} alt={element.alt} loading="eager" />
		</button>
	));

	return (
		<div className={styles.widgetRow}>
			<div
				className={classCondition(styles.widgetMover, reverse ? styles.reversePrimaryMover : styles.forwardPrimaryMover)}
				style={pauseAnimation ? { animationPlayState: "paused" } : {}}
			>
				{widgetElements}
			</div>
			<div
				className={classCondition(styles.widgetMover, reverse ? styles.reverseSecondaryMover : styles.forwardSecondaryMover)}
				style={pauseAnimation ? { animationPlayState: "paused" } : {}}
			>
				{widgetElements}
			</div>
		</div>
	);
}

export default WidgetScroller;
