"use client";

import { encodeNoreg } from "@/lib/utils";
import { Download } from "lucide-react";

export default function DownloadPDF(props: { noreg: string }) {
  const onDownloadClicked = () => {
    const encodedNoreg = encodeNoreg(props.noreg);

    // 2. Construct the final URL
    const url = `${process.env.SHIP_REGISTER_API_URL || "https://www.bki.co.id"}/proxy.php?noreg=${encodedNoreg}`;

    // 3. Open the URL in a new tab
    window.open(url, "_blank");
  };
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onDownloadClicked}
        className="flex items-center lg:gap-4 gap-2 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-base sm:text-lg md:text-xl xl:text-2xl font-light text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 cursor-pointer"
      >
        <Download />
        Download PDF
      </button>
    </div>
  );
}
