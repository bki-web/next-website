import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import {ArrowLeft, Download} from "lucide-react";
import Link from "next/link";
import { ShipParticularContent } from "./components/ShipParticularContent";

export default function ShipParticular() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <PageTransition/>

            {/* Hero Section */}
            <Hero
                routes={[
                    {
                        text: "Home",
                        href: "/",
                    },
                    {
                        text: "Services",
                        href: "/our-services",
                    },
                    {
                        text: "Classification",
                        href: "/our-services#classification",
                    },
                    {
                        text: "Ship Register",
                        href: "/our-services/classification/ship-register",
                    },
                    {
                        text: "Ship Particular",
                    },
                ]}
                backgroundClass="bg-[url('/hero-background.jpg')] bg-top"
                title={"Ship Particular"}
                innerComponent={
                    <div className="flex justify-center items-center">
                        <button
                            className="flex items-center lg:gap-4 gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-base sm:text-lg md:text-xl xl:text-2xl font-light text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 cursor-pointer">
                            <Download/>
                            Download PDF
                        </button>
                    </div>
                }
            />

            <section className="w-full flex flex-col lg:py-5 py-2.5 lg:px-24 px-4 lg:gap-y-5 gap-y-2.5 bg-[#E2E7F0]">
                <Link href={'/our-services/classification/ship-register'}
                      className="flex items-center gap-2 cursor-pointer transition-colors duration-500 rounded-lg hover:bg-[#0A436A]/10 w-fit px-2">
                    <ArrowLeft className="text-[#0A436A]"/>
                    <p className="text-[#0A436A] lg:text-xl text-base font-semibold">Back</p>
                </Link>
                <ShipParticularContent/>
            </section>
        </div>
    )
}