import Link from "next/link";

function Pill({children}: { children: React.ReactNode }) {
    return (
        <span
            className="inline-flex items-center rounded-md border border-slate-300/70 px-3 py-1 text-sm font-semibold shadow-sm bg-white text-slate-800">
      {children}
    </span>
    );
}

function Badge({children}: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-lg bg-slate-900 text-white px-2.5 py-1 text-xs font-semibold">
      {children}
    </span>
    );
}

const list = [
    {
        registerNo: "480",
        companyName: "ASEAN CABLESHIP PTE. LTD.",
        flag: "Indonesia",
    },
    {
        registerNo: "486",
        companyName: "PT. HUMOLCO LNG INDONESIA",
        flag: "Indonesia",
    },
    {
        registerNo: "405",
        companyName: "PT. PELNAS. TANJUNGRIAU SERVIS",
        flag: "Indonesia",
    },
    {
        registerNo: "465",
        companyName: "GO OFFSHORE (ASIA) PTE LTD",
        flag: "Indonesia",
    },
    {
        registerNo: "487",
        companyName: "PT. DAYA NUSA GADING",
        flag: "Indonesia",
    },
    {
        registerNo: "175",
        companyName: "PT. PELAYARAN NUSA TENGGARA",
        flag: "Indonesia",
    },
    {
        registerNo: "337",
        companyName: "PT. BERKAH SETANGGI TIMUR",
        flag: "Indonesia",
    },
    {
        registerNo: "428",
        companyName: "PT. PASAI JAYA",
        flag: "Indonesia",
    },
    {
        registerNo: "493",
        companyName: "PT. MAXIMA LINERS",
        flag: "Indonesia",
    },
    {
        registerNo: "376",
        companyName: "PT. BAYU MARITIM BERKAH",
        flag: "Indonesia",
    },
];


export default function ListISPSRegister() {
    return (
        <section className="w-full flex flex-col lg:pt-20 pt-10 lg:px-24 px-4 lg:gap-y-8 gap-y-4 bg-[#E2E7F0]">
            <p className="lg:text-6xl text-3xl text-[#0A436A] font-bold">20 Results</p>
            <div className="w-full flex flex-col lg:gap-y-8 gap-y-4">
                {list.map((ism) => (
                    <Link
                        href={`/src/app/our-services/statutory/international-safety-management/ism-register/${ism.registerNo}`}
                        key={ism.registerNo}>
                        <article
                            className="rounded-xl border border-slate-200 bg-white shadow-sm cursor-pointer"
                        >
                            <div
                                className="flex flex-col gap-4 p-4 md:p-5 lg:flex-row lg:items-start lg:justify-between">
                                {/* Left */}
                                <div className="min-w-0 flex-1">
                                    {/* Title + Register No + IMO No. + GT */}
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-start md:items-center gap-3 lg:flex-row flex-col">
                                            <h2 className="text-lg md:text-xl font-bold text-slate-900">
                                                {ism.companyName}
                                            </h2>
                                            <Badge>
                                                Register No:{" "}
                                                <span className="ml-0 md:ml-1">{ism.registerNo}</span>
                                            </Badge>
                                        </div>
                                        <div className="flex lg:flex-row flex-col gap-2 shrink-0 self-start">
                                            <Pill>
                                                <span className="mr-1 opacity-70">FLAG:</span>{" "}
                                                {ism.flag}
                                            </Pill>
                                        </div>
                                    </div>

                                    {/* Details */}
                                    {/*<div className="mt-3 text-sm text-slate-700 leading-relaxed">*/}
                                    {/*    <span className="font-semibold">Details: </span>*/}
                                    {/*    Click to view detail*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}