import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Services = () => {
	return (
		<section className="bg-CDark">
			<div className="container mx-auto px-10 py-24 grid grid-cols-2 gap-20">
				<div className="flex flex-col gap-16 w-4/5">
					<div className="flex flex-col gap-5 text-white">
						<h2 className="font-bold text-4xl">We are always here for your backup.</h2>
						<p className="text-lg opacity-70">
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
					{/*<Accordion>
						<AccordionItem className="border-t border-solid border-CGray p-5 text-CDark">
							<AccordionButton className="flex justify-between w-full text-xl font-bold">
								How to setup Shade Pro?
								<AccordionIcon />
							</AccordionButton>

							<AccordionPanel>
								<p className="text-CDark  pt-5 opacity-70">
									With lots of unique blocks, you can easily build a page with coding. Build your
									next landing page. Integer ut obe ryn. Sed feugiat vitae turpis a porta.
								</p>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem className="border-t border-solid border-CGray p-5 text-CDark">
							<AccordionButton className="flex justify-between w-full text-xl font-bold">
								Can I use Shade Pro for my clients?
								<AccordionIcon />
							</AccordionButton>

							<AccordionPanel>
								<p className="text-CDark  pt-5 opacity-70">
									With lots of unique blocks, you can easily build a page with coding. Build your
									next landing page. Integer ut obe ryn. Sed feugiat vitae turpis a porta.
								</p>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem className="border-t border-solid border-CGray p-5 text-CDark">
							<AccordionButton className="flex justify-between w-full text-xl font-bold">
								How often do you release update?
								<AccordionIcon />
							</AccordionButton>

							<AccordionPanel>
								<p className="text-CDark  pt-5 opacity-70">
									With lots of unique blocks, you can easily build a page with coding. Build your
									next landing page. Integer ut obe ryn. Sed feugiat vitae turpis a porta.
								</p>
							</AccordionPanel>
						</AccordionItem>
						<AccordionItem className="border-t border-solid border-CGray p-5 text-CDark">
							<AccordionButton className="flex justify-between w-full text-xl font-bold">
								How can I access to old version?
								<AccordionIcon />
							</AccordionButton>

							<AccordionPanel>
								<p className="text-CDark  pt-5 opacity-70">
									With lots of unique blocks, you can easily build a page with coding. Build your
									next landing page. Integer ut obe ryn. Sed feugiat vitae turpis a porta.
								</p>
							</AccordionPanel>
						</AccordionItem>
	</Accordion>*/}
				</div>
			</div>
		</section>
	);
};

export default Services;
