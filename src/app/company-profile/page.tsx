"use client";
import CollapsibleTable from "./components/table";
import {StructureImageLightbox} from "./components/lightbox";
import AboutUs from "./components/about-us";
import Hero from "@/components/Hero";
import PageTransition from "@/components/page-transition";
import MilestoneTimeline, {Milestone,} from "@/app/company-profile/components/MilestoneTimeline";
import Image from "next/image";
import ImageScrollDialog from "./components/image-scroll-dialog";

const boardOfDirectors = [
    {
        name: "R. Benny Susanto",
        position: "President Director",
        image: "/directors/4-president-director.jpg",
        description: "President director is",
    },
    {
        name: "Arief Budi Permana",
        position: "Director of Operation Of Business Classification",
        image: "/directors/2-director-of-classification.jpg",
        description: `With a distinguished career at PT Biro Klasifikasi Indonesia (BKI) spanning nearly three decades, Arief Budi Permana brings a wealth of hands-on experience and executive leadership to his role as Director of Classification Business Operations. Since beginning his journey with BKI in 1996, he has developed profound expertise in marine survey, statutory regulations, and operational management.

Arief's career is marked by a steady progression through key technical and leadership positions. Starting as a field surveyor, he gained invaluable frontline experience before being appointed to manage several branch offices and key head office divisions, including Survey and Statutory. Before assuming his current directorship, he served as the Deputy Director of Classification Business Management, where he was instrumental in overseeing critical operations and ensuring compliance with maritime standards.

Arief Budi Permana is a graduate of the prestigious Institut Teknologi Sepuluh Nopember (ITS) in Surabaya with a degree in Naval Architecture and Marine Engineering. His extensive technical knowledge and vast operational experience make him a vital asset to the BKI leadership team.`,
    },
    {
        name: "Erwin Ernanto Hoesni",
        position: "Director of Business Commercial",
        image: "/directors/3-director-of-commercial.jpg",
        description: `Mr. Erwin Ernanto Hoesni is a seasoned executive with over 30 years of experience in commercial operations and strategic business development. As Director of Business Commercial at PT Biro Klasifikasi Indonesia (BKI), he is responsible for driving the company's commercial strategy, expanding its market presence, and fostering sustainable revenue growth.

Before joining BKI, Mr. Erwin built an extensive career at PT Sucofindo, holding key leadership positions such as Head of the Commercial Sub-Directorate and Head of the Trade, Industry, and Maritime Strategic Business Unit (SBU). In these roles, he successfully managed large-scale projects and represented the organization with key government and industry stakeholders.

A visionary leader with a passion for innovation, Mr. Erwin has a proven track record of developing technology-driven procedures to enhance customer satisfaction. His strategic mindset is further complemented by his experience as a Commissioner for PT Sucofindo Advisory Utama. Mr. Erwin holds a Bachelor's degree in Law from Universitas Brawijaya, and his deep commercial acumen is pivotal to BKI's future success.`,
    },
    {
        name: "R. Agus Doddy Dwi Sagita",
        position: "Director of Finance",
        image: "/directors/1-director-of-finance.jpg",
        description: `A visionary leader shaping Indonesia's industrial future, R. Agus Doddy Dwisagita, known as Mr. Doddy, brings over two decades of seasoned expertise to his role as Director. His career in the Testing, Inspection, Certification, Classification and Statutory (TICCS) industry is driven by a clear mission: to propel Indonesian TICCS companies into the world's Top 20 rankings by masterfully blending strategic financial oversight with robust operational leadership.

Mr. Doddy's strategic acumen is proven by his remarkable success in driving growth, having boosted profits by 40% in a single year and secured major tenders valued at over IDR 300 billion. He is a champion of operational integrity, earning numerous industry accolades for perfect compliance scores, outstanding safety culture, and exceptional performance on high-stakes national projects.

This strategic vision is sharpened by an elite education, including a Master of Management (Cum Laude) and executive programs at global institutions like INSEAD, positioning him at the forefront of modern business strategy.`,
    },
];

