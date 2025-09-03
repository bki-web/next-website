import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import DigitalPlatform from "../../components/DigitalPlatform";

export default function EnergyEfficiencyForShipsPage() {
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
                        text: "Statutory",
                        href: "/our-services#statutory",
                    },
                    {
                        text: "Energy Efficiency for Ships",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Energy Efficiency for Ships"}
                description={
                    "Lorem Ipsum Dolor sit Amet."
                }
            />

            <DigitalPlatform/>
            <ContactUsSection/>
        </div>
    );
}
