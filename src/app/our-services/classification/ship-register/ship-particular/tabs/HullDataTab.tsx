import { ShipRegisterHullData } from "@/types/shipRegisterResult";
import SpecGrid, { Row } from "../components/SpecGrid";
import NoResultsCard from "../../components/NoResultsCard";


export default function HullDataTab({data}: { data: ShipRegisterHullData | null | undefined}) {
  if (!data ) {
    return (
      <NoResultsCard
        title="No Data"
        subtitle="No Data for Hull Class for ship with this register number"
      />
    );
  }

  const selectedData = data
  const rows = [
  {
    left: {
      label: "Galangan (Shipbuilder)",
      value: selectedData.nmgal,
    },
    right: { label: "Lokasi (Place of Build)", value: selectedData.lgal },
  },
  {
    shaded: true,
    left: { label: "Tanggal Peluncuran (Date of Launch)", value: `${selectedData.tglun}/${selectedData.bllun}/${selectedData.thlun}` },
    right: { label: "Tahun Bangun (Year of Build)", value: selectedData.thba },
  },
  {
    kind: "metrics",
    shaded: false,
    items: [
      { label: "LOA (m)", value: selectedData.loa },
      { label: "LBP (m)", value: selectedData.lbp },
      { label: "BMLD (m)", value: selectedData.bmld },
      { label: "HMLD (m)", value: selectedData.hmld},
      { label: "LT (mm)", value: selectedData.lt },
      { label: "GT", value: selectedData.brt },
    ],
  },
  {
    kind: "metrics",
    shaded: true,
    items: [
      { label: "NT", value: selectedData.nrt },
      { label: "DWT (ton)", value: selectedData.dwt },
    ],
  },
  {
    left: { label: "T (m)", value: selectedData.sarat },
    right: { label: "J. Ruang / Tangki Muat", value: selectedData.jmuat },
  },
  {
    shaded: true,
    left: { label: "J. Geladak (No. of Decks)", value: selectedData.jglad },
    right: { label: "J. Sekat Memanjang (No. of Long Bulkheads)", value: selectedData.jskpj },
  },
  {
    left: { label: "Ukuran. Palka (Size of Hatchways)", value: selectedData.upal },
    right: { label: "J. Sekat Melintang (No. of Watertight Bulkheads)", value: selectedData.jskml },
  },
  {
    shaded: true,
    left: { label: "L. Forcastle/Poop/Bridge", value: `${selectedData.pjfd}/${selectedData.pjbd}/${selectedData.pjbrd}` },
  },
  {
    kind: "section",
    title: "Bower Anchor"
  },
  {
    left: { label: "Jumlah/Berat Jangkar (Number/Weight of Anchors) (Kg)", value: `${selectedData.jjhl}/${selectedData.bjhl}` },
    right: { label: "Type", value: selectedData.tjhl || "unknown"},
  },
  {
    shaded: true,
    left: { label: "Kualitas Rantai Jangkar (Quality of Anchor Chain)", value: selectedData.krjhl },
    right: { label: "Dia. Rantai Jangkar ( D. of Anchor Chain) (mm)", value: selectedData.drjhl },
  },
  {
    left: { label: "Panj. Rantai Jangkar ( L. of Anchor Chain) (m)	", value: selectedData.prjhl },
    right: { label: "	Type Rantai Jangkar ( Type of Anchor Chain)", value: selectedData.trjhl },
  },
  {
    kind: "section",
    title: "Stream Anchor"
  },
  {
    left: { label: "Jumlah/Berat Jangkar (Number/Weight of Anchors) (Kg)", value: `${selectedData.jjar}/${selectedData.bjar}` },
    right: { label: "Type", value: selectedData.tjar || "Unknown"},
  },
  {
    shaded: true,
    left: { label: "Kualitas Rantai Jangkar (Quality of Anchor Chain)", value: selectedData.krjar },
    right: { label: "Dia. Rantai Jangkar ( D. of Anchor Chain) (mm)", value: selectedData.drjar },
  },
  {
    left: { label: "Panj. Rantai Jangkar ( L. of Anchor Chain) (m)	", value: selectedData.prjar },
    right: { label: "	Type Rantai Jangkar ( Type of Anchor Chain)", value: selectedData.trjar },
  },
  
  // …dst
] satisfies Row[];
  return <SpecGrid rows={rows} />;
}
