import { Fragment, RefObject } from "react";
import WhyTrustSection from "@/components/WhyTrustSection";
import SliderSection from "@/app/our-services/components/SliderSection";
import ServiceCard from "@/components/ServiceCard";
import FancyTitle from "@/components/FancyTitle";
import ThreeItemSection from "../components/ThreeItemSection";
import ThreeItemSectionWithSection from "../components/ThreeItemSectionWithSection";
import Pillar from "../components/Pillar";

type ProgramItem = {
  title: string;
  image: string;
  href?: string;
};
const programItems: ProgramItem[] = [
  {
    title: "Ship Register",
    image: "/our-services/program/plan-approval.jpg",
    href: "/our-services/classification/ship-register",
  },
  {
    title: "Floating Offshore",
    image: "/our-services/program/floating-offshore.png",
    href: "/our-services/classification/floating-offshore",
  },
  {
    title: "Class Suspend / Withdrawn",
    image: "/our-services/program/class-suspend.jpg",
    href: "/our-services/classification/class-withdrawal",
  },
  {
    title: "Class Maintenance Certificate",
    image: "/our-services/program/class-suspend.jpg",
    href: "/our-services/classification/class-maintenance",
  },
  {
    title: "Material and Component",
    image: "/our-services/program/plan-approval.jpg",
    href: "/our-services/classification/plan-approval",
  },
  {
    title: "Plan Approval",
    image: "/classification-plan-approval.jpg",
    href: "/our-services/classification/plan-approval",
  },
  {
    title: "Ship Recycling",
    image: "/our-services/program/floating-offshore.png",
  },
];

interface Props {
  keyContent: string;
  activeIndex: number;
  prevIndex: RefObject<number>;
}

const vesselLifecycle = [
  {
    title: "Vessel Lifecycle & Project Management",
    subtitle:
      "We provide complete oversight for your most critical projects, ensuring they are executed to the highest standards of quality from concept to completion.",
    cards: [
      {
        title: "New Building, Repair & Conversion",
        content:
          "Full project support including design review, structural analysis, on-site inspection, and supervision for new constructions, modifications, conversions, and vessel re-activations.",
        imageSrc: "/our-services/program/floating-offshore.png",
      },
      {
        title: "Owner Representation & Supervision",
        content:
          "Acting as your dedicated technical representative to supervise all project phases, ensuring compliance with specifications and timelines.",
        imageSrc: "/our-services/program/floating-offshore.png",
      },
      {
        title: "Monitoring Services",
        content:
          "Continuous monitoring of asset condition, performance, and corrosion control systems to inform maintenance strategies and ensure long-term integrity.",
        imageSrc: "/our-services/program/floating-offshore.png",
      },
    ],
  },
  {
    title: "Asset Integrity & Performance Verification",
    subtitle:
      "We deliver a clear and accurate assessment of your vessel's condition, performance, and compliance status.",
    cards: [
      {
        title: "Condition & Pre-Purchase Surveys",
        content:
          "Thorough vessel inspections to assess structural and machinery condition, identify potential risks, and support sale and purchase transactions.",
        imageSrc: "/our-services/program/floating-offshore.png",
      },
      {
        title: "On-Hire & Off-Hire Surveys",
        content:
          "Independent verification of a vessel's condition and bunker quantities at the start and end of a charter period",
        imageSrc: "/our-services/program/floating-offshore.png",
      },
      {
        title: "Draught & Cargo Quantity Surveys",
        content:
          "Precision surveys to determine vessel displacement for cargo weight calculation and liquid cargo quantity verification (sounding).",
        imageSrc: "/our-services/program/floating-offshore.png",
      },
      {
        title: "Towing & Lashing Surveys",
        content:
          "Analysis and approval of towing arrangements and cargo securing plans to ensure the safe transport of vessels and project cargo.",
        imageSrc: "/our-services/program/floating-offshore.png",
      },
      {
        title: "Performance Audits & Testing",
        content:
          "Comprehensive trials and tests including fuel consumption analysis, speed trials, and technical audits of vessel performance.",
        imageSrc: "/our-services/program/floating-offshore.png",
      },
      {
        title: "Machinery Inspection",
        content:
          "Including crank shaft deflection measurement and detailed machinery analysis.",
        imageSrc: "/our-services/program/floating-offshore.png",
      },
    ],
  },
];

