import sectionStyles from "../styles/section.module.css";
import styles from "../styles/contactsection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import memoji_callme_hq from "../public/memoji_callme_hq.png";

function ContactSection() {
	return (
		<section id="contact">
			<h2>Contact Me</h2>
			<div className={`${sectionStyles.content} ${styles.description}`}>
				I'm all open to hear your offers, ideas or feedback! Feel free to contact me using any of the ways listed below. I'm always connected and usually reply within a few
				hours!
			</div>
			<div className={styles.buttonContainer}>
				<div className={styles.button}>
					<FontAwesomeIcon icon={faPaperPlane} />
					<div>Contact Form</div>
				</div>
				<div className={styles.imageContainer}>
					<Image src={memoji_callme_hq} alt="Memoji with call-me gesture." />
					<div className={styles.button}>
						<FontAwesomeIcon icon={faLinkedinIn} />
						<div>Visit LinkedIn</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactSection;
