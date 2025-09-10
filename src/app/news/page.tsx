import PageTransition from "@/components/page-transition";
import HeroPublication from "@/components/HeroPublication";
import {Suspense} from "react";
import LoadingStateArticle from "../../components/LoadingState";
import NewsList from "./components/NewsList";

export default function News() {

    return (
        <div
            id="news"
            className="relative w-full overflow-hidden bg-white"
        >
            <PageTransition/>
            <HeroPublication
                backgroundClass="bg-[url('/bg-news.jpg')] bg-center"
                title={"News"}
            />
            <Suspense fallback={<LoadingStateArticle/>}>
                {/* {news.map((item, index) => (
            <NewsCard key={index} news={{...item, id: crypto.randomUUID()}} hasShadow={true}  rounded={true}/>
          ))} */}
                <NewsList/>
            </Suspense>
        </div>
    );
}
