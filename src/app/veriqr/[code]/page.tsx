"use client";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";
import { fetchVerifyQR } from "./actions";
import { COPS_URL } from "@/utils/strapi";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import Image from 'next/image';

export default function Article({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = use(params);
  const { data, isLoading, error } = useQuery({
    // The query key uniquely identifies this query's data
    queryKey: ["qr", code],
    // The query function that returns a Promise
    queryFn: () => fetchVerifyQR(code),
  });

  return (
    <div className="text-white">
      <PageTransition />
      <Hero
        routes={[]}
        backgroundClass="bg-[url('/company-profile-bg.png')] bg-top"
        title={"Detail Sertifikat Permanen"}
        description={"Biro Klasifikasi Indonesia"}
        sectionClassName="!h-[30vh] md:!h-[40vh]"
      />
      <div className="flex items-center bg-white text-black p-2">
        <Image src={"/bki-2.png"} width={64} height={64} alt="logo"/>
        <div className="font-bold text-xl">PT. Biro Klasifikasi Indonesia (Persero)</div>
      </div>
      <iframe
        src={`${COPS_URL}/web/test2.asp?qr=` + code}
        style={{ width: "100%", height: "500px", background: "white" }}
        title="Certificate" // Title is important for accessibility!
        sandbox="allow-scripts allow-same-origin" // Optional: enhances security
      />
    </div>
  );
}
