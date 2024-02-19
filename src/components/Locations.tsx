import Loc1 from "../assets/place1.png";
import Loc2 from "../assets/place2.png";
import Loc3 from "../assets/place3.png";

const Locations = () => {
	return (
		<section className="container mx-auto px-10 my-24">
			<div className="flex flex-col gap-5 items-center w-full md:w-3/4 lg:w-1/2 mx-auto text-CDark text-center">
				<h3 className=" font-bold text-4xl ">Popular locations</h3>
				<p className="text-lg opacity-70">
					With lots of unique blocks, you can easily build a page easily without any coding.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-20">
				<div className="flex flex-col gap-12">
					<div className="h-[330px] lg:h-[440px]  shadow1">
						<img src={Loc1} alt="" className="object-cover h-full rounded-lg" />
					</div>
					<div className="text-CDark text-center flex flex-col gap-2">
						<h6 className="text-2xl font-bold">Beauview</h6>
						<p className="opacity-70">37 seats</p>
					</div>
				</div>
				<div className="flex flex-col gap-12">
					<div className="h-[330px] lg:h-[440px]  shadow1">
						<img src={Loc2} alt="" className="object-cover h-full rounded-lg" />
					</div>
					<div className="text-CDark text-center flex flex-col gap-2">
						<h6 className="text-2xl font-bold">Haleyborough</h6>
						<p className="opacity-70">12 seats</p>
					</div>
				</div>
				<div className="flex flex-col gap-12">
					<div className="h-[330px] lg:h-[440px] shadow1">
						<img src={Loc3} alt="" className="object-cover h-full rounded-lg " />
					</div>
					<div className="text-CDark text-center flex flex-col gap-2">
						<h6 className="text-2xl font-bold">Jeromyshire</h6>
						<p className="opacity-70">28 seats</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Locations;
