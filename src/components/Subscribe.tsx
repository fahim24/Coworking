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
				<div className="space-y-5 w-3/4 mx-auto">
					<input
						type="email"
						placeholder="Enter Your Email"
						className="border border-solid border-CGray p-2.5 rounded"
					/>
					<button className="bg-CBlue text-white font-bold rounded p-2.5">Subscribe</button>
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
