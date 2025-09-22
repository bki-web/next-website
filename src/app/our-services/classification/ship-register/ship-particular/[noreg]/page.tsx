// FILE: app/our-services/classification/ship-register/[noreg]/page.tsx

import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ShipParticularContent } from "../components/ShipParticularContent";
import DownloadPDF from "../components/DownloadPDF";

import { trpc } from "@/trpc/server";
import { formatResult } from "@/utils/replacer";

export default async function ShipParticular({
  params,
}: {
  params: Promise<{ noreg: string }>; // The param promise resolves automatically
}) {
  const { noreg } = await params;

  // 2. Fetch all data in parallel on the server
  const [
    shipDetailResult,
    hullDataResult,
    machineDataResult,
    ownerDataResult,
    surveyDataResult,
  ] = await Promise.all([
    trpc.shipRegister.getDetail(noreg),
    trpc.shipRegister.getHullData(noreg),
    trpc.shipRegister.getMachineData(noreg),
    trpc.shipRegister.getOwnerData(noreg),
    trpc.shipRegister.getSurveyData(noreg),
  ]);

  const shipDetail = formatResult(shipDetailResult);
  const hullData = formatResult(hullDataResult);
  const machineData = formatResult(machineDataResult);
  const ownerData = formatResult(ownerDataResult);
  const surveyData = formatResult(surveyDataResult);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Hero
        routes={[
          { text: "Home", href: "/" },
          { text: "Services", href: "/our-services" },
          { text: "Classification", href: "/our-services#classification" },
          { text: "Ship Register", href: "/our-services/classification/ship-register" },
          { text: "Ship Particular" },
        ]}
        backgroundClass="bg-[url('/hero-background.jpg')] bg-top"
        title={"Ship Particular"}
        innerComponent={<DownloadPDF noreg={noreg} />}
      />
      <section className="w-full flex flex-col lg:py-5 py-2.5 lg:px-24 px-4 lg:gap-y-5 gap-y-2.5 bg-[#E2E7F0]">
        <Link
          href={"/our-services/classification/ship-register"}
          className="flex items-center gap-2 cursor-pointer transition-colors duration-500 rounded-lg hover:bg-[#0A436A]/10 w-fit px-2"
        >
          <ArrowLeft className="text-[#0A436A]" />
          <p className="text-[#0A436A] lg:text-xl text-base font-semibold">
            Back
          </p>
        </Link>
        {/* 3. Pass all fetched data down as props */}
        <ShipParticularContent
          shipDetail={shipDetail}
          hullData={hullData}
          machineData={machineData}
          ownerData={ownerData}
          surveyData={surveyData}
        />
      </section>
    </div>
  );
}