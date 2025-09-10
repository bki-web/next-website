import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";

export default function MarpolPage() {
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
                        text: "MARPOL",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"MARPOL"}
                description={
                    "Lorem Ipsum Dolor sit Amet."
                }
            />


            <ContactUsSection/>
        </div>
    );
}
