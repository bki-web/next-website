import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import DocumentSection from "@/app/research/rnd/bki-rules-regulations/components/DocumentSection";

export default function BkiRulesRegulations() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <PageTransition/>
            <Hero
                routes={[
                    {
                        text: "Home",
                        href: "/",
                    },
                    {
                        text: "Research",
                        href: "/research/rnd",
                    },
                    {
                        text: "Research & Development",
                        href: "/research/rnd",
                    },
                    {
                        text: "BKI Rules & Regulations",
                    },
                ]}
                backgroundClass="bg-[url('/rnd/rules-regulations-bg.jpg')] bg-top"
                title={"BKI Rules & Regulations"}
                description={"BKI carries out classification based on the latest standards, continuously updating our Rules and Regulations through research, practice, and alignment with IACS, IMO, and other international requirements."}
                customOverlayClass={"from-[#FFFFFF] to-[#FFFFFF00]"}
            />

            <DocumentSection/>
        </div>
    );
}