import { useEffect, useRef, useState } from "react";
import styles from "../styles/modal.module.css";

function EmailModal({ setVisibility }) {
	const infoContainerRef = useRef(null);
	const [copyButton, setCopyButton] = useState("Copy");

	useEffect(() => {
		const body = document.body;
		body.style.overflow = "hidden";

		return () => {
			const body = document.body;
			body.style.overflow = "";
		};
	}, []);

	const close = () => {
		setVisibility(false);
	};

	const setInfoSelection = () => {
		const divElement = infoContainerRef.current;
		const range = document.createRange();
		range.selectNodeContents(divElement);
		const selection = window.getSelection();
		selection.removeAllRanges();
		selection.addRange(range);
	};

	const resetInfoSelection = () => {
		const selection = window.getSelection();
		selection.removeAllRanges();
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(infoContainerRef.current.innerHTML)
		setCopyButton("Copied");
	};

	const copyUnhover = () => {
		setCopyButton("Copy");
	};

	const sendEmail = () => {
		const mailtoLink = "mailto: " + infoContainerRef.current.innerHTML;
		window.location.href = mailtoLink;
	};

	return (
		<div className={styles.modalContainer}>
			<div className={styles.dialog}>
				<h2>Send Email</h2>
				<p>I am all open to hear your offers, ideas or feedback! Send me an email using the adress below and I will usually reply within a few hours!</p>
				<div className={styles.infoContainer} ref={infoContainerRef} onMouseEnter={setInfoSelection} onMouseLeave={resetInfoSelection}>
					Jonathan.varild@gmail.com
				</div>
				<div className={styles.buttonContainer}>
					<button onClick={close}>Close</button>
					<div className={styles.buttonContainer}>
						<button onClick={copyToClipboard} onMouseLeave={copyUnhover}>
							{copyButton}
						</button>
						<button className={styles.primaryButton} onClick={sendEmail}>
							New
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default EmailModal;
