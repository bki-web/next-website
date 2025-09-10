import Image from "next/image";
import DownloadButton from "./download-button";

export default function AboutUs() {
    return (
        <section className="relative w-full h-auto md:h-screen flex items-center justify-center py-10 md:py-0">
            {/* Background with overlay */}
            <div className="absolute inset-0">
                <Image
                    src="/about-us-bg.png" // replace with your image path
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent/0 to-black/80"/>
            </div>

            {/* Content */}
            <div
                className="relative z-10 px-6 md:px-24 text-center text-white space-y-6 font-medium md:flex md:items-center md:text-left md:space-y-0 md:space-x-12">
                {/* Left Column (Image) - Visible on desktop, at the top on mobile */}
                <div className="flex-1 flex justify-center md:justify-center">
                    <Image
                        src="/bki-white.png"
                        alt="BKI Utama Logo"
                        width={384}
                        height={300}
                        className="w-48 h-32 md:w-96 md:h-64"
                    />
                </div>

                {/* Right Column (Text) - Visible on desktop, at the bottom on mobile */}
                <div className="flex-1 space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-shadow-lg shadow-black xl:text-4xl ">Get to Know Us</h2>
                    {/* Paragraph 1 */}
                    <p className="text-sm md:text-xs leading-relaxed xl:text-sm">
                        Biro Klasifikasi Indonesia (BKI) is the national classification society of Indonesia,
                        established in 1964 to strengthen the country&apos;s maritime independence. For more than six
                        decades, BKI has been trusted for its independence, integrity, and expertise in safeguarding
                        assets across the maritime, energy, infrastructure, and industrial sectors. As a Classification
                        Society, BKI develops and applies technical standards for the design, construction, and survey
                        of ships and offshore structures. Vessels built and maintained in accordance with these
                        standards are awarded a Classification Certificate, confirming compliance with recognized
                        international safety and quality benchmarks.
                    </p>
                    {/* Paragraph 2 */}
                    <p className="text-sm md:text-xs leading-relaxed xl:text-sm">
                        BKI also carries out statutory survey and certification services on behalf of the Government of
                        Indonesia and foreign flag states. These include Load Line, ISM Code, and ISPS Code
                        certification, ensuring compliance with IMO conventions and global maritime regulations. Over
                        the years, BKI has evolved into a comprehensive TICCS service provider (Testing, Inspection,
                        Certification, Classification, and Statutory), supporting industries through inspection,
                        testing, consultancy, and certification services. Our solutions are designed to ensure safety,
                        reliability, and sustainability across multiple sectors. Headquartered in Jakarta with branch
                        offices in major Indonesian ports and Singapore, BKI also maintains cooperative agreements with
                        leading international classification societies, including mutual recognition and dual class
                        arrangements.
                    </p>

                    {/* Button */}
                    <div className="flex justify-center md:justify-start">
                        <DownloadButton
                            link={process.env.NEXT_PUBLIC_OLD_WEBSITE_URL + "/file_download/552466Compro%20BKI%202021%20210522%20.pdf"}/>
                    </div>
                </div>
            </div>
        </section>
    );
}