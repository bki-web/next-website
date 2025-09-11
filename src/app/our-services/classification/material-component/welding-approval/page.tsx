'use client';
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import {motion} from "framer-motion";
import Link from "next/link";

const images = [
    "/material/welder.jpg",
];

const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
};

export default function WeldingApproval() {
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
                    {
                        text: "Classification",
                        href: "/our-services#classification",
                    },
                    {
                        text: "Material & Component",
                        href: "/our-services/classification/material-component",
                    },
                    {
                        text: "Welding Approval",
                    }
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Welding Approval"}
            />

            <section className="relative py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    {/* Header */}
                    <motion.div
                        initial={{opacity: 0, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.7, ease: "easeOut"}}
                        className="text-center mb-14"
                    >
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            BKI provides services Certification of weld procedure qualifications and welder
                            qualification tests to companies needing a verification to BKI Rules or welding standards.
                            The demands on welding workshops in yards, manufacturing sites, repair and scrapping
                            companies are increasing worldwide. BKI approval also provides your customers with proof
                            that you meet high quality and safety standards. To guarantee high quality for all the
                            important parts of ships, maritime installations and their components, our BKI rules require
                            that welding work be carried out by approved companies or workshops.
                        </p>
                    </motion.div>

                    <div className="w-full bg-white">
                        {/* Slider */}
                        <div className="w-full max-w-5xl mx-auto pt-12">
                            <Slider {...settings}>
                                {images.map((src, idx) => (
                                    <div key={idx} className="relative w-full h-[280px] md:h-[400px]">
                                        <Image
                                            src={src}
                                            alt={`Slide ${idx}`}
                                            fill
                                            className="object-cover rounded-xl"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>

                        {/* Content */}
                        <motion.div
                            className="max-w-4xl mx-auto px-6 md:px-10 py-12"
                            initial={{opacity: 0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6, ease: "easeOut"}}
                        >
                            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-8">
                                Welder Qualification Approval
                            </h2>

                            <p className="space-y-4 text-gray-700 leading-relaxed">
                                Welder&#39;s qualification tests are required for all welders who are to perform welding
                                work using manually guided welding appliances (as in manual metal arc welding or
                                semi-mechanized gas-shielded metal arc and/or welding using flux-cored electrodes) and
                                where the quality of the welded joints depends mainly on the manual skill of the welder.
                            </p>

                            {/* Links */}
                            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                                <Link
                                    href="https://www.bkinusantara.co.id/layout/matkom_new/img/flowchart/Welder.svg"
                                    target={"_blank"}
                                    className="text-[#0A436A] font-medium hover:underline"
                                >
                                    Flowchart
                                </Link>
                                <Link
                                    href="https://www.bkinusantara.co.id/layout/matkom_new/form/F12.2.02-2021%20Rev.1%20%20Permohonan%20Sertifikasi%20Las%20(Bengkel%20Las,%20Prosedur%20Las%20&%20Juru%20Las).docx"
                                    target={"_blank"}
                                    className="text-[#0A436A] font-medium hover:underline"
                                >
                                    Application Form
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{opacity: 0, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.7, ease: "easeOut", delay: 0.2}}
                        className="mt-20 bg-gradient-to-r from-[#0A436A]/60 to-[#0A436A] text-white rounded-2xl p-12 text-center shadow-xl"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold mb-6">
                            Information for Company Approval and Product Certification
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="https://www.bkinusantara.co.id/listrequireddocuments.php"
                                target={"_blank"}
                                className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-teal-700 transition-colors"
                            >
                                Find Product
                            </Link>
                            <Link
                                href="https://www.bkinusantara.co.id/listapproved.php"
                                target={"_blank"}
                                className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-teal-700 transition-colors"
                            >
                                Search Database
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}