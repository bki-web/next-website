import ContactUsSection from "@/components/ContactUsSection";
import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
import DigitalPlatform from "../../components/DigitalPlatform";
import Image from "next/image";
import ThreeItemSection from "../../components/ThreeItemSection";
import { OctagonAlert } from "lucide-react";
import DisclaimerSection from "../../components/Disclaimer";
import CMCInformation from "@/app/our-services/classification/class-maintenance/components/CMCInformation";

const purposeData = [
  {
    title: "Insurance Claims",
    content:
      "Providing evidence of the vessel's compliance status at the time of an incident or accident.",
    imageSrc: "/our-services/program/floating-offshore.png",
  },
  {
    title: "Sale and Purchase (S&P)",
    content:
      "Assuring prospective buyers of the vessel's maintenance and survey history.",
    imageSrc: "/our-services/program/floating-offshore.png",
  },
  {
    title: "Scrapping or Recycling",
    content: " Confirming the vessel's class status prior to its final voyage.",
    imageSrc: "/our-services/program/floating-offshore.png",
  },
  {
    title: "Administrative & Financial Requirements",
    content:
      "Fulfilling due diligence requests from banks, charterers, or other stakeholders.",
    imageSrc: "/our-services/program/floating-offshore.png",
  },
];

const disclaimerContent = [
    {
      question: "Owner's Responsibility",
      answer: 'The owner is fully responsible for the proper use of the issued CMC. BKI is not liable for any losses, damages, or disputes arising from the misuse of the certificate by the owner or any third party.'
    },
    {
      question: 'Validity and Revocation',
      answer: 'If information provided by the applicant is later found to be false or inaccurate, the issued CMC will be considered null and void. This includes, but is not limited to, evidence that the vessel was operated outside its certified navigational limits during the period in question.'
    },
    {
      question: 'Corrections',
      answer: 'BKI will promptly correct and re-issue a CMC at no additional charge if any clerical errors are found to have been made by BKI during the issuance process.'
    },
  ];

export default function ClassMaintenancePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <PageTransition />

      {/* Hero Section */}
      <Hero
        routes={[
          { text: "Home", href: "/" },
          {
            text: "Services",
            href: "/our-services",
          },
          { text: "Classification" },
        ]}
        backgroundClass="bg-[url('/classification-bg.jpg')]"
        title={"Class Maintenance"}
        description={
          "Learn about the process for maintaining a vessel's classification."
        }
      />

      <section className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-8 bg-white flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-8">
        <Image
          src={"/why-trust-slider-2.jpg"}
          alt={"Introduction"}
          width={800}
          height={570}
          className="object-cover lg:h-[35vh] h-[250px] rounded-sm"
        />
        <div className="flex flex-col justify-center 2xl:gap-8 md:gap-6 gap-4">
          <p className="text-3xl font-bold text-[#0A436A]">
            Class Maintenance
          </p>
          <div className="w-full flex flex-col justify-center items-center 2xl:gap-8 md:gap-4 gap-2">
            <p className="text-lg text-[#0A436A] text-justify">
              The Class Maintenance Certificate (CMC) is an official document
              issued by Biro Klasifikasi Indonesia (BKI) that formally verifies
              a vessel&apos;s classification status during a specific historical
              period as requested by the owner. It serves as an authoritative
              statement confirming that the vessel was maintained in class and
              in compliance with BKI Rules for that duration.
            </p>
          </div>
        </div>
      </section>

      <ThreeItemSection
        mainTitle="Purpose and Application"
        subTitle="The CMC is a vital document for various commercial and administrative processes. It is typically requested to support:"
        cards={purposeData}
        col={4}
      />

        <CMCInformation />

      <DisclaimerSection
        sectionSubtitle="Important"
        sectionTitle="Disclaimer"
        disclaimers={disclaimerContent}
        icon={<OctagonAlert size={20} />}
      />

      <DigitalPlatform />
      <ContactUsSection />
    </div>
  );
}
