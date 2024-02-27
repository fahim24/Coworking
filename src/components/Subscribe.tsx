const Subscribe = () => {
	return (
		<section className="container mx-auto px-10 py-24 ">
			<div className="w-full md:w-3/5 lg:w-2/5 mx-auto space-y-16">
				<div className="space-y-5 text-CDark text-center">
					<h2 className=" font-bold text-4xl ">Get latest updates</h2>
					<p className=" opacity-70 text-lg ">
						With lots of unique blocks, you can easily build a page without coding. Build your next
						landing page.
					</p>
				</div>
				<div className="space-y-5 w-full lg:w-3/4 mx-auto">
					<div className="flex flex-col md:flex-row gap-3 w-full">
						<input
							type="email"
							placeholder="Enter Your Email"
							className="border border-solid border-CGray p-2.5 rounded w-full"
						/>
						<button className="bg-CBlue text-white font-bold rounded py-2.5 px-5 hover:opacity-90">
							Subscribe
						</button>
					</div>
					<p className="text-CDark opacity-70 text-center">
						We’ll never share your details with third parties. View our Privacy Policy for more
						info.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Subscribe;
