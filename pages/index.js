import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import styles from "../styles/index.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Jonathan Värild - Portfolio</title>
				<meta name="description" content="A web page that summarizes my skills and previous projects." />
			</Head>
			<Header />
		</>
	);
}
