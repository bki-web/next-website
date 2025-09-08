import Image from "next/image";
import Newsletter from "./Newsletter";
import NewsCard from "./NewsCard";
import FancyTitle from "./FancyTitle";
import { NewsStrapi } from "@/types/news";

export function NewsDivider() {
  return <div className="w-full h-1 bg-[#00385A]"></div>;
}

export default async function NewsSection2() {
  const data = (await fetch(
      process.env.STRAPI_API_URL || "https://unwavering-card-a95a991f83.strapiapp.com/api" +
        "/newss?populate=cover&pagination[page]=1&pagination[pageSize]=3"
    ).then((response) => response.json())) as { data: NewsStrapi[] };

  return (
    <section
      className="px-6 md:px-24 py-12 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #00385A 0%, transparent 100%), url('/news-bg.jpg')",
        backgroundPosition: "center top",
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-6 bg-[#00385A] bg-opacity-25 border-2 border-white border-opacity-50 rounded py-4 px-6 mb-10 relative -top-6">
        <div className="pl-2 font-medium text-2xl md:text-4xl w-full md:w-1/3 text-center md:text-left">
          What are you looking for?
        </div>
        <input
          type="text"
          placeholder="Type something here"
          className="w-full bg-transparent outline-none px-2 border-b border-white text-lg md:text-3xl placeholder:text-lg md:placeholder:text-3xl"
        />
        <button className="w-full md:w-auto px-4 py-2 bg-[#0A436A] border border-white cursor-pointer rounded hover:bg-[#0A436A]/50">
          Search
        </button>
      </div>
      <h1 className="text-white text-5xl md:text-6xl font-bold mb-2">
        <FancyTitle title="BKI Updates"/>
      </h1>
      <h2 className="text-white text-2xl md:text-3xl font-medium mb-8">
        Top News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(data?.data || []).map((n, i) => (
          <NewsCard key={i} news={n} />
        ))}
      </div>
      <Newsletter />
      
    </section>
  );
}
