import Loc4 from "../assets/place4.png";
import Loc5 from "../assets/place5.png";

const About = () => {
	return (
		<section className=" relative">
			<div className="bg-CGray w-full h-3/5 absolute top-0 left-0 z-[-1]"></div>
			<div className="container mx-auto px-10 py-24 grid grid-cols-1 md:grid-cols-2 gap-20">
				<div className="flex flex-col gap-5 w-full md:w-3/4  text-CDark">
					<h3 className="text-4xl font-bold text-center md:text-left">
						Work around very talented people.
					</h3>
					<p className="text-lg opacity-70 text-center md:text-left">
						With lots of unique blocks, you can easily build a page easily without any coding.
					</p>
				</div>
				<div className="row-span-2">
					<img
						src={Loc5}
						alt=""
						className="object-cover rounded-lg h-[400px] lg:h-[600px] w-full shadow1"
					/>
				</div>
				<div className="">
					<img
						src={Loc4}
						alt=""
						className="object-cover rounded-lg h-[400px] lg:h-[600px] w-full shadow1"
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
