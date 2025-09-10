"use client";

import {use, useRef} from "react";
import Image from "next/image";
import {trpc} from "@/trpc/react";
import {format} from "date-fns";
import {Skeleton} from "@/components/ui/skeleton";
import Link from "next/link";
import PageTransition from "@/components/page-transition";

export default function Article({
                                    params,
                                }: {
    params: Promise<{ slug: string }>;
}) {
    const {slug} = use(params);
    const {data, isLoading} = trpc.article.getDetail.useQuery({
        id: slug,
    });
    const newsRef = useRef<HTMLDivElement | null>(null);

    // const keepUpdated = [
    //   {
    //     title: "New Research Vessel For Marine Science In SA",
    //     image: "/keep-update-1.png",
    //     link: "/articles/new-research-vessel-for-marine-science-in-sa",
    //   },
    //   {
    //     title: "New Research Vessel For Marine Science In SA",
    //     image: "/keep-update-2.png",
    //     link: "/articles/new-research-vessel-for-marine-science-in-sa",
    //   },
    //   {
    //     title: "New Research Vessel For Marine Science In SA",
    //     image: "/keep-update-3.png",
    //     link: "/articles/new-research-vessel-for-marine-science-in-sa",
    //   },
    // ]

    return (
        <div
            id="news"
            ref={newsRef}
            className="pb-12 w-full min-h-screen flex flex-col items-center justify-center relative bg-white"
        >
            {/* INTRO overlay (your multi-gradient) → fades out as before */}
            <PageTransition/>
            <div className="relative w-full h-[400px] lg:h-[550px]">
                <Image
                    src="/thumbnail-article.jpg"
                    alt="thumbnail-article"
                    fill
                    className="object-cover"
                />
                <div
                    className="absolute top-0 inset-0 h-[400px] lg:h-[550px] bg-gradient-to-t from-[#0A0C67] to-[#0a446a00] backdrop-filter-[blur(10px)]"></div>

                <div
                    className="relative container mx-auto px-4 pt-8 lg:px-0 flex flex-col gap-2 text-white h-full w-full justify-center">
                    {/* Breadcrumb */}
                    <h3 className=" text-[4vw] md:text-4xl font-medium mb-2">
                        <Link href={'/articles'}>Article</Link> /{" "}
                        <span className="text-white/50 truncate">
              {data?.data.title.slice(0, 20)} ...
            </span>
                    </h3>
                    {/* Title */}
                    <div className="text-xl md:text-2xl xl:text-4xl 2xl:text-5xl font-medium mb-4">
                        {data?.data.title}
                    </div>

                    {/* Author & Date */}
                    <div
                        className="flex flex-col md:flex-row items-start gap-4 text-white text-[3vw] md:text-[2.2vw] lg:text-[1.4vw] font-medium">
                        {/* Author */}
                        {/* <div className="flex justify-center items-center gap-2 font-medium">
              <Image src="/avatar.png" alt="Author" width={32} height={32} />
              <span>Redaktur Ferry Napitupulu</span>
            </div> */}
                        {/* Date */}
                        <span className="ml-2 md:ml-0">
              {format(
                  data?.data.publishedAt || new Date(),
                  "dd MMM yyyy, HH:mm"
              )}
            </span>
                    </div>
                </div>
            </div>

            {isLoading && <Skeleton className="w-full h-96 bg-gray-200"/>}

            {!isLoading && (
                <div className="relative mt-[-1.7rem] md:mt-[-3.4rem] lg:mt-[-5rem] w-full flex justify-center">
                    <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-2 text-white items-center">
                        {/* Large Thumbnail */}
                        <div className="bg-white/10 p-2 rounded-md backdrop-filter-[blur(10px)]">
                            <Image
                                src={data?.data.cover.formats.large?.url || data?.data.cover.formats.medium?.url || "/our-services-bki-others.jpg"}
                                alt="Large Thumbnail"
                                width={1259}
                                height={719}
                            />
                        </div>

                        {/* Article */}
                        <div className="flex flex-col md:flex-row gap-8 p-4 items-start justify-center">
                            {/* Article Text */}
                            <div className="w-full md:w-[60vw] ">
                                <p
                                    dangerouslySetInnerHTML={{__html: data?.data?.blocks[0].body || ""}}
                                    className="text-[4vw] md:text-[1.5vw] lg:text-[1.4vw] font-medium text-slate-800 whitespace-pre-wrap"
                                />
                            </div>
                            {/* Keep Updated */}
                            {/* <div className="sticky top-[105px] shadow-md rounded-md w-[350px] md:w-[450px] p-4 h-fit ">
              <h3 className="mb-4 text-[6vw] md:text-[2.8vw] lg:text-[2.5vw] font-bold text-slate-800">BKI Updates</h3>
              <div className="flex flex-col gap-8 overflow-y-auto">
                {keepUpdated.map((item, idx) => (
                  <div key={idx} className="relative w-[300px] md:w-[400px] h-[200px] bg-gradient-to-t from-[#0A0C67] to-[#0A436A]">
                    <Image src={item.image} alt={item.title} width={400} height={200} />
                    <span className="block p-4 w-full relative text-[4vw] md:text-[2vw] lg:text-[1.6vw] font-bold text-white bottom-[60px] md:bottom-[70px] lg:bottom-[100px]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