const milestones: Milestone[] = [
    {
        year: "1964",
        title: "Founded by the Government",
        desc: "Biro Klasifikasi Indonesia (BKI) was established as the only national classification society appointed by the Government of the Republic of Indonesia to carry out the classification of Indonesian-flagged merchant vessels.",
        imageUrl: "/company-profile/1964.jpg",
    },
    {
        year: "1977",
        title:
            "Becoming a Limited Liability Company to Support Classification and Non-Classification Services",
        desc: "The Government of Indonesia issued Government Regulation No. 1 of 1977, transforming BKI from a state-owned enterprise into a Limited Liability Company (Persero). This marked the beginning of BKI’s journey as a modern classification society. Since then, BKI’s scope has expanded beyond ship classification to also cover non-classification services.",
        imageUrl: "/company-profile/1977.jpg",
    },
    {
        year: "1982",
        title: "Expansion into Non-Classification Commercial Services",
        desc: "BKI pioneered non-classification business activities, including consultancy and supervision services in maritime, industrial, and other engineering sectors. This division later became known as Commercial Services.",
        imageUrl: "/company-profile/1982.jpg",
    },
    {
        year: "2003",
        title: "Implementation of Good Corporate Governance",
        desc: "Through Notarial Deed of Neneng Salmiah No. 11 dated March 14, 2003, BKI amended its Articles of Association to expand its objectives and business fields, aligning with the principles of Good Corporate Governance (GCG). This change was recorded in the Supplement of the State Gazette of the Republic of Indonesia No. 11847 of 2003.",
        imageUrl: "/company-profile/2003.jpg",
    },
    {
        year: "2010",
        title: "Host of Extraordinary ACS Meeting",
        desc: "As a co-founder of the Asian Classification Societies (ACS), BKI hosted the Extraordinary ACS Executives Meeting, strengthening collaboration among Asian classification societies.",
        imageUrl: "/company-profile/2010.jpg",
    },
    {
        year: "2017",
        title:
            "Appointed to Conduct Statutory Certification Surveys for Indonesian-Flagged Ships",
        desc: "Specifically for Indonesian-flagged vessels operating internationally.",
        imageUrl: "/company-profile/2017.jpg",
    },
    {
        year: "2018",
        title:
            "Appointed to Conduct Statutory Certification Surveys for Timor Leste-Flagged Ships",
        desc: "",
        imageUrl: "/company-profile/2018.jpg",
    },
    {
        year: "2020",
        title: "Elected Chairman of ACS",
        desc: "BKI was elected as the Chairman of the Asian Classification Societies (ACS).",
        imageUrl: "/company-profile/2020.jpg",
    },
    {
        year: "2021",
        title: "BKI Officially Becomes the Holding Company for Survey Services",
        desc: "Based on Government Regulation No. 66 of 2021 regarding the additional state capital investment in PT BKI (Persero), and the Deed of Shareholders’ Resolution, PT BKI (Persero) became the parent company of the Survey Services Holding (IDSurvey), with subsidiaries: PT Sucofindo & PT Surveyor Indonesia.",
        imageUrl: "/company-profile/2021.jpg",
    },
    {
        year: "2022",
        title: "Decarbonization Pilot Project",
        desc: "In October 2022, BKI signed a Memorandum of Understanding with several state-owned enterprises including Pertamina, PLN, Perum Perhutani, Semen Indonesia, Pupuk Indonesia, MIND ID, PTPN, and EMI to support decarbonization initiatives.",
        imageUrl: "/company-profile/2022.jpg",
    },
    {
        year: "2023",
        title: "Minister of SOEs Supports IDSurvey and IDX Carbon Collaboration",
        desc: "Minister Erick Thohir endorsed the collaboration between IDSurvey and the Indonesia Stock Exchange (IDX) in supporting the national carbon trading system. This partnership accelerates SOEs’ decarbonization efforts and contributes to achieving Net Zero Emissions by 2060.",
        imageUrl: "/company-profile/2023.jpg",
    },
    {
        year: "2024",
        title: "Digital Maritime Services",
        desc: "On August 23, 2024, BKI held the Pre-Launch of the Maritime Cloud Platform (MCP) at Marina Batavia Sunda Kelapa, attended by the Minister of SOEs. The initiative supports Indonesia’s Net Zero Carbon Emission 2060 target and included the signing of a Letter of Intent for the SOEs’ Voluntary Carbon Market (VCM).",
        imageUrl: "/company-profile/2024.jpg",
    },
    {
        year: "Present",
        title:
            "BKI as the Internationally Recognized National Classification Authority",
        desc: "Today, PT BKI (Persero) remains the only national classification society in Indonesia recognized internationally to provide classification and certification in the maritime sector. BKI continues to strengthen Indonesia’s maritime sovereignty while maintaining global recognition.",
    },
];

