import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const NavSection = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		const nav = document.getElementById("navMenu");
		console.log("click");

		if (!isOpen) {
			nav?.classList.remove("hidden");
			nav?.classList.add("flex");

			setIsOpen((prevIsLang) => !prevIsLang);
		} else {
			nav?.classList.remove("flex");
			nav?.classList.add("hidden");

			setIsOpen((prevIsLang) => !prevIsLang);
		}
	};

	const resetMenu = () => {
		const nav = document.getElementById("navMenu");

		if (isOpen) {
			nav?.classList.remove("flex");
			nav?.classList.add("hidden");

			setIsOpen((prevIsLang) => !prevIsLang);
		}
	};
	return (
		<nav className=" w-full flex flex-col md:flex-row justify-between items-center gap-x-20 gap-y-10 py-1">
			<div className="flex w-full lg:w-auto items-center justify-between">
				<a href="#" onClick={resetMenu} title="Go to home">
					<h2 className="text-white hover:text-CGreen font-bold text-2xl">Brainwave.io</h2>
				</a>
				<button
					className="block md:hidden  text-white font-bold rounded-lg hover:text-CGreen"
					title="Open/Close nav menu"
					onClick={toggleMenu}
				>
					<FontAwesomeIcon icon={faBars} />
				</button>
			</div>

			<div
				id="navMenu"
				className="hidden md:flex flex-col md:flex-row gap-x-10 gap-y-5 text-white font-bold"
			>
				<a href="#" className="hover:text-CGreen" onClick={resetMenu}>
					Demos
				</a>
				<a href="#" className="hover:text-CGreen" onClick={resetMenu}>
					Pages
				</a>
				<a href="#" className="hover:text-CGreen" onClick={resetMenu}>
					Support
				</a>
				<a href="#" className="hover:text-CGreen" onClick={resetMenu}>
					Contact
				</a>
			</div>
		</nav>
	);
};

export default NavSection;
