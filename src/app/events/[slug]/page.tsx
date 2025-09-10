"use client";
import {Calendar, MapPin} from "lucide-react";
import Image from "next/image";
import PageTransition from "@/components/page-transition";
import {trpc} from "@/trpc/react";
import {use} from "react";
import {Skeleton} from "@/components/ui/skeleton";
import {match} from "ts-pattern";
import Link from "next/link";

export default function Event({
                                  params,
                              }: {
    params: Promise<{ slug: string }>;
}) {
    const {slug} = use(params);
    const {data, isLoading} = trpc.event.getDetail.useQuery({
        id: slug,
    });

    return (
        <div
            id="articles"
            className="pb-12 w-full min-h-screen overflow-hidden bg-white"
        >
            <PageTransition/>
            <div className="relative w-full h-[400px] lg:h-[550px] px-4 md:px-24">
                <Image
                    src="/thumbnail-article.jpg"
                    alt="thumbnail-article"
                    fill
                    className="object-cover"
                />
                <div
                    className="absolute top-0 inset-0 h-[400px] lg:h-[550px] bg-gradient-to-t from-[#0A0C67] to-[#0a446a00] backdrop-filter-[blur(10px)]"></div>
                <div className="relative container pt-8 flex flex-col gap-2 text-white h-full w-1/2 justify-center">
                    {/* Breadcrumb */}
                    <h3 className="text-[4vw] md:text-4xl font-medium mb-2">
                        <Link href="/events">Events</Link> /{" "}
                        {match(isLoading)
                            .with(true, () => <Skeleton className="w-96 h-6"/>)
                            .with(false, () => (
                                <span className="text-white/50 truncate">
                  {data?.data.title.slice(0, 20)}...
                </span>
                            ))
                            .exhaustive()}
                    </h3>
                    {/* Title */}
                    <h1 className="text-[4vw] md:text-6xl font-medium mb-4">
                        {data?.data.title}
                    </h1>
                    {/* Author & Date */}
                    {/* <div className="flex flex-col md:flex-row items-start gap-4 text-white text-[3vw] md:text-[2.2vw] lg:text-[1.4vw] font-medium">
            <div className="flex justify-center items-center gap-2 font-medium">
              <Image src="/avatar.png" alt="Organizer" width={32} height={32} />
              <span>BKI Event Organizer</span>
            </div>
            <span className="ml-2 md:ml-0">18-20 August 2025</span>
          </div> */}
                </div>
            </div>

            {isLoading && <Skeleton className="w-full h-96"/>}

            {!isLoading && (
                <div className="relative mt-[-1.7rem] md:mt-[-3.4rem] lg:mt-[-5rem] w-full flex justify-center">
                    <div
                        className="container mx-auto px-4 lg:px-0 flex flex-col md:flex-row gap-8 text-white items-start justify-center">
                        {/* Right column: Event Info, sticky on desktop, on top on mobile */}
                        <div className="w-full md:w-auto order-1 md:order-2">
                            <div
                                className="md:sticky md:top-8 max-w-full lg:max-w-[650px] h-fit bg-white/10 rounded-md p-1 backdrop-filter-[blur(10px)] shadow-md text-white mx-2 md:mx-4 lg:mx-0">
                                <div
                                    className="h-full py-8 px-4 bg-gradient-to-t from-[#0A436A70] to-[#00000070] rounded-md flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4"/>
                                        <span className="text-[3vw] md:text-[1.7vw] lg:text-[1vw] font-medium">
                      Time
                    </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[3vw] md:text-[1.8vw] lg:text-[1.4vw] font-medium">
                                            {data?.data.startDate} - {data?.data.endDate || data?.data.startDate}
                                        </p>
                                        {/* <p className="text-[3vw] md:text-[1.8vw] lg:text-[1.4vw] font-medium">
                      08:00 - 17:00
                    </p> */}
                                    </div>
                                    <div className="h-0.5 bg-white/20 my-4"/>
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4"/>
                                        <span className="text-[3vw] md:text-[1.7vw] lg:text-[1vw] font-medium">
                      Location
                    </span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-[3vw] md:text-[1.8vw] lg:text-[1.4vw] font-medium">
                                            {data?.data.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Left column: Large Thumbnail and Description */}
                        <div className="flex flex-col gap-6 w-full order-2 md:order-1">
                            <div className="bg-white/10 p-2 rounded-md backdrop-filter-[blur(10px)]">
                                <Image
                                    src={data?.data.cover.formats.large.url || "/our-services-bki-others.jpg"}
                                    alt="Large Thumbnail"
                                    width={1259}
                                    height={719}
                                />
                            </div>
                            <p
                                dangerouslySetInnerHTML={{__html: data?.data.blocks[0].body || ""}}
                                className="text-[4vw] md:text-[1.5vw] lg:text-[1.4vw] font-medium whitespace-pre-wrap text-slate-800"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
