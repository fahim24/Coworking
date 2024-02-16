const Subscribe = () => {
	return (
		<section className="container mx-auto px-10 py-24 border-b border-solid border-CGray">
			<div className="w-2/5 mx-auto flex flex-col  gap-16">
				<div className="flex flex-col gap-5 text-CDark text-center">
					<h2 className=" font-bold text-4xl ">Get latest updates</h2>
					<p className=" opacity-70 text-lg ">
						With lots of unique blocks, you can easily build a page without coding. Build your next
						landing page.
					</p>
				</div>
				<div className="flex flex-col gap-5 w-3/4 mx-auto">
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