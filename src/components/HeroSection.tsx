import Select, {
	DropdownIndicatorProps,
	GroupBase,
	PlaceholderProps,
	components,
} from "react-select";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

import NavSection from "./NavSection";
import { JSX } from "react/jsx-runtime";

const HeroSection = () => {
	const options = [
		{ value: "option1", label: "Option 1" },
		{ value: "option2", label: "Option 2" },
		{ value: "option3", label: "Option 3" },
	];
	const Placeholder = (
		props: JSX.IntrinsicAttributes & PlaceholderProps<unknown, boolean, GroupBase<unknown>>
	) => {
		return <components.Placeholder {...props} />;
	};

	const DropdownIndicator = (
		props: JSX.IntrinsicAttributes & DropdownIndicatorProps<unknown, boolean, GroupBase<unknown>>
	) => {
		return (
			<components.DropdownIndicator {...props}>
				<FontAwesomeIcon icon={faCaretDown} />
			</components.DropdownIndicator>
		);
	};
	return (
		<div className="relative">
			<div className="w-full h-full bg-CDark absolute top-0 left-0 z-[-2]"></div>
			<div className="w-full h-full bgTopimg  absolute top-0 left-0 z-[-1]"></div>
			<div className="container mx-auto px-10">
				<NavSection />
				<div className="flex flex-col gap-10 w-full lg:w-3/4 mx-auto items-center justify-center my-20 px-10">
					<p className="text-sm text-CGreen font-bold uppercase">Shared space in your town</p>
					<h1 className="text-6xl font-bold text-white text-center">
						Rent desk space in a shared office environment
					</h1>
					<form action="#" className="bg-white rounded-lg p-4 grid grid-cols-3 items-center gap-5">
						<Select
							options={options}
							components={{ Placeholder, DropdownIndicator }}
							placeholder="Select Location"
							isSearchable
							styles={{
								placeholder: (baseStyles) => ({
									...baseStyles,
									color: "#161C2D",
								}),
								dropdownIndicator: (baseStyles) => ({
									...baseStyles,
									color: "#161C2D",
								}),
								indicatorSeparator: () => ({ display: "none" }),
							}}
						/>
						<Select
							options={options}
							components={{ Placeholder, DropdownIndicator }}
							placeholder="Select date"
							isSearchable
							styles={{
								placeholder: (baseStyles) => ({
									...baseStyles,
									color: "#161C2D",
								}),
								dropdownIndicator: (baseStyles) => ({
									...baseStyles,
									color: "#161C2D",
								}),
								indicatorSeparator: () => ({ display: "none" }),
							}}
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
