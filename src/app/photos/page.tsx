import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import MetroGallery from "@/app/photos/components/MetroGallery";
import {TileItem} from "@/app/photos/components/Tile";

const tiles = [
    // {type: "text", label: "MAX", size: "tall"},
    {src: "/photos/01.jpg", alt: "Petal crest", size: "sm"},
    {src: "/photos/02.jpg", alt: "Ridges", size: "wide"},
    {src: "/photos/03.jpg", alt: "Curve grain", size: "sm"},
    {src: "/photos/04.jpg", alt: "Shell form", size: "md"},
    {src: "/photos/05.jpg", alt: "Texture macro", size: "sm"},
    {src: "/photos/06.jpg", alt: "Smoke study", size: "md"},
    {src: "/photos/07.jpg", alt: "Blade stack", size: "wide"},
    {src: "/photos/08.jpg", alt: "Edge", size: "lg"},
    {src: "/photos/09.jpg", alt: "Chiseled", size: "md"},
] satisfies TileItem[];

export default function Photos() {
    return (
        <div
            id="photos"
            className="relative min-h-screen overflow-hidden"
        >
            <PageTransition/>

            <Hero
                routes={[{text: "Home", href: "/"}, {text: "Photos"}]}
                backgroundClass="bg-[url('/photos-bg.png')] bg-top"
                title={"Photos"}
                description={"Exploring potential to grow and create impact."}
                customOverlayClass={"from-[#FFFFFF] to-[#FFFFFF00]"}
            />

            <section className="w-full 2xl:px-28 lg:px-20 px-4 2xl:py-20 lg:py-16 py-12 bg-white">
                {/*<Gallery*/}
                {/*    images={images}*/}
                {/*    columns={3}*/}
                {/*    aspect="landscape"*/}
                {/*    gap="gap-3 md:gap-4"*/}
                {/*/>*/}
                <MetroGallery tiles={tiles}/>
            </section>
        </div>
    )
}