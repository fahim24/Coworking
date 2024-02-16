import {
	faInstagram,
	faLinkedin,
	faSquareFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
	return (
		<section className="container mx-auto px-10 py-5">
			<div className="flex justify-between text-CDark">
				<p>
					<FontAwesomeIcon icon={faCopyright} /> 2024 Copyright, All Right Reserved
				</p>
				<div className="flex gap-5">
					<a href="https://www.twitter.com" className=" hover:text-CBlue">
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a href="https://www.facebook.com" className=" hover:text-CBlue">
						<FontAwesomeIcon icon={faSquareFacebook} />
					</a>
					<a href="https://www.instagram.com" className=" hover:text-CBlue">
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a href="https://www.linkedin.com" className=" hover:text-CBlue">
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Footer;
