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
        image: "/bki-armada.jpg",
    },
    {
        key: "engineering",
        title: "Engineering, Design & Consultancy",
        lead: "Leverage our deep engineering expertise to solve complex technical challenges and optimize your vessel and structural designs.",
        bullets: [
            {
                title: "Naval Architecture & Engineering",
                desc: "Including intact stability calculations, hydrodynamic analysis, and mooring design and analysis.",
            },
            {
                title: "Structural Analysis",
                desc: "Advanced Finite Element Analysis (FEA) for hull structures and components.",
            },
            {
                title: "Design & Documentation",
                desc: "Creation of as-built drawings and ship tank calibration tables.",
            },
            {
                title: "Corrosion Control",
                desc: "Expert design, testing, and monitoring of corrosion protection systems, including coatings, painting, and cathodic protection.",
            },
            {
                title: "General Marine Consultancy",
                desc: "Providing expert advice on marine transportation, operational efficiency, and regulatory compliance.",
            },
        ],
        image: "/bki-marine4.jpg",
    },
    {
        key: "management",
        title: "Management Systems & Regulatory Compliance",
        lead: "We are your partners in navigating the complex landscape of maritime regulations and achieving full compliance.",
        bullets: [
            {
                title: "ISM Code Services",
                desc: "Consultancy, internal audits, and support for implementing and maintaining your Safety Management System.",
            },
            {
                title: "ISPS Code Services",
                desc: "Consultancy, ship and port facility security assessments, verification, and certification (CSO, SSO, PFSO).",
            },
            {
                title: "SIMON Permit Support",
                desc: "Assisting with the necessary inspections and documentation for securing entry permits for oil and gas operations.",
            },
        ],
        image: "/classification-bg.jpg",
    },
    {
        key: "port",
        title: "Port Facilities & Underwater Services",
        lead: "Our services extend from the vessel to the port infrastructure that supports it.",
        bullets: [
            {
                title: "Mapping & Underwater Surveys",
                desc: "Utilizing advanced technology for hydrographic surveys and underwater inspections of hulls and structures.",
            },
            {
                title: "Special Purpose Jetty Services",
                desc: "Comprehensive support for the design, analysis, and inspection of specialized port and jetty facilities.",
            },
        ],
        image: "/our-world-bg.jpg",
    },
    {
        key: "competency",
        title: "Competency Development & Personnel Services",
        lead: "Through our certification and training programs, BKI Commercial helps you demonstrate a firm commitment to quality, safety, and operational excellence.",
        bullets: [
            {
                title: "Personnel Certification",
                desc: "Independent qualification and certification for Welders (and WPS) and Welding Inspectors, validating their skills to international standards.",
            },
            {
                title: "Specialized Training Courses",
                desc: "We offer a wide range of industry-leading training programs, including: Marine Surveyor Training, ISM Code (Internal Auditor, DPA) & ISPS Code (SSO, CSO, PFSO, Internal Auditor), International Maritime Dangerous Goods (IMDG) Code, Survey-Specific Training (Draught, On/Off Hire, Damage & Repair), Towing, Lashing, and Industrial Staging",
            },
            {
                title: "Skilled Labor Supply",
                desc: "Provision of qualified technical personnel, including NDT technicians, surveyors, auditors, and welding inspectors, to support your project needs.",
            },
        ],
        image: "/service-statutory.jpg",
    },
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
            asset&apos;s lifecycle.
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
          pillarText={"Our Expertise"}
        />
      ))}
    </Fragment>
  );
}
