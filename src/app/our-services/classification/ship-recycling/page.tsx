import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import DigitalPlatform from "../../components/DigitalPlatform";

export default function ShipRecyclingPage() {
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
                        text: "Ship Recycling",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Ship Recycling"}
                description={
                    "Lorem Ipsum Dolor sit Amet."
                }
            />

            <DigitalPlatform/>
            <ContactUsSection/>
        </div>
    );
}
