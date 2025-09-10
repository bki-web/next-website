import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import LatestActivitiySection from "@/app/research/rnd/activities/components/LatestActivitiySection";
import ResearchFocusSection from "@/app/research/rnd/activities/components/ResearchFocusSection";
import ResearchProjectSection from "@/app/research/rnd/activities/components/ResearchProjectSection";

export default function RNDActivities() {
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
                        text: "RnD Activities",
                    },
                ]}
                backgroundClass="bg-[url('/rnd/rules-regulations-bg.jpg')] bg-top"
                title={"BKI RnD Activities"}
                description={"Highlights that reflect our growth and commitment."}
                customOverlayClass={"from-[#FFFFFF] to-[#FFFFFF00]"}
            />

            <LatestActivitiySection/>

            <ResearchFocusSection/>

            <ResearchProjectSection/>
        </div>
    )
}