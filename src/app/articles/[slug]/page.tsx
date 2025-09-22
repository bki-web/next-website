"use client";

import {use, useRef} from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import PageTransition from "@/components/page-transition";
import { getCoverUrl, STRAPI_URL } from "@/utils/strapi";
import { useQuery } from "@tanstack/react-query";
import { fetchArticleDetails } from "../actions";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import ReadingProgress from "@/components/ReadingProgress";
import {motion, useScroll, useTransform} from "framer-motion";

export default function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  // const {data, isLoading} = trpc.article.getDetail.useQuery({
  //     id: slug,
  // });
  const { data, isLoading } = useQuery({
    // The query key uniquely identifies this query's data
    queryKey: ["articles", slug],
    // The query function that returns a Promise
    queryFn: () => fetchArticleDetails(slug),
  });
  const newsRef = useRef<HTMLDivElement | null>(null);

    const {scrollYProgress} = useScroll({
        target: newsRef,
        offset: ["start start", "end start"], // 0 at top, 1 at bottom of hero
    });
    // video moves slower upward
    const thumbnailY = useTransform(scrollYProgress, [0, 1], [0, 240]);

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

  const coverUrl = getCoverUrl(data?.data.cover.formats);

  const bodyText =
    data?.data?.blocks.find((prop) => prop.__component === "shared.rich-text")
      ?.body || "";

  const downloadButton = () => {
    const files = data?.files || [];
    if (files.length < 1) {
      alert("File not found");
      return;
    }
    // const fileName = files[0].file.name;
    // const fileUrl = files[0].file.url;
    const link = document.createElement("a");
    link.href = STRAPI_URL.replace("/api", "") + files[0].file.url;
    link.target = "_blank"; // This is the key change

    // Append the link to the body
    document.body.appendChild(link);

    // Programmatically click the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <>
        <div
            id="news"
            ref={newsRef}
            className="pb-12 w-full min-h-screen flex flex-col items-center justify-center relative bg-white"
        >
            {/* INTRO overlay (your multi-gradient) → fades out as before */}
            <PageTransition />

            <section
                className="w-full h-screen flex flex-col items-start justify-end 2xl:px-28 xl:px-24 lg:px-20 px-4 2xl:py-40 lg:py-32 py-12 relative">
                <motion.div
                    className="absolute inset-0"
                    style={{y: thumbnailY, willChange: "transform"}}
                >
                    <Image
                        src={coverUrl}
                        alt="Large Thumbnail"
                        width={1259}
                        height={719}
                        className={`w-full h-full object-cover transition-all duration-1000 blur-0 scale-100`}
                    />
                </motion.div>
                <motion.div
                    className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0),rgba(0,0,0,0)_40%,rgba(10,67,106,0.5)_65%,#0A436A)]"
                    style={{y: thumbnailY, willChange: "transform"}}
                />
                <motion.div
                    initial={{opacity: 0, y: 15}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut", delay: 0.1}}
                    className="flex flex-row justify-center items-center gap-2 z-1"
                >
                    <Link href={'/articles'} className="md:text-lg 2xl:text-xl">
                        Articles
                    </Link>
                    <span className="md:text-lg 2xl:text-xl">
                                    /
                                </span>
                    <span className="md:text-lg 2xl:text-xl text-[#ffffff75] truncate">
                                    {data?.data.title.slice(0, 30)} ...
                                </span>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 15}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut", delay: 0.5}}
                    className="z-1"
                >
                    <p className="mt-6 text-xl md:text-2xl 2xl:text-3xl font-semibold">
                        {data?.data.title}
                    </p>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 15}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut", delay: 1.0}}
                    className="z-1"
                >
                    <p className="mt-9 text-md md:text-lg 2xl:text-xl max-w-4/5">
                        {data?.data.description}
                    </p>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, y: 15}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: "easeOut", delay: 1.5}}
                    className="mt-9 z-1"
                >
                    <button
                        onClick={downloadButton}
                        className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-base sm:text-lg md:text-xl xl:text-3xl font-light text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 cursor-pointer"
                    >
                        Download full publication [PDF]
                        <span className="ml-2">→</span>
                    </button>
                </motion.div>
            </section>

            {isLoading && <Skeleton className="w-full h-96 bg-gray-200" />}

            {!isLoading && (
                <div className="relative w-full flex justify-center">
                    <div className="container mx-auto px-4 lg:px-0 py-12 lg:py-28 flex flex-col gap-2 bg-white items-center rounded-sm">
                        {/* Large Thumbnail */}
                        {/*<div className="bg-white/10 p-2 rounded-md backdrop-filter-[blur(10px)]">*/}
                        {/*    <Image*/}
                        {/*        src={coverUrl}*/}
                        {/*        alt="Large Thumbnail"*/}
                        {/*        width={1259}*/}
                        {/*        height={719}*/}
                        {/*    />*/}
                        {/*</div>*/}

                        {/* Article */}
                        <div className="flex flex-col md:flex-row gap-8 p-4 items-start justify-center">
                            {/* Article Text */}
                            <div className="w-full px-12 xl:px-28 lg:px-24">
                                <div
                                    className="text-base lg:text-lg font-medium text-slate-800 whitespace-pre-wrap"
                                >
                                    <MarkdownRenderer content={bodyText} className="" />
                                </div>
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
        <ReadingProgress targetRef={newsRef} />
    </>
  );
}
