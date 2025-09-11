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
    "/material/supplier-1.jpeg",
    "/material/supplier-2.jpg",
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

export default function ServiceSuppliersApproval() {
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
                        text: "Service Suppliers Approval",
                    }
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Service Suppliers Approval"}
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
                        {/*<h2 className="text-3xl md:text-4xl font-bold text-gray-800">*/}
                        {/*    MATERIAL <span className="text-teal-600">& COMPONENT</span>*/}
                        {/*</h2>*/}
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Service supplier approval is to assess and approve a service supplier, to ensure the
                            supplier has enough capability to evaluate that the products have such quality as required
                            by Rules for the Classification and Construction of Seagoing Ships and other rules of BKI.
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
                                Service Suppliers
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="font-semibold">Documents/Data to be submitted</p>
                                <ol className="list-decimal pl-6 space-y-2">
                                    <li>
                                        Outline of the firms intended to be approved (location, history,
                                        organization and management structure, etc.)
                                    </li>
                                    <li>List of nominated agents, subsidiaries and subcontractors</li>
                                    <li>Experience of the company in the specific service area</li>
                                    <li>
                                        For categories of Service Suppliers that require authorization
                                        from manufacturers, documentary evidence...
                                    </li>
                                    <li>
                                        List of operators/technicians/inspectors documenting name,
                                        training and experience
                                    </li>
                                    <li>Training programmes for operators/technicians/inspectors</li>
                                    <li>Description of equipment used for the particular service...</li>
                                    <li>A guide for operators of such equipment</li>
                                    <li>
                                        Outline of the relevant service, description of service conditions
                                        or service regions
                                    </li>
                                    <li>Quality manual and supplementary documents...</li>
                                    <li>Documented procedures for crew communication...</li>
                                    <li>Checklists of the relevant services and reporting formats</li>
                                    <li>
                                        Copies of approval certificates issued by competent organizations
                                    </li>
                                    <li>Information on other activities (conflict of interest)</li>
                                    <li>
                                        Record of customer claims and corrective actions requested by
                                        certification bodies
                                    </li>
                                    <li>Other documents deemed necessary by the BKI</li>
                                </ol>
                            </div>

                            {/* Links */}
                            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                                <Link
                                    href="https://www.bkinusantara.co.id/layout/matkom_new/img/flowchart/SA.png"
                                    target={"_blank"}
                                    className="text-[#0A436A] font-medium hover:underline"
                                >
                                    Flowchart
                                </Link>
                                <Link
                                    href="https://www.bkinusantara.co.id/layout/matkom_new/form/F12.4.01-2021%20Rev.1%20%20Permohonan%20Persetujuan%20Penyedia%20Jasa.docx"
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