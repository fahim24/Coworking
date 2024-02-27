const Facts = () => {
	return (
		<section className="container mx-auto px-10  py-5">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 ">
				<div className="p-5 lg:p-16 space-y-5 text-CDark text-center">
					<h3 className="text-5xl font-bold">06</h3>
					<p className="text-lg opacity-70">Offices are available on different countries</p>
				</div>
				<div className="p-5 lg:p-16 space-y-5 text-CDark text-center">
					<h3 className="text-5xl font-bold">238</h3>
					<p className="text-lg opacity-70">Seats are available right now with dedicated support</p>
				</div>
				<div className="p-5 lg:p-16 space-y-5 text-CDark text-center">
					<h3 className="text-5xl font-bold">1395</h3>
					<p className="text-lg opacity-70">People are using our co-work spaces right now</p>
				</div>
			</div>
		</section>
	);
};

export default Facts;
