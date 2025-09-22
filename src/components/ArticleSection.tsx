"use client";
import ArticleCardModern from "./ArticleCardModern";
import FancyTitle from "./FancyTitle";
import { useQuery } from "@tanstack/react-query";
import { fetchArticles } from "@/app/articles/actions";
import { Skeleton } from "./ui/skeleton";

export default function ArticleSection() {
    // const data = (await fetch(
    //     STRAPI_URL +
    //     "/articles?populate=cover&pagination[page]=1&pagination[pageSize]=3"
    // ).then((response) => response.json())) as { data: Article[] };
    const currentPage = 1
    const { data, isLoading } = useQuery({
        // The query key uniquely identifies this query's data
        queryKey: ["articles", currentPage, 3],
        // The query function that returns a Promise
        queryFn: () => fetchArticles(currentPage, 3),
    });

    return (
        <section
            className="px-4 py-6 md:px-24 md:py-12 bg-cover text-white relative"
            style={{
                backgroundImage: `linear-gradient(to bottom, #D4A66A 0%, transparent 50%), url('/article-bg.jpg')`,
                backgroundPosition: "top",
            }}
        >
            {/* Bottom gradient overlay for smooth transition to NewsSection2 */}
            <div
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    height: "100px",
                    pointerEvents: "none",
                    background:
                        "linear-gradient(to bottom, transparent 0%, #00385A 100%)",
                    zIndex: 1,
                }}
            />
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-8">
                <FancyTitle title="Knowledge Hub"/>
            </h1>

            <div className="grid relative z-10 grid-cols-1 md:grid-cols-3 gap-6">
                {!isLoading && data?.data?.map((article, i) => (
                    <ArticleCardModern key={i} article={article}/>
                ))}
                {isLoading && [1,2,3].map((article, i) => {
                    return (
                        <Skeleton className="w-full h-96 bg-gray-300" key={i}/>
                    )
                })}
            </div>
        </section>
    );
}
