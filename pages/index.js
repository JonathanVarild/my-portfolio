import Head from "next/head";
import AboutSection from "../components/AboutSection";
import Header from "../components/Header";
import StartSection from "../components/StartSection";

export default function Home() {
	return (
		<>
			<Head>
				<title>Jonathan Värild - Portfolio</title>
				<meta name="description" content="A web page that summarizes my skills and previous projects." />
			</Head>
			<Header />
			<StartSection />
			<AboutSection />
		</>
	);
}
