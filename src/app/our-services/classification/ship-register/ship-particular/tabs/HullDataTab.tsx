import SpecGrid, {type Row} from "@/app/our-services/classification/ship-register/ship-particular/components/SpecGrid";

const rows = [
    {
        left: {label: "Galangan (Shipbuilder)", value: <>GUANGZHOU…<br/>SHIPYARD CO., LTD.</>},
        right: {label: "Lokasi (Place of Build)", value: "CHINA"},
    },
    {
        shaded: true,
        left: {label: "Tanggal Peluncuran (Date of Launch)", value: "0/0/0"},
        right: {label: "Tahun Bangun (Year of Build)", value: "2008"},
    },
    {
        kind: "metrics",
        shaded: true,
        items: [
            {label: "LOA (m)", value: "40.00"},
            {label: "LBP (m)", value: "34.90"},
            {label: "BMLD (m)", value: "11.80"},
            {label: "HMLD (m)", value: "4.60"},
            {label: "LT (mm)", value: "809"},
            {label: "GT", value: "498"},
        ],
    },
    {kind: "metrics", items: [{label: "NT", value: "150"}, {label: "DWT (ton)", value: "0"}]},
    {shaded: true, left: {label: "T (m)", value: "3.79"}, right: {label: "J. Ruang / Tangki Muat", value: "0"}},
    // …dst
] satisfies Row[];

export default function HullDataTab() {
    return (
        <SpecGrid rows={rows}/>
    );
}