import { Divider } from "antd";
import About from "../components/About";
import Facts from "../components/Facts";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Locations from "../components/Locations";
import Services from "../components/Services";
import Subscribe from "../components/Subscribe";

const Home = () => {
	return (
		<>
			<HeroSection />
			<Facts />
			<Divider />
			<Locations />
			<About />
			<Features />
			<Services />
			<Subscribe />
			<Divider />
			<Footer />
		</>
	);
};

export default Home;
