import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import VideoSection from "@/app/research/rnd/components/VideoSection";
import GridInfoSection from "@/app/research/rnd/components/GridInfoSection";
import ActivitySection from "@/app/research/rnd/components/ActivitySection";

export default function ResearchAndDevelopmentPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden text-white">
            <PageTransition/>
            <VideoSection/>
            <GridInfoSection/>
            <ActivitySection/>
            <ContactUsSection/>
        </div>
    );
}
