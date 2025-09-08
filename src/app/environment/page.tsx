"use client"; // This must be a client component to use Framer Motion

import {motion} from "framer-motion";
import Hero from "@/components/Hero";
import PageTransition from "@/components/page-transition";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Page() {
    const settings = {
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
    };
    const menuNav = [
        {
            title: "Environment",
            href: "/environment",
        },
        {
            title: "Corporate Social Responsibility",
            href: "/esgrc/corporate-social-responsibility",
        },
        {
            title: "Good Corporate Governance",
            href: "/esgrc/good-corporate-governance",
            children: [
                {title: "Code of Conduct", href: "#"},
                {title: "Principal & Policy", href: "#"},
                {title: "Implementation", href: "#"},
                {title: "Internal Audit Unit", href: "#"},
                {title: "Gratification Control", href: "#"},
                {title: "Whistle Blowing System", href: "#"},
                {title: "Risk Management Policy", href: "#"},
                {title: "Communication Policy", href: "#"},
            ],
        },
    ];
    return (
        <div className="w-full min-h-screen">
            <PageTransition/>

            <Hero
                routes={[{text: "Home", href: "/"}, {text: "ESGRC - Environment"}]}
                backgroundClass="bg-[url('/environment/front.jpg')] bg-top"
                title={"Environment"}
            />
            <section className="px-6 md:px-40 2xl:px-80 bg-white pb-20">
                <div>
                    <section className="flex flex-col items-center justify-center gap-6 2xl:gap-8 text-black">
                        {/* image */}
                        <div
                            className="w-full h-min p-1 bg-gradient-to-b from-[#0A436A] to-[#0A436A00] -mt-10 md:-mt-20 z-50 shadow-md">
                            <Image
                                src="/environment/front.jpg"
                                alt="Cover of the Annual Report 2023"
                                width={1280}
                                height={739}
                                className="object-fill h-min"
                            />
                        </div>

                        <div className="w-full h-auto flex flex-col-reverse md:flex-row justify-center">
                            {/* Left Column (Text) */}
                            <div className="lg:w-3/4 p-4 flex flex-col gap-4 md:gap-6 2xl:gap-8 text-base md:text-xl 2xl:text-2xl">
                                <h3 className="text-lg md:text-2xl 2xl:text-3xl font-bold text-[#0A436A]">Responsibility Towards
                                    Environmental Preservation</h3>
                                <p className="font-bold text-[#0A436A]">Commitment and Policy</p>
                                <p>
                                    The Company is firmly committed to maintaining environmental quality for future
                                    generations. MNC Financial Services always pays serious attention to environmental
                                    problems, including environmental pollution, environmental conservation, and
                                    preservation.
                                    <br/>The Company and its business units initiate internal policies for environmental
                                    maintenance and preservation by focusing on controlling ecological impacts to create
                                    more environmentally friendly operations. These activities include savings on paper,
                                    electricity, water, and fuel consumptions; environmentally friendly building
                                    management, compliance with environmental permits, and environmental protection,
                                    which involves employees.
                                </p>

                                <p className="font-bold text-[#0A436A]">Environmental CSR Initiatives</p>
                                <p>
                                    The Company and its’ business units have implemented the following environmental
                                    preservation initiatives:
                                </p>
                                <ol className="list-decimal pl-5 flex flex-col gap-6 2xl:gap-8">
                                    <li>Reforestation in Pantai Bakti Village, Muara Gembong area, West Java which
                                        includes beach cleaning to preserve and clean the beach, providing tree seeds,
                                        planting trees and mangroves to take advantage of its roots, and training to
                                        reuse shellfish waste.
                                    </li>
                                    <li>BKI Leasing collaborated with BKI Peduli to plant 1,000 mangrove seedlings in
                                        the Pantai Indah Kapuk (PIK) area, North Jakarta.
                                    </li>
                                    <li>BKI Peduli invited children in Pantai Bakti Muara Gembong Village, Bekasi
                                        Regency, West Java, to better understand environmental preservation through a
                                        green school program. Children were taught to recycle used things by decorating
                                        and painting them.
                                    </li>
                                    <li>Encouraged activities related to the use of environmentally friendly materials
                                        and energy at the head office and business entities. The activities include
                                        optimizing electronic mail (email) for employees’ communication, disseminating
                                        energy savings to all employees, and maintaining vehicles and operational
                                        equipment according to procedures.
                                    </li>
                                    <li>Carried out a consistent water management program to maintain the quantity and
                                        quality of water, both for the Company’s sustainable operations and to preserve
                                        water condition in the surrounding environment. The Company has also installed a
                                        water treatment plant for the water recycling process.
                                    </li>
                                    <li>Digitization in all business units is an indirect effort to conserve the
                                        environment by reducing dependence on paper use (paperless), reducing the direct
                                        transaction mobilization to reduce the number of emissions and pollution.
                                    </li>
                                </ol>
                            </div>

                            {/* Right Column (menu) */}
                            <div className="lg:w-1/4 flex justify-center p-4">
                                <div className={"w-full h-fit px-4 py-3 flex flex-col gap-8 2xl:gap-12 bg-gradient-to-b from-[#000000] to-[#0a436a] text-white"}>
                                    <h3 className={"text-base md:text-xl 2xl:text-3xl font-bold"}>ESGRC</h3>
                                    <ul className="space-y-2 text-xs md:text-sm 2xl:text-base font-light">
                                        {menuNav.map((child, childIdx) => (
                                            <li
                                                key={childIdx}
                                                className={child.children ? "group/esgrc" : ""}
                                            >
                                                <a
                                                    href={child.href}
                                                    className="block w-full border-b-2 border-b-zinc-600 pb-2 hover:border-b-white transition-colors duration-300 hover:text-white/50"
                                                >
                                                    {child.title}
                                                </a>
                                                {/* Render sub-submenu kalau ada children */}
                                                {child.children && (
                                                    <ul
                                                        className="pl-4 mt-2 space-y-2 md:max-h-0 md:opacity-0 overflow-hidden transition-all duration-1000 group-hover/esgrc:max-h-screen group-hover/esgrc:opacity-100"
                                                    >
                                                        {child.children.map((child2, child2Idx) => (
                                                            <li key={child2Idx}>
                                                                <a
                                                                    href={child2.href}
                                                                    className="block w-full border-b-2 border-b-zinc-600 pb-2 hover:border-b-white transition-colors duration-300 hover:text-white/50"
                                                                >
                                                                    {child2.title}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}

                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* carousel image */}
                        <div className="w-full">
                            <Slider {...settings}>
                                <Image width={639} height={365} alt={"car"} src="/environment/car1.jpg"/>
                                <Image width={639} height={365} alt={"car"} src="/environment/car2.jpg"/>
                                <Image width={639} height={365} alt={"car"} src="/environment/car3.jpg"/>
                                <Image width={639} height={365} alt={"car"} src="/environment/car2.jpg"/>
                            </Slider>
                        </div>
                        <style jsx global>{`
                            .slick-slide {
                                transition: all 0.3s ease;
                                transform: scale(0.5); /* default kecil */
                            }

                            .slick-center {
                                transform: scale(1); /* yang di tengah normal/besar */
                                opacity: 1;
                            }

                            .slick-prev:before, .slick-next:before {
                                font-family: inherit !important;
                                color: black !important;
                            }
                        `}</style>

                    </section>
                </div>
            </section>
        </div>
    );
}
