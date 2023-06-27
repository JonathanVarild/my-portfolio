import { useState } from "react";
import EmailModal from "./EmailModal";
import sectionStyles from "../styles/section.module.css";
import styles from "../styles/contactsection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import memoji_callme_hq from "../public/memoji_callme_hq.png";

function ContactSection() {
	const [showModal, setShowModal] = useState(false);

	const showEmailModal = () => {
		setShowModal(true);
	};

	const openLinkedIn = () => {
		window.open("https://www.linkedin.com/in/jonathanvärild/", "_blank");
	};

	return (
		<>
			<section id="contact">
				<h2>Contact Me</h2>
				<div className={`${sectionStyles.content} ${styles.description}`}>
					I am all open to hear your offers, ideas or feedback! Feel free to contact me using any of the ways listed below. I am always connected and usually reply within
					a few hours!
				</div>
				<div className={styles.buttonContainer}>
					<button onClick={showEmailModal}>
						<FontAwesomeIcon icon={faPaperPlane} />
						<div>Send Email</div>
					</button>
					<div className={styles.imageContainer}>
						<Image src={memoji_callme_hq} alt="Memoji with call-me gesture." />
						<button onClick={openLinkedIn}>
							<FontAwesomeIcon icon={faLinkedinIn} />
							<div>Visit LinkedIn</div>
						</button>
					</div>
				</div>
			</section>
			{showModal && <EmailModal setVisibility={setShowModal} />}
		</>
	);
}

export default ContactSection;
