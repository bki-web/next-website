import NewsList from "@/app/news/components/NewsList";
import LoadingStateArticle from "@/components/LoadingState";
import {Suspense} from "react";

export default function NewsSection() {
    return (
        <section
            className="w-full h-full 2xl:p-24 lg:p-16 p-8 !pt-0 flex flex-col justify-center items-center bg-white 2xl:gap-8 md:gap-7 gap-6">
            <div className="w-full flex flex-col 2xl:gap-6 md:gap-5 gap-4">
                <p className="2xl:text-6xl md:text-5xl text-4xl font-bold text-[#0A436A]">
                    BKI Updates
                </p>
                <p className="2xl:text-5xl nd:text-4xl text-3xl text-[#0A436A]">
                    Top News
                </p>
            </div>
            <Suspense fallback={<LoadingStateArticle/>}>
                <NewsList className="flex top-0 md:top-0 px-0 md:px-0" limit={3} hidePagination={true}/>
            </Suspense>
        </section>
    );
}
