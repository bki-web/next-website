import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import DigitalPlatform from "../../components/DigitalPlatform";

export default function IMOMeetingPage() {
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
                        text: "IMO Meeting",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"IMO Meeting"}
                description={
                    "Lorem Ipsum Dolor sit Amet."
                }
            />

            <DigitalPlatform/>
            <ContactUsSection/>
        </div>
    );
}
