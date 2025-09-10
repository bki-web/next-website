import WhyTrustSection from "@/components/WhyTrustSection";
import WhyCrossfade from "@/components/WhySnap";
import ArticleSection from "@/components/ArticleSection";
import NewsSection2, {NewsDivider} from "@/components/NewsSection2";
import Head from "next/head";
import TopPage from "@/components/TopPage";

export default function Home() {
    return (
        <>
            <Head>
                <link rel="preload" href="/hero-banner-bki.mp4" as="video"/>
            </Head>
            <main className="min-h-screen">
                <TopPage/>
                <WhyTrustSection/>
                <WhyCrossfade/>
                <ArticleSection/>
                <NewsDivider/>
                <NewsSection2/>
            </main>
        </>
    );
}

