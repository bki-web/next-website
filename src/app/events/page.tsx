"use client";
import { Suspense } from "react";
import PageTransition from "@/components/page-transition";
import LoadingStateArticle from "@/components/LoadingState";
import EventList from "./components/EventList";

export default function Events() {


  return (
      <div id="articles" className="pb-12 relative w-full min-h-screen overflow-hidden">
      <PageTransition />
  
      {/* background image */}
      <div className=" h-[50vh] bg-[url('/bg-events.jpg')] bg-cover"></div>
      {/* linear orange gradient overlay */}
      <div className="absolute top-0 inset-0 h-[20vh] bg-gradient-to-t from-[#0A436A00] to-[#000000]"></div>
      {/* linear white gradient overlay */}
      <div className="absolute top-[30vh] inset-0 h-[20vh] bg-gradient-to-t from-[#ffffff] to-[#ffffff00]"></div>
      {/* white background */}
      <div className="absolute top-[50vh] inset-0 h-[100vh] bg-white"></div>
  
      <div className="mt-[-35rem] md:mt-[-20rem] w-full relative z-10">
        {/* Articles */}
        <div className="container mx-auto px-4 lg:px-0 flex flex-col gap-2">
          {/* Title */}
          <h2 className="text-[5vw] md:text-[2.5vw] font-medium mb-8 text-white">Events</h2>
          <Suspense fallback={<LoadingStateArticle />}>
            <EventList />
          </Suspense>
        </div>
      </div>
      </div>
    )
}
