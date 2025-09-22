"use client";
import Newsletter from "./Newsletter";
import NewsCard from "./NewsCard";
import FancyTitle from "./FancyTitle";
// import {NewsStrapi} from "@/types/news";
import SearchBar from "@/components/SearchBar";
// import { STRAPI_URL } from "@/utils/strapi";
import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "@/app/news/actions";

export function NewsDivider() {
    return <div className="w-full h-1 bg-[#00385A]"></div>;
}

export default function NewsSection2() {
    // const url =
    //     STRAPI_URL +
    //     "/newss?populate=cover&pagination[page]=1&pagination[pageSize]=3";
    // const data = (await fetch(url).then((response) => response.json())) as {
    //     data: NewsStrapi[];
    // };

    const currentPage = 1
    const { data } = useQuery({
        // The query key uniquely identifies this query's data
        queryKey: ["news", currentPage, 3],
        // The query function that returns a Promise
        queryFn: () => fetchNews(currentPage, 3),
    });


    return (
        <section
            className="px-6 md:px-24 py-12 bg-cover bg-center text-white"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, #00385A 0%, transparent 100%), url('/news-bg.jpg')",
                backgroundPosition: "center top",
            }}
        >
            <SearchBar/>
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-8">
                <FancyTitle title="BKI Updates"/>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(data?.data || []).map((n, i) => (
                    <NewsCard key={i} news={n}/>
                ))}
            </div>
            <Newsletter/>

        </section>
    );
}
