import Drawer from "../assets/drawer.svg";
import Wifi from "../assets/wifi.svg";
import Mug from "../assets/mug.svg";

const Features = () => {
	return (
		<section className="container mx-auto px-10 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
			<div className="flex items-start gap-5">
				<img src={Drawer} alt="" />
				<div className="space-y-5 text-CDark">
					<h6 className="text-xl font-bold">Dedicated Desk</h6>
					<p className="opacity-70">
						With lots of unique blocks, you can easily build a page without coding. Build your next
						landing page.
					</p>
				</div>
			</div>
			<div className="flex items-start gap-5">
				<img src={Wifi} alt="" />
				<div className="space-y-5 text-CDark">
					<h6 className="text-xl font-bold">High Speed Internet</h6>
					<p className="opacity-70">
						With lots of unique blocks, you can easily build a page without coding. Build your next
						landing page.
					</p>
				</div>
			</div>
			<div className="flex items-start gap-5">
				<img src={Mug} alt="" />
				<div className="space-y-5 text-CDark">
					<h6 className="text-xl font-bold">Unlimited Coffee</h6>
					<p className="opacity-70">
						With lots of unique blocks, you can easily build a page without coding. Build your next
						landing page.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Features;
