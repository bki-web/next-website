'use client';
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import {motion, Variants} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {Eye, LayoutDashboard, ListTodo} from "lucide-react";

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
        icon: <LayoutDashboard size={28}/>,
        title: "Design Approval",
        desc: "Design Approval (DA) is to certify for the manufacturers that the drawings and documents specifying the particulars, construction, dimensions and materials of equipment for marine.",
        image: "/material/design-approval.jpg",
    },
    {
        icon: <ListTodo size={28}/>,
        title: "Manufacturing Process Approval",
        desc: "Manufacturing Process Approval (MPA) is, on condition that the uniform quality of the products can be assured, to certify for the manufacturers that the manufacturing process complies with the equirements in the Rules for Materials and/or the relevant standards.",
        image: "/material/manufacturing-process-approval.jpg",
    },
    {
        icon: <Eye size={28}/>,
        title: "Type Approval",
        desc: "Type Approval (TA) is to certify for the manufacturers of the materials and equipment for marine use that the materials and equipment comply with the provisions for the type approved products in the Guidance.",
        image: "/material/type-approval.jpg",
    },
];

export default function ManufacturersApproval() {
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
                    }
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Manufacturers Approval"}
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
                            Manufacturer approval is to assess and approve a manufacturing works, to ensure the works
                            have enough capability to maintain such quality of its products as required by Rules for the
                            Classification and Construction of Seagoing Ships, and other rules of BKI.
                            Some materials and products are required by Rules for the Classification and Construction of
                            Seagoing Ships and other rules of BKI before they can be installed on ships must have a
                            certificate of approval or are made by a manufacturer with an approval certificate.
                            There are 3 types of approvals that can be given:
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover"
                                        width={500}
                                        height={500}
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
        </div>
    );
}