export default function CompanyProfile() {
    return (
        <div id="company-profile" className="relative min-h-screen overflow-hidden">
            <PageTransition/>

            <Hero
                routes={[{text: "Home", href: "/"}, {text: "Company Profile"}]}
                backgroundClass="bg-[url('/company-profile-bg.png')] bg-top"
                title={"About Us"}
                description={"Biro Klasifikasi Indonesia"}
            />

            {/* about us */}
            {/* AboutUs is part of introduction section above */}
            <AboutUs/>

            {/* Vision & Mission */}
            <section
                id="vision-mission-culture"
                className="w-full px-6 2xl:px-[105px] py-16 grid md:grid-cols-2 gap-12 bg-white"
            >
                <div className="relative text-white p-6 md:p-10 rounded-lg h-[50vh] md:h-[60vh] overflow-hidden">
                    <Image
                        src="/about-us-vision.jpg"
                        //   width={600}
                        //   height={900}
                        fill
                        style={{objectFit: "contain"}}
                        alt="our vision"
                    />
                </div>
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl 2xl:text-[64px] font-bold mb-4 text-[#0A436A]">
                            Our Vision
                        </h3>
                        <ul className="2xl:text-2xl font-semibold list-disc list-inside text-[#0A436A] space-y-2">
                            <li>
                                To be a global and world class Indonesian integrated assurance
                                group that is innovative, trusted and value creating to
                                stakeholders
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl 2xl:text-[64px] font-bold mt-8 mb-4 text-[#0A436A]">
                            Our Mission
                        </h3>
                        <ul className="2xl:text-xl font-semibold list-disc list-inside text-[#0A436A] space-y-4 text-justify">
                            <li>
                                Providing added value to stakeholders through assuring
                                compliance to quality standard as well as increasing efficiency,
                                safety, and security;
                            </li>
                            <li>
                                Providing comprehensive and trusted services by strengthening
                                capacity and capabilities related to human resources,
                                technology, and innovation through synergy and business
                                integration;
                            </li>
                            <li>
                                Expanding networks and strengthening reputation at the global
                                level in order to support the vision of Golden Indonesia 2045.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* <ImageModal /> */}

            {/* History Section */}
            <section
                id="history"
                className="bg-gradient-to-b from-[#0A436A] to-[#000] pt-16 2xl:pt-[135px] text-white"
            >
                <div className="flex flex-col gap-7 px-10 2xl:px-[105px]">
                    <h2 className="text-3xl 2xl:text-[64px] font-bold text-white">
                        Meet Our Board of Directors
                    </h2>
                    <p className="2xl:text-2xl">
                        Meet the strategic minds actively guiding the strategic growth of
                        BKI, driving innovation and positioning our organization to lead in
                        an era of profound industrial transformation.
                    </p>
                </div>
                <div className="flex flex-col pl-10 2xl:pl-[105px] py-3 2xl:py-[21px]">
                    <div className="flex flex-row items-center gap-4">
                        <p className="text-lg 2xl:text-2xl font-bold text-[#FFFFFF75]">
                            The Faces of Innovation
                        </p>
                        <div className="bg-gradient-to-r from-[#FFFFFF75] to-[#FFFFFF00] h-[1px] w-2/3 2xl:w-5/6"/>
                    </div>
                    <ImageScrollDialog members={boardOfDirectors}/>
                </div>
            </section>

            <MilestoneTimeline milestones={milestones}/>

            {/* Board Governance */}
            {/* <section className="bg-white py-16 flex flex-col items-center justify-center pb-36">
        <span className="text-4xl 2xl:text-[64px] font-medium mb-6 -tracking-tight text-black">
          Board Governance
        </span>
        <span className="text-xl 2xl:text-[32px] mb-12 2xl:mb-[102px] text-center max-w-2/3 text-black">
          Our distinguished board members provide strategic oversight,
          governance excellence, and visionary leadership to guide our
          company&apos;s continued growth and success
        </span>

        <div className="flex flex-col gap-5 w-full">
          <div
                        className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-6 md:px-18 2xl:px-[105px] mb-5 gap-2 md:gap-0">
                        <p className="text-4xl 2xl:text-5xl font-bold text-black md:flex-1/2">
                            Board of Commissioners
                        </p>
                        <p className="md:text-2xl 2xl:text-[32px] text-black md:flex-1/2 md:text-end">
                            Independent oversight and strategic guidance from industry leaders
                            and subject matter experts
                        </p>
                    </div>
                    <div className="pl-18">
                        <div id="boc">
                            <BoardOfDirectors members={boardOfCommissioner.slice(0, 2)}/>
                        </div>
                    </div>

          <div className="flex flex-row justify-center items-center my-14">
            <div className="bg-gradient-to-r from-[#00000050] to-[#00000000] h-[1px] w-[89%]" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full px-6 md:px-18 2xl:px-[105px] mb-5 gap-2 md:gap-0">
            <p className="text-4xl 2xl:text-5xl font-bold text-black md:flex-1/2">
              Board of Directors
            </p>
            <p className="md:text-2xl 2xl:text-[32px] text-black md:flex-1/2 md:text-end">
              Executive leadership team responsible for day-to-day operations
              and strategic implementation
            </p>
          </div>
          <div id="bod" className="pl-18">
            <BoardOfDirectors members={boardOfDirectors} />
          </div>
        </div>
      </section> */}

            {/* Committees */}
            <section
                id="technical-committee"
                className="px-6 py-16 md:py-16 bg-black flex flex-col items-center justify-center text-white"
            >
        <span className="text-4xl 2xl:text-[64px] font-medium mb-6 -tracking-tight text-center text-white">
          Technical Committee
        </span>
                <div className="text-xl 2xl:text-[32px] mb-12 2xl:mb-[102px] text-center md:max-w-2/3 text-white">
                    Our world-class technical experts who drive innovation and ensure the
                    highest standards of technology implementation across all our projects
                </div>
                {/* <div className="flex flex-row items-center gap-3 2xl:gap-6 overflow-x-auto w-max pl-18">
                    {Array.from({length: 4}).map((_, i) => (
                        <div
                            key={i}
                            className="shadow overflow-hidden relative"
                        >
                            <Image src="/faces-of-innovation/1.png" alt="member"
                                   width={484} height={422}
                                   className="object-cover rounded-xs"/>
                            <div
                                className="p-2 absolute bottom-4 left-4 right-4 bg-[#00000075] flex flex-col rounded-sm">
                                <p className="font-semibold text-[#FFFFFF60] 2xl:text-[20px] text-xs">2024 - 2025</p>
                                <p className="font-bold 2xl:text-3xl">Ahmad Johnny Depp</p>
                                <p className="text-sm 2xl:text-2xl">Position</p>
                            </div>
                        </div>
                    ))}
                </div> */}
                <div className="w-full px-6 md:px-24">
                    <CollapsibleTable/>
                </div>
            </section>

            {/* Structure */}
            <section
                id="organization-structure"
                className="bg-gradient-to-b from-[#0A436A] to-[#000000] py-16 flex flex-col items-center justify-center relative overflow-hidden"
            >
                {/* Top structure: opacity dari 100% → 0% ke bawah */}
                <div
                    className="absolute top-0 right-0 left-0 w-full h-2/5
                  bg-[url('/structure-top.png')] bg-top
                  [mask-image:linear-gradient(to_bottom,black,transparent)]
                  [mask-repeat:no-repeat] [mask-size:100%_100%]
                  [webkit-mask-image:linear-gradient(to_bottom,black,transparent)]
                  [webkit-mask-repeat:no-repeat] [webkit-mask-size:100%_100%]"
                />

                {/* Bottom structure: opacity dari 100% → 0% ke atas */}
                <div
                    className="absolute bottom-0 right-0 left-0 w-full h-2/5
                  bg-[url('/structure-bottom.png')] bg-bottom
                  [mask-image:linear-gradient(to_top,black,transparent)]
                  [mask-repeat:no-repeat] [mask-size:100%_100%]
                  [webkit-mask-image:linear-gradient(to_top,black,transparent)]
                  [webkit-mask-repeat:no-repeat] [webkit-mask-size:100%_100%]"
                />

                <span className="text-4xl 2xl:text-[64px] font-medium mb-6 -tracking-tight text-white">
          Structure
        </span>
                <span className="text-xl 2xl:text-[32px] mb-24 text-center max-w-2/3 text-white 2xl:mb-36">
          Organization Structure of PT Biro Klasifikasi Indonesia (Persero)
        </span>
                <StructureImageLightbox/>
            </section>
        </div>
    );
}
