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
    "/material/product-1.jpg",
    "/material/product-2.jpeg",
    "/material/product-3.jpeg",
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

export default function ProductCertification() {
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
                        text: "Product Certification",
                    }
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Product Certification"}
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
                            Product certification is required if it is stated in the BKI Regulations that the product to
                            be installed must be certified (eg engine, shaft, propeller, steering gear, windlass, etc.)
                            prior to installation. Product certification is carried out to ensure the quality of the
                            products to be used meet the standards.
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
                                Material / Product Certification Procedure
                            </h2>

                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p className="font-semibold">Documents/Data to be submitted</p>
                                <ol className="list-decimal pl-6 space-y-2">
                                    <li>
                                        Relevant technical drawing as per specific product requirement stated in the BKI
                                        Rules
                                    </li>
                                    <li>
                                        Diagram as per specific product requirement stated in the BKI Rules
                                    </li>
                                    <li>
                                        Calculation (if any)
                                    </li>
                                    <li>
                                        Welding detail (if any)
                                    </li>
                                    <li>
                                        Material specification, mill certificate
                                    </li>
                                </ol>
                            </div>

                            {/* Links */}
                            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
                                <Link
                                    href="https://www.bkinusantara.co.id/layout/matkom_new/img/flowchart/ProductCertification.png"
                                    target={"_blank"}
                                    className="text-[#0A436A] font-medium hover:underline"
                                >
                                    Flowchart
                                </Link>
                                <Link
                                    href="https://www.bkinusantara.co.id/layout/matkom_new/form/F12.1.01-2021%20Rev.4%20%20Permohonan%20Sertifikasi%20Material%20&%20Produk.docx"
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