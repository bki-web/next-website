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
    "/material/type-approval-procedure-1.jpg",
    "/material/type-approval-procedure-2.jpg",
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

export default function TypeApproval() {
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
                        text: "Manufacturers Approval",
                        href: "/our-services/classification/material-component/manufacturers-approval",
                    },
                    {
                        text: "Type Approval",
                    }
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Type Approval"}
            />

            <section className="relative py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-8">
                    {/* Header */}
                    <motion.div
                        initial={{opacity: 0, y: 40}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.7, ease: "easeOut"}}
                        className="text-center mb-14 space-y-3"
                    >
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Type Approval (TA) is to certify for the manufacturers of the materials and equipment for
                            marine use that the materials and equipment comply with the provisions for the type approved
                            products in the Guidance, here deemed satisfactory by BKI as the results of carrying out
                            the examination, tests and inspection specified in the Guidance before installation on board.
                        </p>
                    </motion.div>

                    <div className="w-full bg-white rounded-sm">
                        {/* Slider */}
                        <div className="w-full max-w-5xl mx-auto pt-12">
                            <Slider {...settings}>
                                {images.map((src, idx) => (
                                    <div key={idx} className="relative w-full h-[280px] md:h-[400px]">
                                        <Image
                                            src={src}
                                            alt={`Slide ${idx}`}
                                            fill
                                            className="object-cover rounded-sm"
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
                                Type Approval Procedure
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="font-semibold">Documents/Data to be submitted</p>
                                <ol className="mt-3 list-decimal pl-6 space-y-2 leading-relaxed">
                                    <li>
                                        <span className="font-medium">Documents/Data for approval:</span>
                                        <ul className="mt-2 list-disc pl-5 space-y-1">
                                            <li>Type Test Program</li>
                                            <li>Relevant drawings</li>
                                        </ul>
                                    </li>

                                    <li>
                                        <span className="font-medium">Documents for reference:</span>
                                        <ul className="mt-2 list-disc pl-5 space-y-2">
                                            <li>Particulars and specifications of products</li>
                                            <li>
                                                Outline of company
                                                <ul className="mt-2 list-[square] pl-5 space-y-1">
                                                    <li>Data on history, outline and layout of manufacturing plants</li>
                                                    <li>
                                                        Organization and management structure, including subsidiaries to be
                                                        included in the approval/certification
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>Data on major manufacturing facilities</li>
                                            <li>Data on manufacturing process</li>
                                            <li>Data of in-house standards or codes</li>
                                            <li>Data of quality control system</li>
                                            <li>Data on major inspection and testing facilities</li>
                                            <li>Service records</li>
                                            <li>List of subcontractors and their products</li>
                                            <li>
                                                For a newly developed product, documents related to tests and their results
                                                for its development
                                            </li>
                                            <li>
                                                Additional Reference Data/Documents as per specific product requirement
                                                stated in the Technical Rules and/or Standards (e.g. Vol.W, Vol.II, Vol.III,
                                                Vol.IV, etc.)
                                            </li>
                                            <li>Other documents deemed necessary by BKI</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>

                            {/* Links */}
                            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                                <Link
                                    href="https://www.bkinusantara.co.id/layout/matkom_new/img/flowchart/TA.svg"
                                    target={"_blank"}
                                    className="text-[#0A436A] font-medium hover:underline"
                                >
                                    Flowchart
                                </Link>
                                <Link
                                    href="https://www.bkinusantara.co.id/layout/matkom_new/form/F12.3.01-2021%20Rev.2%20%20Permohonan%20Persetujuan%20Pabrik%20Pembuat.docx"
                                    target={"_blank"}
                                    className="text-[#0A436A] font-medium hover:underline"
                                >
                                    Application Form
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    <div className="w-full bg-white rounded-sm">
                        {/* Slider */}
                        <div className="w-full max-w-5xl mx-auto pt-12">
                            <Slider {...settings}>
                                {images.map((src, idx) => (
                                    <div key={idx} className="relative w-full h-[280px] md:h-[400px]">
                                        <Image
                                            src={src}
                                            alt={`Slide ${idx}`}
                                            fill
                                            className="object-cover rounded-sm"
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
                                Type Approval With Alternative Certification Scheme (ACS) Procedure
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="font-semibold">Documents/Data to be submitted</p>
                                <ol className="mt-3 list-decimal pl-6 space-y-2 leading-relaxed">
                                    <li>
                                        <span className="font-medium">Documents/Data for approval:</span>
                                        <ul className="mt-2 list-disc pl-5 space-y-1">
                                            <li>Type Test Program</li>
                                            <li>Relevant drawings</li>
                                            <li>Procedure for maintaining approval of ACS</li>
                                        </ul>
                                    </li>

                                    <li>
                                        <span className="font-medium">Documents for reference:</span>
                                        <ul className="mt-2 list-disc pl-5 space-y-2">
                                            <li>Particulars and specifications of products</li>
                                            <li>Outline of company</li>
                                            <li>Data on history, outline and layout of manufacturing plants</li>
                                            <li>
                                                Organization and management structure, including subsidiaries to be included in the
                                                approval/certification
                                            </li>
                                            <li>Data on major manufacturing facilities</li>
                                            <li>Data on manufacturing process</li>
                                            <li>Data of in-house standards or codes</li>
                                            <li>Data of quality control system</li>
                                            <li>Data on major inspection and testing facilities</li>
                                            <li>Service records</li>
                                            <li>List of subcontractors and their products</li>
                                            <li>
                                                For a newly developed product, documents related to tests and their results for its
                                                development
                                            </li>
                                            <li>
                                                Additional Reference Data/Documents as per specific product requirement stated in
                                                the Technical Rules and/or Standards (e.g. Vol.W, Vol.II, Vol.III, Vol.IV, etc.)
                                            </li>
                                            <li>Quality Manual</li>
                                            <li>Other documents deemed necessary by BKI</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>

                            {/* Links */}
                            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                                <Link
                                    href="https://www.bkinusantara.co.id/layout/matkom_new/img/flowchart/TA_ACS.png"
                                    target={"_blank"}
                                    className="text-[#0A436A] font-medium hover:underline"
                                >
                                    Flowchart
                                </Link>
                                <Link
                                    href="https://www.bkinusantara.co.id/layout/matkom_new/form/F12.3.01-2021%20Rev.2%20%20Permohonan%20Persetujuan%20Pabrik%20Pembuat.docx"
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
                        className="mt-20 bg-gradient-to-r from-[#0A436A]/60 to-[#0A436A] text-white rounded-sm p-12 text-center shadow-xl"
                    >
                        <h3 className="text-xl md:text-2xl font-semibold mb-6">
                            Information for Company Approval and Product Certification
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="https://www.bkinusantara.co.id/listrequireddocuments.php"
                                target={"_blank"}
                                className="px-6 py-3 rounded-sm border border-white hover:bg-white hover:text-teal-700 transition-colors"
                            >
                                Find Product
                            </Link>
                            <Link
                                href="https://www.bkinusantara.co.id/listapproved.php"
                                target={"_blank"}
                                className="px-6 py-3 rounded-sm border border-white hover:bg-white hover:text-teal-700 transition-colors"
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