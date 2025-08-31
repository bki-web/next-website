import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import { ShipParticularContent } from "../components/ShipParticularContent";
import DownloadPDF from "../components/DownloadPDF";

export default async function ShipParticular({
  params,
}: {
  params: Promise<{ noreg: string }>;
}) {
  const { noreg } = await params;
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <PageTransition />

      {/* Hero Section */}
      <Hero
        routes={[
          {
            text: "Home",
            href: "/",
          },
          {
            text: "Services",
            href: "/our-services",
          },
          {
            text: "Classification",
            href: "/our-services#classification",
          },
          {
            text: "Ship Register",
            href: "/our-services/classification/ship-register",
          },
          {
            text: "Ship Particular",
          },
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
        <ShipParticularContent noreg={noreg} />
      </section>
    </div>
  );
}
