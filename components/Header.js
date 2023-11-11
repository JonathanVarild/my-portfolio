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
		{ title: "Start", path: "#start", ref: useRef(null) },
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

	const sections = navItems.map((item) => item.path.slice(1));

	const checkVisibleSection = () => {
		const windowCenter = window.innerHeight / 2;

		for (let i = 0; i < sections.length; i++) {
			const sectionRect = document.getElementById(sections[i]).getBoundingClientRect();
			const sectionTop = sectionRect.top;
			const sectionBottom = sectionRect.bottom;

			// Check if scrolled to the bottom
			if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 30) {
				setActiveItem(sections.length - 1);
				return;
			} else if (sectionTop <= windowCenter && sectionBottom >= windowCenter) {
				setActiveItem(i);
				return;
			}
		}
	};

	useEffect(() => {
		setupVariables();
		checkVisibleSection();

		window.addEventListener("resize", setupVariables);
		window.addEventListener("scroll", checkVisibleSection);

		return () => {
			window.removeEventListener("resize", setupVariables);
			window.removeEventListener("scroll", checkVisibleSection);
		};
	});

	const openLink = (url) => {
		window.open(url, "_blank");
	};

	return (
		<>
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
					<FontAwesomeIcon
						icon={faLinkedinIn}
						onClick={() => {
							openLink("https://www.linkedin.com/in/jonathanvärild/");
						}}
					/>
					<FontAwesomeIcon
						icon={faGithub}
						onClick={() => {
							openLink("https://github.com/JonathanVarild");
						}}
					/>
					<FontAwesomeIcon icon={faFileContract} />
				</div>
			</header>
			<div className={styles.headerBackground} />
		</>
	);
}

export default Header;
