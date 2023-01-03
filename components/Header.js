import { faGithub, faGithubAlt, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/header.module.css";

function Header() {
	const [startOffset, setStartOffset] = useState(0);
	const [leftMargin, setLeftMargin] = useState(0);
	const [width, setWidth] = useState(0);
	const [activeItem, setActiveItem] = useState(0);

	const navHighlight = useRef(null);

	const navItems = [
		{ title: "Start", path: "#", ref: useRef(null) },
		{ title: "About Me", path: "#about", ref: useRef(null) },
		{ title: "Skills", path: "#skills", ref: useRef(null) },
		{ title: "Projects", path: "#projects", ref: useRef(null) },
		{ title: "Contact Me", path: "#contact", ref: useRef(null) },
	];

	const navHTMLItems = navItems.map((item, index) => (
		<a
			ref={item.ref}
			key={index}
			onClick={({ target }) => {
				setLeftMargin(target.offsetLeft);
				setWidth(target.offsetWidth);
				setActiveItem(index);
			}}
			className={index == activeItem ? styles.active : ""}
			href={item.path}
		>
			{item.title}
		</a>
	));

	const setupVariables = () => {
		setStartOffset(navItems[0].ref.current.offsetLeft);
		setLeftMargin(navItems[activeItem].ref.current.offsetLeft);
		setWidth(navItems[activeItem].ref.current.offsetWidth);
	};

	useEffect(() => {
		setupVariables();
		window.addEventListener("resize", setupVariables);
		return () => {
			window.removeEventListener("resize", setupVariables);
		};
	});

	return (
		<header className={styles.header}>
			<div className={styles.navList}>
				{startOffset != 0 && (
					<div
						className={styles.navHighlight}
						style={{ left: leftMargin - startOffset, width: startOffset * 2 + width, transition: "left 0.3s ease, width 0.3s ease" }}
						ref={navHighlight}
					/>
				)}
				{navHTMLItems}
			</div>
			<div className={styles.iconList}>
				<FontAwesomeIcon icon={faLinkedinIn} />
				<FontAwesomeIcon icon={faGithub} />
				<FontAwesomeIcon icon={faFileContract} />
			</div>
		</header>
	);
}

export default Header;
