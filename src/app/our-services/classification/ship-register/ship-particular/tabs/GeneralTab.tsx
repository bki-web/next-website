import Image from "next/image";
import SpecGrid from "../components/SpecGrid";
import { ShipRegister, ShipRegisterDetail } from "@/types/shipRegisterResult";
import { match } from "ts-pattern";
import HullClass from "../components/HullClass";

export default function GeneralTab({ data }: { data: ShipRegisterDetail }) {
  const material = match(data.mat.trim())
    .with("B", () => "BAJA/STEEL")
    .with("A", () => "ALUMINIUM")
    .with("K", () => "KAYU/WOOD")
    .with("F", () => "FIBREGLASS")
    .with("C", () => "FERROCEMENT")
    .otherwise(() => "");

  const status = match(data.stpen)
    .with("G", () => "Kurang Gross Akte")
    .with("D", () => "Kurang Dokumen")
    .with("L", () => "Load Line blm. dilaksanakan")
    .with("C", () => "Docking Surv. blm. dilaksanakan")
    .with("R", () => "Rekomendasi blm. dilakukan")
    .otherwise(() => "");
  const rows = [
    {
      left: { label: "Material", value: material },
      right: {
        label: "Pelabuhan Pendaftaran (Port Of Register)",
        value: data.kota,
      },
    },
    {
      shaded: true,
      left: { label: "Bendera (Flag)", value: data.flag },
      right: { label: "Dual Kelas (Dual Class)", value: data.dual },
    },
    {
      left: {},
      right: { label: "Dual Kelas (Dual Class)", value: data.doubleclass },
    },
    {
      shaded: true,
      left: {
        label: "Tanda Kelas & Notasi Lambung (Class of Hull)",
        value: (
          <HullClass
            notation1={data.notl1}
            notation2={data.notl2}
            notation3={data.notl3}
            notation4={data.notl4}
            notation5={data.notl5}
            notation6={data.notl6}
            notation7={data.notl7}
            notation8={data.notl8}
          />
        ),
      },
      right: {
        label: "Instalasi Pendingin (Refrigerator Install)",
        value: data.cool,
      },
    },
    {
      left: { label: "Status Pending", value: status },
      right: {
        label: "Nama Sebelumnya (Former Ship Name)",
        value: "-",
      },
    },
    {
      left: {
        label: "Jenis Kapal (Kind Of Ship)",
        value: data.tyshp,
      },
      right: { label: "Tanda Pengenal (Distinctive Number)", value: data.call },
      shaded: true,
    },
    {
      left: {
        label: "Tanda Kelas & Notasi Lambung (Class of Hull)",
        value: (
          <HullClass
            notation1={data.notm1}
            notation2={data.notm2}
            notation3={data.notm3}
            notation4={data.notm4}
            notation5={data.notm5}
            notation6={data.notm6}
          />
        ),
      },
      right: {
        label: "CMS/CHS",
        value: data.nmkpl,
      },
    },
    {
      left: {
        label: "Ex. Dual Kelas (Former Dual Class)",
        value: "",
      },
      right: { label: "Bangunan (Building)", value: "--" },
      shaded: true,
    },
  ];
  return <SpecGrid rows={rows} />;
}
