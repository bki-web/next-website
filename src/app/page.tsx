import HeroSection from "@/components/HeroSection";
import WhyTrustSection from "@/components/WhyTrustSection";
import WhyCrossfade from "@/components/WhySnap";
import ArticleSection from "@/components/ArticleSection";
import NewsSection2, { NewsDivider } from "@/components/NewsSection2";
import OurServicesSection from "@/components/OurServicesSection";
import Head from "next/head";
import { HydrateClient, trpc } from "@/trpc/server";
import { ClientGreeting } from "./ClientGreetings";

// export default function Home() {
//   return (
//     <>
//     <Head>
//       <link rel="preload" href="/hero-banner-bki.mp4" as="video"/>
//     </Head>
//     <main className="min-h-screen">
//       <HeroSection />
//       <OurServicesSection />
//       <WhyTrustSection />
//       <WhyCrossfade />
//       <ArticleSection />
//       <NewsDivider />
//       <NewsSection2 />
//     </main>
//     </>
//   );
// }

export default async function Home() {
  void trpc.hello.prefetch({text: "aaaaa"});
  return (
    <HydrateClient>
      <div>...</div>
      {/** ... */}
      <ClientGreeting />
    </HydrateClient>
  );
}
