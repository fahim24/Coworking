const Facts = () => {
	return (
		<section className="container mx-auto px-10 border-b border-solid border-CGray py-5">
			<div className="grid grid-cols-3 gap-10">
				<div className="p-16 flex flex-col gap-5 text-CDark text-center">
					<h3 className="text-5xl font-bold">06</h3>
					<p className="text-lg opacity-70">Offices are available on different countries</p>
				</div>
				<div className="p-16 flex flex-col gap-5 text-CDark text-center">
					<h3 className="text-5xl font-bold">238</h3>
					<p className="text-lg opacity-70">Seats are available right now with dedicated support</p>
				</div>
				<div className="p-16 flex flex-col gap-5 text-CDark text-center">
					<h3 className="text-5xl font-bold">1395</h3>
					<p className="text-lg opacity-70">People are using our co-work spaces right now</p>
				</div>
			</div>
		</section>
	);
};

export default Facts;