const pillar =  [
        {
            key: "advance",
            title: "Advanced Testing & Analysis",
            lead:
                "Our specialized testing services provide the definitive data you need to make critical decisions about asset integrity and material quality.",
            bullets: [
                {
                    title: "Non-Destructive Testing (NDT)",
                    desc:
                        "A complete range of NDT services to detect defects and assess material condition without causing damage. Methods include: Ultrasonic Testing (UT Thickness & Flaw Detection), Magnetic Particle Testing (MT), Penetrant Testing (PT), Radiography Testing (RT), Eddy Current, Acoustic Emission, Long Range UT, and Magnetic Flux Leakage",
                },
                {
                    title: "Laboratory Testing",
                    desc:
                        "In-depth mechanical and chemical testing of materials to verify specifications and analyze failures.",
                },
                {
                    title: "Specialized Onboard Testing",
                    desc: "Including gas-free testing, insulation resistance (megger) tests, noise and vibration analysis, and bollard pull tests."
                },
            ],
            image: "/bki-marine4.jpg",
        },
        // {
        //     key: "integrity",
        //     title: "Asset Integrity Management: Ensuring Peak Performance & Safety",
        //     lead:
        //         "The integrity of your assets is the bedrock of your success. We specialize in advanced inspection and testing methodologies that provide a clear picture of your equipment's condition, helping you optimize maintenance, prevent failures, and extend operational life.",
        //     bullets: [
        //         {
        //             title: "Advanced Inspection",
        //             desc: "Comprehensive services including Risk-Based Inspection (RBI) and Remaining Life Assessment (RLA) for aging assets."
        //         },
        //         {
        //             title: "Non-Destructive Testing (NDT)",
        //             desc: "UT, RT, MT, PT, Eddy Current, dan lainnya—mendeteksi cacat tanpa merusak komponen."
        //         },
        //         {
        //             title: "Equipment Certification",
        //             desc: "Pressure Vessels, Boilers (DISNAKER), Cranes, Storage Tanks, Rotating Equipment, dan peralatan kritikal lain."
        //         },
        //         {
        //             title: "Corrosion Control",
        //             desc: "Analisis & monitoring untuk coating, painting, dan cathodic protection systems."
        //         },
        //     ],
        //     image: "/article2.jpg",
        // },
        // {
        //     key: "compliance",
        //     title: "Regulatory & Systems Compliance: Your Guide Through Complexity",
        //     lead:
        //         "Navigating the web of national and international regulations can be daunting. BKI is your expert guide to achieving and maintaining full compliance, ensuring your operations are licensed, lawful, and aligned with global best practices.",
        //     bullets: [
        //         {
        //             title: "National Fitness Certificates",
        //             desc: "Sertifikasi wajib untuk sektor energi (SKPI, SKPP) dan industri (DISNAKER, DEPHUB)."
        //         },
        //         {
        //             title: "Health, Safety & Environment (HSE)",
        //             desc: "Audit dan sertifikasi Sistem Manajemen K3 (SMK3)."
        //         },
        //         {
        //             title: "Specialized Equipment",
        //             desc: "Kepatuhan untuk Well Head, Drilling Units, Lifting Gear, dan Instalasi Kelistrikan pabrik."
        //         },
        //     ],
        //     image: "/article3.jpg",
        // },
        // {
        //     key: "people",
        //     title: "Workforce Competency & Development: Empowering Your People",
        //     lead:
        //         "Your greatest asset is your workforce. We help you build a team that is skilled, certified, and safe, ensuring that human performance matches the high standards of your physical assets.",
        //     bullets: [
        //         {
        //             title: "Personnel Certification",
        //             desc: "Kualifikasi & sertifikasi independen untuk Welder, Welding Inspector, dan Operator Alat Angkat (SIO)."
        //         },
        //         {
        //             title: "Specialized Technical Training",
        //             desc: "Program peningkatan kompetensi, termasuk manajemen HSE (SMK3)."
        //         },
        //         {
        //             title: "Skilled Labor Supply",
        //             desc: "Penyediaan teknisi NDT tersertifikasi dan tenaga ahli teknis sesuai kebutuhan proyek."
        //         },
        //     ],
        //     image: "/available-opportunities-bg.jpg",
        // },
    ]

