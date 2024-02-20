import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCircleChevronDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay, faCalendar } from "@fortawesome/free-regular-svg-icons";

import NavSection from "./NavSection";
import { Select } from "antd";
import CustomSelect from "./CustomSelect";
import CustomDatePicker from "./CustomDatePicker";

const HeroSection = () => {
	const options = ["Location 1", "Location 2", "Location 3", "Location 4"];
	return (
		<div className="relative">
			<div className="w-full h-full bg-CDark absolute top-0 left-0 z-[-2]"></div>
			<div className="w-full h-full bgTopimg  absolute top-0 left-0 z-[-1]"></div>
			<div className="container mx-auto px-10">
				<NavSection />
				<div className="flex flex-col gap-10 w-full lg:w-3/4 mx-auto items-center justify-center my-20 px-0 md:px-10">
					<p className="text-sm text-CGreen font-bold uppercase">Shared space in your town</p>
					<h1 className="text-5xl md:text-6xl font-bold text-white text-center">
						Rent desk space in a shared office environment
					</h1>
					<form
						action="#"
						className="bg-white rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 items-center gap-5 w-full"
					>
						{/* antd Select */}
						<CustomSelect
							allowClear
							size="large"
							optionLabelProp="label"
							prefixIcon={<FontAwesomeIcon icon={faLocationDot} className="text-CDark" />}
							suffixIcon={<FontAwesomeIcon icon={faCaretDown} className="text-CDark" />}
							placeholder={<span className="text-CDark">Select Location</span>}
						>
							{options.map((option) => (
								<Select.Option
									key={option}
									value={option}
									label={<span className="text-CDark">{option}</span>}
								>
									{option}
								</Select.Option>
							))}
						</CustomSelect>
						{/* antd DatePicker */}
						<CustomDatePicker
							size="large"
							className="text-CDark"
							prefixIcon={<FontAwesomeIcon icon={faCalendar} className="text-CDark" />}
							suffixIcon={<FontAwesomeIcon icon={faCaretDown} className="text-CDark" />}
						/>
						<button className="bg-CBlue text-white text-lg font-bold py-2.5 px-8 rounded-lg">
							Search Place
						</button>
					</form>
					<button className="flex gap-3 items-center text-white text-lg hover:text-CGreen">
						<FontAwesomeIcon icon={faCirclePlay} />
						<p>Take virtual tour of our spaces</p>
					</button>
				</div>
				<div className="py-10 w-full flex items-center justify-center">
					<button className=" text-white text-2xl hover:text-CGreen text-center ">
						<FontAwesomeIcon icon={faCircleChevronDown} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
