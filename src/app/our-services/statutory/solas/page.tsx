import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";

export default function SOLASPage() {
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
                        text: "SOLAS",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"SOLAS"}
                description={
                    "Lorem Ipsum Dolor sit Amet."
                }
            />


            <ContactUsSection/>
        </div>
    );
}