export default function MarineServicesTabContent({
  keyContent: key,
  activeIndex,
  prevIndex,
}: Props) {
  return (
    <Fragment>
      <SliderSection
        keyContent={key}
        activeIndexParent={activeIndex}
        prevIndexParent={prevIndex}
      />

      <WhyTrustSection />

      <section
        id={"video-section"}
        className="w-full h-full 2xl:p-28 lg:p-20 p-8 flex 2xl:flex-row flex-col justify-center items-center bg-[#E2E7F0] gap-8 2xl:gap-12"
      >
        <video
          className="2xl:w-1/2 w-full h-full object-cover rounded-lg"
          src="/hero-banner-bki.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="flex flex-col gap-8 2xl:gap-12">
          <p className="2xl:text-5xl text-3xl font-bold text-[#0A436A]">
            More Than Classification: Expert Marine Solutions
          </p>
          <p className="2xl:text-2xl text-lg text-black text-justify">
            We delivers a comprehensive range of expert services for the entire
            marine ecosystem. Our work spans the shipbuilding, sea
            transportation, and fishery sectors, providing critical support for
            vessels, port facilities, and management systems. We leverage our
            deep technical expertise to offer solutions that ensure safety,
            integrity, compliance, and operational excellence throughout your
            asset's lifecycle.
            <br />
            <br />
            From initial design and construction to in-service management and
            personnel development, BKI is your single-source partner for
            overcoming the technical challenges of the maritime industry.
          </p>
        </div>
      </section>

      {/*Program Section*/}
      {/* <section
        id="program"
        className="w-full h-full 2xl:px-24 2xl:py-18 md:px-24 md:py-6 py-8 px-8 flex flex-col justify-center items-center bg-white gap-14"
      >
        <div className="w-full flex md:flex-row flex-col justify-between items-center gap-5 md:gap-0">
          <p className="2xl:text-6xl text-4xl font-bold text-[#0A436A] w-full">
            <FancyTitle title="Vessel Lifecycle & Project Management" />
          </p>
          <p className="2xl:text-2xl text-xl lg:text-end text-black w-full md:w-4/5 text-justify">
            Explore how our expertise can empower your fleet to sail with
            certainty.
          </p>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-3 md:gap-x-5 2xl:gap-x-8 gap-y-8 md:gap-y-12 2xl:gap-y-16">
          {programItems.map((item, index) => (
            <ServiceCard
              href={item.href ?? "#"}
              image={item.image}
              title={item.title}
              key={index}
              isProgramPage
            />
          ))}
        </div>
      </section> */}
      <ThreeItemSectionWithSection
        mainTitle="Our expertise"
        subTitle="We have structured our extensive capabilities into key service areas to meet your specific needs."
        subtitleClassName="text-xl md:text-2xl"
        sections={vesselLifecycle}
      />

      {pillar.map((p, idx) => (
        <Pillar
          key={p.key}
          keyId={p.key}
          index={idx}
          title={p.title}
          lead={p.lead}
          bullets={p.bullets}
          image={p.image}
          hidePillarText={true}
        />
      ))}
    </Fragment>
  );
}
