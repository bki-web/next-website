"use client"; // This must be a client component to use Framer Motion

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import PageTransition from "@/components/page-transition";
import Image from "next/image";
import DownloadButton from "../company-profile/components/download-button";
import SimpleTable from "../our-services/classification/ship-register/ship-particular/components/SimpleTable";
import TableAnnualReport from "./components/Table";

export default function Page() {
  return (
    <div className="w-full min-h-screen">
      <PageTransition />

      <Hero
        routes={[{ text: "Home", href: "/" }, { text: "Annual Report" }]}
        backgroundClass="bg-[url('/company-profile-bg.png')] bg-top"
        title={"Annual Report"}
        description={
          "A comprehensive overview of our company's performance and achievements over the past year."
        }
      />
      <section className="px-6 md:px-24 bg-white py-20">
        <div>
          <section className="flex flex-col lg:flex-row items-center justify-center  text-black">
            {/* Left Column (Text) */}
            <div className="lg:w-1/2 p-4 flex flex-col gap-6">
              <div className="text-gray-600">Latest Annual Report</div>
              <h2 className="text-4xl font-bold mb-4 text-bki-blue md:text-5xl">
                BKI Annual Report 2023 is here!
              </h2>
              <div className="text-lg">
                This report provides a comprehensive overview of our company&apos;s
                performance and achievements over the past year.
              </div>
              <div>
                <DownloadButton
                  link={
                    "https://www.bki.co.id/file_download/552466Compro%20BKI%202021%20210522%20.pdf"
                  }
                  className="bg-[#0A436A] hover:bg-[#0A436A]/60 hover:transition hover:duration-150 hover:ease-in-out"
                  label="Download"
                />
              </div>
            </div>

            {/* Right Column (Image) */}
            <div className="lg:w-1/2 flex justify-center p-4">
              <motion.div
                // Floating animation
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                // 3D hover effect
                // whileHover={{ scale: 1.2 }}
                // whileTap={{ scale: 0.8 }}
                className="relative"
              >
                <Image
                  src="/cover-annual-report-2023.jpg"
                  alt="Cover of the Annual Report 2023"
                  width={500}
                  height={300}
                  className="h-auto"
                />
              </motion.div>
            </div>
          </section>
        </div>
      </section>
      <TableAnnualReport />
    </div>
  );
}
