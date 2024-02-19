import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse } from "antd";

const Services = () => {
	const text = `
  With lots of unique blocks, you can easily build a page with coding. Build your next landing page. Integer ut obe ryn. Sed feugiat vitae turpis a porta.
`;

	const items = [
		{
			key: "1",
			label: <h3 className="text-CDark font-bold text-xl">How to setup Shade Pro?</h3>,
			children: <p className="text-CDark opacity-70">{text}</p>,
		},
		{
			key: "2",
			label: <h3 className="text-CDark font-bold text-xl">Can I use Shade Pro for my clients?</h3>,
			children: <p className="text-CDark opacity-70">{text}</p>,
		},
		{
			key: "3",
			label: <h3 className="text-CDark font-bold text-xl">How often do you release update?</h3>,
			children: <p className="text-CDark opacity-70">{text}</p>,
		},
		{
			key: "4",
			label: <h3 className="text-CDark font-bold text-xl">How can I access to old version?</h3>,
			children: <p className="text-CDark opacity-70">{text}</p>,
		},
	];

	return (
		<section className="bg-CDark">
			<div className="container mx-auto px-10 py-24 grid grid-cols-1 md:grid-cols-2 gap-20">
				<div className="flex flex-col gap-16 w-full lg:w-4/5">
					<div className="flex flex-col gap-5 text-white">
						<h2 className="font-bold text-4xl text-center md:text-left">
							We are always here for your backup.
						</h2>
						<p className="text-lg opacity-70 text-center md:text-left">
							We share common trends and strategies for creating & improving your rental income.
						</p>
					</div>
					<div className="flex flex-col gap-10">
						<div className="flex gap-5">
							<div className="text-CGreen text-3xl">
								<FontAwesomeIcon icon={faCircleCheck} />
							</div>
							<div className="flex flex-col gap-3 text-white">
								<h5 className="font-bold text-xl">Noise Free Locations</h5>
								<p className="opacity-70">
									With lots of unique blocks, you can easily build a page without coding.{" "}
								</p>
							</div>
						</div>
						<div className="flex gap-5">
							<div className="text-CGreen text-3xl">
								<FontAwesomeIcon icon={faCircleCheck} />
							</div>
							<div className="flex flex-col gap-3 text-white">
								<h5 className="font-bold text-xl">24/7 Hour Support</h5>
								<p className="opacity-70">
									With lots of unique blocks, you can easily build a page without coding.{" "}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white rounded-lg border-t-4 border-solid border-CGreen h-fit">
					<Collapse
						accordion
						items={items}
						size="large"
						bordered={false}
						defaultActiveKey={["1"]}
						expandIconPosition="end"
					/>
				</div>
			</div>
		</section>
	);
};

export default Services;
