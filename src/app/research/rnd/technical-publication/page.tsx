import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import TechnicalPublicationGrid from "@/app/research/rnd/technical-publication/components/TechnicalPublicationGrid";
import InnerContent from "@/app/research/rnd/bki-rules-regulations/components/InnerContent";

export default function TechnicalPublication() {
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
                        text: "Technical Publication",
                    },
                ]}
                backgroundClass="bg-[url('/rnd/technical-publication.jpg')] bg-top"
                title={"BKI Technical Publication"}
                customOverlayClass={"from-[#FFFFFF] to-[#FFFFFF00]"}
                innerComponent={<InnerContent/>}
            />

            <TechnicalPublicationGrid/>
        </div>
    );
}