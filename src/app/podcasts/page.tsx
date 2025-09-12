import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import VideoGallery from "@/app/podcasts/components/VideoGallery";
import {getYouTubeThumb} from "@/utils/youtube";

const clips = [
    {
        src: "https://youtu.be/cFO9t32s7Jo?si=zAReDudLp38P_x6M",
        thumb: getYouTubeThumb("https://youtu.be/cFO9t32s7Jo?si=zAReDudLp38P_x6M", "hq"),
        label: "Hongkong Convention Entry Into Force. Apa yang perlu disiapkan?",
    },
    {
        src: "https://youtu.be/1y7dCpkhAVc?si=z-a63JgK9rYWaJbR",
        thumb: getYouTubeThumb("https://youtu.be/1y7dCpkhAVc?si=z-a63JgK9rYWaJbR", "hq"),
        label: "Win The Ocean Podcast: Pentingnya Load Lines dan Stabilitas Kapal",
    },
    {
        src: "https://youtu.be/SZtXSnrlxy0?si=ZPx9QrB8uJ96XXXk",
        thumb: getYouTubeThumb("https://youtu.be/SZtXSnrlxy0?si=ZPx9QrB8uJ96XXXk", "hq"),
        label: "Pentingnya Keselamatan Kapal Pengangkut Kendaraan (termasuk EV)",
    },
    {
        src: "https://youtu.be/auz4ClUCpkI?si=0Zx8QHkZP2GlupJX",
        thumb: getYouTubeThumb("https://youtu.be/auz4ClUCpkI?si=0Zx8QHkZP2GlupJX", "hq"),
        label: "Pentingnya Sistem Instalasi Perpipaan Dalam Menjamin Keselamatan",
    },
    {
        src: "https://youtu.be/3jZsDEamiFE?si=pjC5gvY2XXatqgyb",
        thumb: getYouTubeThumb("https://youtu.be/3jZsDEamiFE?si=pjC5gvY2XXatqgyb", "hq"),
        label: "Sertifikasi Bengkel Las Untuk Memastikan Keamanan Sebuah Kapal",
    },
    {
        src: "https://youtu.be/K8h9V8tR0nQ?si=PrZnHBssSG2tzftl",
        thumb: getYouTubeThumb("https://youtu.be/K8h9V8tR0nQ?si=PrZnHBssSG2tzftl", "hq"),
        label: "Pentingnya Mengantisipasi Kelebihan Muatan Kapal Dengan Verified Gross Mass",
    },
    {
        src: "https://youtu.be/pazgCIqcMYM?si=lUvabpDjzdvONux6",
        thumb: getYouTubeThumb("https://youtu.be/pazgCIqcMYM?si=lUvabpDjzdvONux6", "hq"),
        label: "Fenomena Kapal Listrik Dalam Perkembangan Maritim",
    },
    {
        src: "https://youtu.be/NLWY-XWflnk?si=4ySz4QNiSx-tIfAi",
        thumb: getYouTubeThumb("https://youtu.be/NLWY-XWflnk?si=4ySz4QNiSx-tIfAi", "hq"),
        label: "Cegah Risiko Kecelakaan Untuk Kapal Domestik",
    },
    {
        src: "https://youtu.be/SHmrogNFhcI?si=inJK-lbgTqVdDsS-",
        thumb: getYouTubeThumb("https://youtu.be/SHmrogNFhcI?si=inJK-lbgTqVdDsS-", "hq"),
        label: "Pengenalan Resiko Kecelakaan Kapal",
    },
    {
        src: "https://youtu.be/S-y1fJ6D_1g?si=0EcqOgF9mlO8w9EU",
        thumb: getYouTubeThumb("https://youtu.be/S-y1fJ6D_1g?si=0EcqOgF9mlO8w9EU", "hq"),
        label: "Penerapan Novel Concept dalam desain konstruksi kapal",
    },
    {
        src: "https://youtu.be/PTntBqjcpbI?si=2Lx03pmyotPRQHCG",
        thumb: getYouTubeThumb("https://youtu.be/PTntBqjcpbI?si=2Lx03pmyotPRQHCG", "hq"),
        label: "Pentingnya Pengawasan Dalam Pembangunan Kapal",
    },
    {
        src: "https://youtu.be/4AKx17dY8lo?si=5B89RsMsUW81Qy0j",
        thumb: getYouTubeThumb("https://youtu.be/4AKx17dY8lo?si=5B89RsMsUW81Qy0j", "hq"),
        label: "Nilai Ekonomi Karbon (NEK) untuk Pelaku Bisnis di Indonesia",
    },
    {
        src: "https://youtu.be/nwcYRCZlgjc?si=iH_G25rQt640dezn",
        thumb: getYouTubeThumb("https://youtu.be/nwcYRCZlgjc?si=iH_G25rQt640dezn", "hq"),
        label: "Hasil sidang IMO MSC 107 tahun 2023 tentang Autonomous Ship",
    },
    {
        src: "https://youtu.be/kKUFA7sUf7s?si=gew7N5vsBL8HA3Xi",
        thumb: getYouTubeThumb("https://youtu.be/kKUFA7sUf7s?si=gew7N5vsBL8HA3Xi", "hq"),
        label: "Pemeriksaan Gambar (Hull Construction) di BKI",
    },
    {
        src: "https://youtu.be/0MIpdSVSwJ4?si=poocgxhqsjbcSmus",
        thumb: getYouTubeThumb("https://youtu.be/0MIpdSVSwJ4?si=poocgxhqsjbcSmus", "hq"),
        label: "Amandemen Instrumen Wajib IMO 2023",
    },
    {
        src: "https://youtu.be/pzYQgPtkrqY?si=qPd25d4lZrHx-N66",
        thumb: getYouTubeThumb("https://youtu.be/pzYQgPtkrqY?si=qPd25d4lZrHx-N66", "hq"),
        label: "Mengenal Dekarbonisasi",
    },
    {
        src: "https://youtu.be/HNP9XqhSVNs?si=NJtedkXgHABm33Bd",
        thumb: getYouTubeThumb("https://youtu.be/HNP9XqhSVNs?si=NJtedkXgHABm33Bd", "hq"),
        label: "2nd Generation Intact Stability",
    },
    {
        src: "https://youtu.be/mybYiSPiPDQ?si=-CA4CasxGvMsphRR",
        thumb: getYouTubeThumb("https://youtu.be/mybYiSPiPDQ?si=-CA4CasxGvMsphRR", "hq"),
        label: "Kapal Berbahan Plastik Solusi Permasalahan Lingkungan?",
    },
    {
        src: "https://youtu.be/YOSQ3ywETiY?si=I2RilQUOQuWJdv5o",
        thumb: getYouTubeThumb("https://youtu.be/YOSQ3ywETiY?si=I2RilQUOQuWJdv5o", "hq"),
        label: "Net Zero Emission Langkah Dalam Selamatkan Bumi",
    },
    {
        src: "https://youtu.be/O16vV4yCfC0?si=6htro7cIFywrvcR9",
        thumb: getYouTubeThumb("https://youtu.be/O16vV4yCfC0?si=6htro7cIFywrvcR9", "hq"),
        label: "Win The Ocean Podcast: Autonomous Ship (Unmanned Ship), Could It Be?",
    },
    {
        src: "https://youtu.be/fYN5iFWIIpc?si=3pZ8KDcTmwnj_Luy",
        thumb: getYouTubeThumb("https://youtu.be/fYN5iFWIIpc?si=3pZ8KDcTmwnj_Luy", "hq"),
        label: "Amankan Dunia Maritim dari Kejahatan Siber",
    },
    {
        src: "https://youtu.be/71Cuy1NPyWk?si=WcbLs7yuyta7Dd9b",
        thumb: getYouTubeThumb("https://youtu.be/71Cuy1NPyWk?si=WcbLs7yuyta7Dd9b", "hq"),
        label: "Win The Ocean Podcast Ep.4 - Penerapan dual fuel terhadap moda transportasi laut",
    },
    {
        src: "https://youtu.be/vv-eEmYK16o?si=QHPBHHnO-8AOUo3j",
        thumb: getYouTubeThumb("https://youtu.be/vv-eEmYK16o?si=QHPBHHnO-8AOUo3j", "hq"),
        label: "Bagaimana Aturan Proses Pemeriksaan Kapal yang Singgah di Pelabuhan? (Port State Control)",
    },
    {
        src: "https://youtu.be/_Q67pT8DZRg?si=qdTEr2wkxzGHAiiM",
        thumb: getYouTubeThumb("https://youtu.be/_Q67pT8DZRg?si=qdTEr2wkxzGHAiiM", "hq"),
        label: "Win The Ocean Podcast Ep.2 – Aturan Ship Recycling di Indonesia",
    },
    {
        src: "https://youtu.be/9fI6a8eoro0?si=O6AWn-u7pPM-FLPu",
        thumb: getYouTubeThumb("https://youtu.be/9fI6a8eoro0?si=O6AWn-u7pPM-FLPu", "hq"),
        label: "Win The Ocean Podcast Ep.1 – Win the Ocean melalui Kolaborasi & Layanan Prima",
    },
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

            <section className="w-full 2xl:px-28 xl:px-24 lg:px-20 px-4 2xl:py-20 lg:py-16 py-12 bg-white">
                <VideoGallery videos={clips} columns={3} aspect="landscape"/>
            </section>
        </div>
    )
}