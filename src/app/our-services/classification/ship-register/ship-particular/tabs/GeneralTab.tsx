import Image from "next/image";
import SpecGrid from "../components/SpecGrid";

const rows = [
    {
        left: {label: "Material", value: "LOGAM"},
        right: {label: "Pelabuhan Pendaftaran (Port Of Register)", value: "JAKARTA"},
    },
    {
        shaded: true,
        left: {label: "Bendera (Flag)", value: "INDONESIA"},
        right: {label: "Dual Kelas (Dual Class)", value: "BV"},
    },
    {
        left: {},
        right: {label: "Dual Kelas (Dual Class)", value: "BV"},
    },
    {
        shaded: true,
        left: {
            label: "Tanda Kelas & Notasi Lambung (Class of Hull)",
            value: (
                <div className="flex items-center gap-3 flex-wrap">
                    <Image
                        src="/our-services/classification/ship-particular/classmark.png"
                        alt="Class Mark A100"
                        width={120}
                        height={40}
                        className="h-10 w-auto"
                    />
                    <div className="text-slate-800 font-medium">
                        Offshore Service Vessel, SUPPLY
                        <br/>
                        Uniform Deck Load = 5 t/m
                    </div>
                </div>
            ),
        },
        right: {label: "Instalasi Pendingin (Refrigerator Install)", value: "CMS/CHS"},
    },
    {
        left: {label: "Status Pending", value: ""},
        right: {
            label: "Nama Sebelumnya (Former Ship Name)",
            value: "PUTRAJAYA SINGOSARI",
        },
    },
    {
        left: {label: "Jenis Kapal (Kind Of Ship)", value: "OFFSHORE SUPPORT VESSEL"},
        right: {label: "Tanda Pengenal (Distinctive Number)", value: "PMQY"},
        shaded: true,
    },
    {
        left: {
            label: "Tanda Kelas & Notasi Lambung (Class of Hull)",
            value: (
                <div className="flex items-center gap-3 flex-wrap">
                    <Image
                        src="/our-services/classification/ship-particular/classmark.png"
                        alt="Class Mark SM"
                        width={100}
                        height={40}
                        className="h-10 w-auto"
                    />
                </div>
            ),
        },
        right: {},
    },
    {
        left: {label: "Ex. Dual Kelas (Former Dual Class)", value: "OFFSHORE SUPPORT VESSEL"},
        right: {label: "Bangunan (Building)", value: "--"},
        shaded: true,
    },
];

export default function GeneralTab() {
    return (
        <SpecGrid rows={rows}/>
    );
}