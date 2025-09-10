import Newsletter from "./Newsletter";
import NewsCard from "./NewsCard";
import FancyTitle from "./FancyTitle";
import {NewsStrapi} from "@/types/news";
import SearchBar from "@/components/SearchBar";

export function NewsDivider() {
    return <div className="w-full h-1 bg-[#00385A]"></div>;
}

export default async function NewsSection2() {
    const url =
        (process.env.STRAPI_API_URL ||
            "https://unwavering-card-a95a991f83.strapiapp.com/api") +
        "/newss?populate=cover&pagination[page]=1&pagination[pageSize]=3";
    const data = (await fetch(url).then((response) => response.json())) as {
        data: NewsStrapi[];
    };

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
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
                <FancyTitle title="BKI Updates"/>
            </h1>
            <h2 className="text-white text-xl md:text-3xl font-medium mb-8">
                Top News
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(data?.data || []).map((n, i) => (
                    <NewsCard key={i} news={n}/>
                ))}
            </div>
            <Newsletter/>

        </section>
    );
}
