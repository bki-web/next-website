import PageTransition from "@/components/page-transition";
import { Suspense } from "react";
import LoadingStateArticle from "../../components/LoadingState";
import ArticleList from "./components/ArticleList";

export default function Articles() {

  return (
    <div id="articles" className="pb-12 relative w-full min-h-screen overflow-hidden">
    <PageTransition />

    {/* background image */}
    <div className=" h-[50vh] bg-[url('/bg-article.jpg')] bg-cover"></div>
    {/* linear orange gradient overlay */}
    <div className="absolute top-0 inset-0 h-[20vh] bg-gradient-to-t from-[#d4a66a06] to-[#d4a66a]"></div>
    {/* linear white gradient overlay */}
    <div className="absolute top-[30vh] inset-0 h-[20vh] bg-gradient-to-t from-[#ffffff] to-[#ffffff00]"></div>
    {/* white background */}
    <div className="absolute top-[50vh] inset-0 h-[100vh] bg-white"></div>

    <div className="mt-[-35rem] md:mt-[-20rem] w-full relative z-10">
      {/* Articles */}
      <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-2">
        {/* Title */}
        <h2 className="text-[5vw] md:text-[2.5vw] font-medium mb-8 text-white">Articles</h2>
        <Suspense fallback={<LoadingStateArticle />}>
          <ArticleList />
        </Suspense>
      </div>
    </div>
    </div>
  )
}