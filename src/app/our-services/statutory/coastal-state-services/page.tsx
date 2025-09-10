import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";

export default function CoastalStateServicesPage() {
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
                        text: "Coastal State Services",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"Coastal State Services"}
                description={
                    "Lorem Ipsum Dolor sit Amet."
                }
            />
            <ContactUsSection/>
        </div>
    );
}
