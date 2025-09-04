import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import VideoGallery from "@/app/podcasts/components/VideoGallery";
import {getYouTubeThumb} from "@/utils/youtube";

const clips = [
    {
        src: "https://www.youtube.com/watch?v=0n6h5RkTaEk",
        thumb: getYouTubeThumb("https://www.youtube.com/watch?v=0n6h5RkTaEk", "hq"),
        label: "Keamanan Pengangkutan Kendaraan Listrik di Kapal Untuk Masa Depan",
    },
    // { src: "/videos/shipyard.mp4", thumb: "/thumbs/shipyard.jpg", label: "Local MP4" },
];

export default function Photos() {
    return (
        <div
            id="photos"
            className="relative min-h-screen overflow-hidden"
        >
            <PageTransition/>

            <Hero
                routes={[{text: "Home", href: "/"}, {text: "Podcast"}]}
                backgroundClass="bg-[url('/photos-bg.jpg')] bg-top"
                title={"Podcasts"}
                description={"Exploring potential to grow and create impact."}
                customOverlayClass={"from-[#FFFFFF] to-[#FFFFFF00]"}
            />

            <section className="w-full 2xl:px-28 lg:px-20 px-4 2xl:py-20 lg:py-16 py-12 bg-white">
                <VideoGallery videos={clips} columns={3} aspect="landscape"/>
            </section>
        </div>
    )
}