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
    "/material/manufacturing-process-approval-1.jpg",
    "/material/manufacturing-process-approval-2.jpg",
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

export default function ManufacturingProcessApproval() {
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
                        text: "Manufacturing Process Approval",
                    }
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Manufacturing Process Approval"}
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
                        {/*<h2 className="text-3xl md:text-4xl font-bold text-gray-800">*/}
                        {/*    MATERIAL <span className="text-teal-600">& COMPONENT</span>*/}
                        {/*</h2>*/}
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Manufacturing Process Approval (MPA) is, on condition that the uniform quality of the products can be assured, to certify for the manufacturers that the manufacturing process complies with the equirements in the Rules for Materials and/or the relevant standards, where deemed satisfactory by BKI as results of carrying out the examination, tests and inspections specified in the Guidance prior to commencement of production and test of the product.
                        </p>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Alternative Certification Scheme (ACS) is to certify for the manufacturers that their quality system complies with the requirements in the Guidance, where deemed satisfactory by BKI as the result of carrying out the plant audit specified in the Guidance and evaluating the capability of a quality assurance of the manufacturers, as suppliers.
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
                                Manufacturing Process Approval Procedure
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="font-semibold">Documents/Data to be submitted</p>
                                <ol className="mt-3 list-decimal pl-6 space-y-2 leading-relaxed">
                                    <li>
                                        <span className="font-medium">Documents for approval:</span>
                                        <div className="mt-1">
                                            Approval Test Plan as per Guidance for The Approval and Type Approval of
                                            Materials and Equipment for Marine Use (Pt.1 Vol.W) Sec.2
                                        </div>
                                    </li>

                                    <li>
                                        <span className="font-medium">Documents for reference:</span>
                                        <ul className="mt-2 list-disc pl-5 space-y-2">
                                            <li>
                                                <span className="font-medium">Details of products information</span>{" "}
                                                (type of products, grade of steel, thickness and specification of products)
                                            </li>
                                            <li>
                                                <span className="font-medium">Outline of workshops</span> (name and address of the manufacturer,
                                                history, layout and dimension of works)
                                            </li>
                                            <li>
                                                <span className="font-medium">Organization and quality:</span>
                                                <ul className="mt-2 list-[square] pl-5 space-y-1">
                                                    <li>Organizational chart</li>
                                                    <li>Staff employed and organization of the quality control department</li>
                                                    <li>
                                                        Certification of compliance of the quality system with ISO 9001 and/or
                                                        approval certificates already granted by other Classification Societies, if any
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="font-medium">Outline of manufacturing process and facilities</span>
                                                <ul className="mt-2 list-[square] pl-5 space-y-1">
                                                    <li>
                                                        Flow chart of the manufacturing process including quality control process on each
                                                        manufacturing stage
                                                    </li>
                                                    <li>Manufacturing facilities and equipment</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="font-medium">Inspection and test</span>
                                                <ul className="mt-2 list-[square] pl-5 space-y-1">
                                                    <li>Inspection and test procedures/standards</li>
                                                    <li>
                                                        Qualification of the personnel involved in activities related to the inspection and test
                                                    </li>
                                                    <li>
                                                        List and documents of equipment for mechanical tests, chemical analyses and
                                                        metallography, non-destructive examinations; relevant calibration procedures
                                                    </li>
                                                    <li>
                                                        Details of system used for identification of materials at the different manufacturing stages
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="font-medium">Service records</span> (estimated total annual production of finished
                                                products for shipbuilding and other applications)
                                            </li>
                                            <li>
                  <span className="font-medium">
                    Additional Reference Data/Documents
                  </span>{" "}
                                                as per specific product requirement stated in the Technical Rules and/or Standards (e.g. Vol.VI,
                                                Vol.VII, Vol.III, Vol.IV, etc.)
                                            </li>
                                            <li>Other documents deemed necessary by BKI</li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>

                            {/* Links */}
                            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                                <Link
                                    href="https://www.bkinusantara.co.id/layout/matkom_new/img/flowchart/MPA.png"
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
                                Manufacturing Process Approval With Alternative Certification Scheme (ACS) Procedure
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="font-semibold">Documents/Data to be submitted</p>
                                <ol className="mt-3 list-decimal pl-6 space-y-2 leading-relaxed">
                                    <li>
                                        <span className="font-medium">Documents for approval:</span>
                                        <ul className="mt-2 list-disc pl-5 space-y-1">
                                            <li>
                                                Approval Test Plan as per Guidance for The Approval and Type Approval of
                                                Materials and Equipment for Marine Use (Pt.1 Vol.W) Sec.2
                                            </li>
                                            <li>Procedure for maintaining approval of ACS</li>
                                        </ul>
                                    </li>

                                    <li>
                                        <span className="font-medium">Documents for reference:</span>
                                        <ul className="mt-2 list-disc pl-5 space-y-2">
                                            <li>
                                                <span className="font-medium">Details of products information</span> (type of
                                                products, grade of steel, thickness and specification of products)
                                            </li>
                                            <li>
                                                <span className="font-medium">Outline of workshops</span> (name and address of the
                                                manufacturer, history, layout and dimension of works)
                                            </li>
                                            <li>
                                                <span className="font-medium">Organization and quality:</span>
                                                <ul className="mt-2 list-[square] pl-5 space-y-1">
                                                    <li>Organizational chart</li>
                                                    <li>Staff employed and organization of the quality control department</li>
                                                    <li>
                                                        Certification of compliance of the quality system with ISO 9001 and/or
                                                        approval certificates already granted by other Classification Societies, if any
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="font-medium">Outline of manufacturing process and facilities</span>
                                                <ul className="mt-2 list-[square] pl-5 space-y-1">
                                                    <li>
                                                        Flow chart of the manufacturing process including quality control process on
                                                        each manufacturing stage
                                                    </li>
                                                    <li>Manufacturing facilities and equipment</li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="font-medium">Inspection and test:</span>
                                                <ul className="mt-2 list-[square] pl-5 space-y-1">
                                                    <li>Inspection and test procedures/standards</li>
                                                    <li>
                                                        Qualification of the personnel involved in activities related to the inspection
                                                        and test
                                                    </li>
                                                    <li>
                                                        List and documents of equipment for mechanical tests, chemical analyses and
                                                        metallography, non-destructive examinations and relevant calibration procedures
                                                    </li>
                                                    <li>
                                                        Details of system used for identification of materials at the different
                                                        manufacturing stages
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <span className="font-medium">Service records</span> (estimated total annual
                                                production of finished products for shipbuilding and other applications)
                                            </li>
                                            <li>
                                                <span className="font-medium">Additional Reference Data/Documents</span> as per
                                                specific product requirement stated in the Technical Rules and/or Standards (e.g.
                                                Vol.W, Vol.II, Vol.III, Vol.IV, etc.)
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
                                    href="https://www.bkinusantara.co.id/layout/matkom_new/img/flowchart/MPA_ACS.png"
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