import { useState, useEffect } from "react";
import styles from "../styles/skillssection.module.css";
import classCondition from "../modules/classCondition";

function MiniWidgetScroller({ items }) {
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
		<button className={styles.miniWidget} key={index}>
			{element.text}
		</button>
	));

	return (
		<div className={styles.miniWidgetRow}>
			<div className={classCondition(styles.widgetMover, styles.forwardPrimaryMover)} style={pauseAnimation ? { animationPlayState: "paused" } : {}}>
				{widgetElements}
			</div>
			<div className={classCondition(styles.widgetMover, styles.forwardSecondaryMover)} style={pauseAnimation ? { animationPlayState: "paused" } : {}}>
				{widgetElements}
			</div>
		</div>
	);
}

export default MiniWidgetScroller;
