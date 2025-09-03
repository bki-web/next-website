import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import DigitalPlatform from "../../components/DigitalPlatform";

export default function IspsRegisterPage() {
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
                        text: "ISPS Register",
                    },
                ]}
                backgroundClass="bg-[url('/classification-bg.jpg')]"
                title={"ISPS Register"}
                description={
                    "Lorem Ipsum Dolor sit Amet."
                }
            />

            <DigitalPlatform/>
            <ContactUsSection/>
        </div>
    );
}
