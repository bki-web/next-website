import Image from "next/image";
import SpecGrid from "../components/SpecGrid";
import { ShipRegister, ShipRegisterDetail } from "@/types/shipRegisterResult";
import { match } from "ts-pattern";

export default function GeneralTab({data}: { data: ShipRegisterDetail }) {
    const material = match(data.mat.trim())
  .with('B', () => 'BAJA/STEEL')
  .with('A', () => 'ALUMINIUM')
  .with('K', () => 'KAYU/WOOD')
  .with('F', () => 'FIBREGLASS')
  .with('C', () => 'FERROCEMENT')
  .otherwise(() => '');

  const status = match(data.stpen)
  .with('G', () => 'Kurang Gross Akte')
  .with('D', () => 'Kurang Dokumen')
  .with('L', () => 'Load Line blm. dilaksanakan')
  .with('C', () => 'Docking Surv. blm. dilaksanakan')
  .with('R', () => 'Rekomendasi blm. dilakukan')
  .otherwise(() => '');
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
          <div className="flex items-center gap-3 flex-wrap">
            {/* <Image
              src="/our-services/classification/ship-particular/classmark.png"
              alt="Class Mark A100"
              width={120}
              height={40}
              className="h-10 w-auto"
            /> */}
            <div className="text-slate-800 text-xl md:text-2xl font-bold">
              {data.notl1 + data.notl2 + data.notl3 + data.notl4 + data.notl5}
            </div>
          </div>
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
        value: "-"
      },
    },
    {
      left: {
        label: "Jenis Kapal (Kind Of Ship)",
        value: "OFFSHORE SUPPORT VESSEL",
      },
      right: { label: "Tanda Pengenal (Distinctive Number)", value: data.call },
      shaded: true,
    },
    {
      left: {
        label: "Tanda Kelas & Notasi Lambung (Class of Hull)",
        value: (
          <div className="flex items-center gap-3 flex-wrap">
            {/* <Image
              src="/our-services/classification/ship-particular/classmark.png"
              alt="Class Mark SM"
              width={100}
              height={40}
              className="h-10 w-auto"
            /> */}
            <div className="text-slate-800 text-xl md:text-2xl font-bold">
              {data.notm1 + data.notm2 + data.notm3 + data.notm4 + data.notm5}
            </div>
          </div>
        ),
      },
      right: {},
    },
    {
      left: {
        label: "Ex. Dual Kelas (Former Dual Class)",
        value: "OFFSHORE SUPPORT VESSEL",
      },
      right: { label: "Bangunan (Building)", value: "--" },
      shaded: true,
    },
  ];
  return <SpecGrid rows={rows} />;
}
