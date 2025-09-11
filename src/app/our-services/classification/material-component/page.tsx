"use client";

import {motion, Variants} from "framer-motion";
import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import DigitalPlatform from "../../components/DigitalPlatform";
import {Factory, Newspaper, Settings, Wrench} from "lucide-react";
import Link from "next/link";

const cardVariants: Variants = {
    hidden: {opacity: 0, y: 40},
    show: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            delay: i * 0.15,
        },
    }),
};

const services = [
    {
        icon: <Factory size={28}/>,
        title: "Manufacturers Approval",
        desc: "Manufacturer approval is to assess and approve a manufacturing works, to ensure the works have enough capability to maintain such quality of its products as required by Rules for the Classification and Construction of Seagoing Ships, and other rules of BKI.",
        image: "/material/manufacturer.jpg",
    },
    {
        icon: <Settings size={28}/>,
        title: "Service Suppliers Approval",
        desc: "Service supplier approval is to assess and approve a service supplier, to ensure the supplier has enough capability to evaluate that the products have such quality as required by Rules for the Classification and Construction of Seagoing Ships and other rules of BKI.",
        image: "/material/supplier.jpg",
    },
    {
        icon: <Wrench size={28}/>,
        title: "Welding Approval",
        desc: "BKI provides services Certification of weld procedure qualifications and welder qualification tests to companies needing a verification to BKI Rules or welding standards.",
        image: "/material/welding.jpg",
    },
    {
        icon: <Newspaper size={28}/>,
        title: "Product Certification",
        desc: "Product certification is required if it is stated in the BKI Regulations that the product to be installed must be certified (eg engine, shaft, propeller, steering gear, windlass, etc.) prior to installation.",
        image: "/material/product.jpg",
    },
];

export default function MaterialAndComponentPage() {
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
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Material & Component"}
                description={"We help with your approval and certification needs. Our team includes expert surveyors and engineers whose expertise can help with your approval and certification needs."}
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
                        {/*<p className="mt-4 text-gray-600 max-w-3xl mx-auto">*/}
                        {/*    We help with your approval and certification needs. Our team includes expert surveyors and*/}
                        {/*    engineers whose expertise can help with your approval and certification needs.*/}
                        {/*</p>*/}
                        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
                            Join us to spread your company's products and services in our BKI approved database for
                            global market.
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {services.map((item, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                whileInView="show"
                                viewport={{once: true}}
                                variants={cardVariants}
                                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                            >
                                <div className="h-40 w-full overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="p-6 flex flex-col gap-3">
                                    <div className="text-teal-600">{item.icon}</div>
                                    <h3 className="font-semibold text-lg text-gray-800">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
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

            <DigitalPlatform/>
            <ContactUsSection/>
        </div>
    );
}
