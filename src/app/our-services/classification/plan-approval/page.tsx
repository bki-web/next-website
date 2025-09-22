import Image from "next/image";
import ContactUsSection from "@/components/ContactUsSection";
import Hero from "@/components/Hero";
import FancyTitle from "@/components/FancyTitle";
import PageTransition from "@/components/page-transition";
import DigitalPlatform from "@/app/our-services/components/DigitalPlatform";
import GlimpseSlider from "./components/GlimpseSlider";
import PlanApprovalGridInformation
    from "@/app/our-services/classification/plan-approval/components/PlanApprovalGridInformation";

export default function ClassificationPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <PageTransition/>

            {/* Hero Section */}
            <Hero
                routes={[
                    {text: "Home", href: "/"},
                    {
                        text: "Services",
                        href: "/our-services",
                    },
                    {text: "Plan Approval"},
                ]}
                backgroundClass="bg-[url('/plan-approval/top-page.jpg')]"
                title={"Plan Approval"}
                description={
                    "Comprehensive review and approval of ship plans to ensure compliance with international safety and classification standards."
                }
            />

            {/*Introduction Section*/}
            <section
                className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-8 bg-white flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-8">
                <Image
                    src={"/plan-approval/introduction.jpg"}
                    alt={"Introduction"}
                    width={800}
                    height={570}
                    className="object-cover lg:h-[35vh] h-[250px] rounded-sm"
                />
                <div className="flex flex-col justify-center 2xl:gap-8 md:gap-6 gap-4">
                    <p className="text-3xl font-bold text-[#0A436A]">
                        Introduction
                    </p>
                    <div className="w-full flex flex-col justify-center items-center gap-4">
                        <p className="text-lg text-[#0A436A] text-justify w-full">
                            Improve your confidence in your ship performance and statutory
                            compliance with us.
                        </p>
                        <p className="text-lg text-[#0A436A] text-justify">
                            We offer a comprehensive range of approval services, covering both
                            classification and statutory documentation. Our mission is to
                            ensure the safety and sustainability of the global maritime
                            industry through our genuine commitment to contribution,
                            trustworthiness, and adherence to rules and regulations.
                        </p>
                    </div>
                </div>
            </section>

            {/*Slider Section*/}
            <GlimpseSlider/>

            {/*Service Section*/}

            <section
                className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-8 bg-[#0A436A] text-white flex lg:flex-row-reverse flex-col justify-center items-center lg:gap-16 gap-8">
                <div className="flex flex-col justify-center 2xl:gap-12 md:gap-8 gap-4">
                    <p className="text-3xl font-bold text-white">
                        <FancyTitle title="Classification Service"/>
                    </p>
                    <div className="w-full flex flex-col justify-center items-center 2xl:gap-8 md:gap-4 gap-2">
                        <p className="text-lg text-white text-justify">
                            Our expertise in approving Class Documentation consistently
                            exceeds client expectations. We apply comprehensive rules and
                            regulations to a wide range of classified ships, continuously
                            adapting and improving them through practical insights and
                            rigorous evaluation.
                        </p>
                        <p className="text-lg text-white text-justify">
                            Our mission is to enhance the safety, quality, and reliability of
                            ships, contributing to the sustainable advancement of the maritime
                            industry.
                        </p>
                    </div>
                </div>
                <Image
                    src={"/plan-approval/classification-service.jpg"}
                    alt={"Introduction"}
                    width={800}
                    height={570}
                    className="object-cover lg:h-[40vh] h-[350px] rounded-sm"
                />
            </section>

            {/*Technology Section*/}
            <section
                className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-8 bg-white flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-8">
                <div className="flex flex-col justify-center 2xl:gap-12 md:gap-8 gap-4">
                    <p className="text-3xl font-bold text-[#0A436A]">
                        <FancyTitle title="Technology Advancement"/>
                    </p>
                    <div className="w-full flex flex-col justify-center items-center 2xl:gap-8 md:gap-4 gap-2">
                        <p className="text-lg text-[#0A436A] text-justify">
                            As a leading Indonesian Classification Society, we offer far more
                            than compliance alone. Our goal is to ensure your designs meet the
                            highest standards of safety, quality, and reliability. We leverage
                            advanced engineering software such as{" "}
                            <span className="font-bold">
                {" "}
                                NAPA, Maxsurf, Ansys, and Poseidon
              </span>
                            . In addition, we have developed our own structural analysis
                            software, Dewaruci, which fully complies with relevant standards
                            and is designed to overcome real-world engineering challenges.
                        </p>
                        <p className="text-lg text-[#0A436A] text-justify">
                            Our expert engineers are committed to consistently exceeding your
                            expectation services, providing owners and operators with
                            confidence in managing ships and offshore assets safely. We ensure
                            compliance with class documentation in accordance with our
                            advanced class regulations, which include, but are not limited to:
                        </p>
                    </div>
                </div>
                <Image
                    src={"/plan-approval/technology.jpg"}
                    alt={"Introduction"}
                    width={800}
                    height={570}
                    className="object-cover lg:h-[50vh] h-[350px] rounded-sm"
                />
            </section>

            <PlanApprovalGridInformation />

            <DigitalPlatform/>

            <ContactUsSection/>
        </div>
    );
}
