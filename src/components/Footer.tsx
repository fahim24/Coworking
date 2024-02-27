import {
	faInstagram,
	faLinkedin,
	faSquareFacebook,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "antd";

const Footer = () => {
	return (
		<section className="container mx-auto px-10 py-5">
			<div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-10 py-10">
				<div className="flex flex-col items-center md:items-start text-center md:text-left text-CDark gap-5">
					<h6 className="opacity-70">Company</h6>
					<ul className="space-y-1">
						<li>
							<a href="#" className="hover:text-CBlue">
								About us
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-CBlue">
								Contact us
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-CBlue">
								Careers
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-CBlue">
								Press
							</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col items-center md:items-start text-center md:text-left text-CDark gap-5">
					<h6 className="opacity-70">Product</h6>
					<ul className="space-y-1">
						<li>
							<a href="#" className="hover:text-CBlue">
								Features
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-CBlue">
								Pricing
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-CBlue">
								News
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-CBlue">
								Help desk
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-CBlue">
								Support
							</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col items-center md:items-start text-center md:text-left text-CDark gap-5">
					<h6 className="opacity-70">Services</h6>
					<ul className="space-y-1">
						<li>
							<a href="#" className="hover:text-CBlue">
								Digital Marketing
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-CBlue">
								Content Writing
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-CBlue">
								SEO for Business
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-CBlue">
								UI Design
							</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col items-center md:items-start text-center md:text-left text-CDark gap-5">
					<h6 className="opacity-70">Legal</h6>
					<ul className="space-y-1">
						<li>
							<a href="#" className="hover:text-CBlue">
								Privacy Policy
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-CBlue">
								Terms & Conditions
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-CBlue">
								Return Policy
							</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col items-center md:items-start text-center md:text-left text-CDark gap-5">
					<h6 className="opacity-70">Contact us</h6>
					<ul className="space-y-1">
						<li>
							<a href="#" className="text-CBlue">
								support@brainwave.io
							</a>
						</li>
						<li>
							<a href="#" className="text-CBlue">
								+133-394-3439-1435
							</a>
						</li>
					</ul>
				</div>
			</div>
			<Divider />
			<div className="flex flex-col md:flex-row justify-between text-CDark gap-y-5">
				<p className="order-2 md:order-1 text-center md:text-left">
					<FontAwesomeIcon icon={faCopyright} /> 2024 Copyright, All Right Reserved
				</p>
				<div className="space-x-5 order-1 md:order-2 justify-center">
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
