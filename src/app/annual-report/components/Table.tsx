import DownloadButton from "@/app/company-profile/components/download-button";
import SimpleTable from "@/app/our-services/classification/ship-register/ship-particular/components/SimpleTable";
import FancyTitle from "@/components/FancyTitle";
import { AnnualReport } from "@/types/annualReports";
import { Column } from "@/types/simpleTable";
import { match } from "ts-pattern";
import { FileChartColumnIncreasingIcon } from "lucide-react";
export default function TableAnnualReport() {
  const data: AnnualReport[] = [
    {
      filename: "Annual Report 2022",
      type: "pdf",
      size: 1752340,
      url: process.env.NEXT_PUBLIC_OLD_WEBSITE_URL + "/file_download/772413LO%20AR%20BKI%202022_2808023_ttd.pdf",
    },
    {
      filename: "Annual Report 2021",
      type: "pdf",
      size: 1752340,
      url: process.env.NEXT_PUBLIC_OLD_WEBSITE_URL + "/file_download/931722FA%20AR%20BKI%202021%20LR%20+%20LK.pdf",
    },
    {
      filename: "Annual Report 2020",
      type: "pdf",
      size: 1752340,
      url: process.env.NEXT_PUBLIC_OLD_WEBSITE_URL + "/file_download/272231Annual%20Report%20PT%20Biro%20Klasifikasi%20Indonesia%202020%20(Low%20Resolution).pdf",
    },
    {
      filename: "Annual Report 2019",
      type: "pdf",
      size: 1752340,
      url: process.env.NEXT_PUBLIC_OLD_WEBSITE_URL + "/download-2-1.html#:~:text=9513593-,Unduh,-Annual%20Report%202018",
    },
    {
      filename: "Annual Report 2018",
      type: "pdf",
      size: 1752340,
      url: process.env.NEXT_PUBLIC_OLD_WEBSITE_URL + "/file_download/923612AR%20BKI%202018%20Lowres.pdf",
    },
    {
      filename: "Annual Report 2017",
      type: "pdf",
      size: 1752340,
      url: process.env.NEXT_PUBLIC_OLD_WEBSITE_URL + "/file_download/281186Annual%20Report%202017_rev2.pdf",
    },
    {
      filename: "Annual Report 2016",
      type: "pdf",
      size: 1752340,
      url: process.env.NEXT_PUBLIC_OLD_WEBSITE_URL + "/file_download/127617Annual%20report%20BKI%202016.pdf",
    },
    {
      filename: "Annual Report 2015",
      type: "pdf",
      size: 1752340,
      url: process.env.NEXT_PUBLIC_OLD_WEBSITE_URL + "/file_download/bki-ar-2015-finalisasi-133063-popoji.pdf",
    },
    {
      filename: "Annual Report 2014",
      type: "pdf",
      size: 1752340,
      url: process.env.NEXT_PUBLIC_OLD_WEBSITE_URL + "/file_download/annual-report-bki-2014-673783-popoji.pdf",
    },
  ];
  const column: Column<AnnualReport>[] = [
    { key: "filename", title: "Filename" },
    {
      key: "type",
      title: "Type",
      customRender: (val: string | number) => (
        <div className="flex items-center gap-4">
          {match(val)
            .with("pdf", () => <FileChartColumnIncreasingIcon />)
            .with("application/pdf", () => <FileChartColumnIncreasingIcon />)
            .otherwise(() => null)}
          {val}
        </div>
      ),
    },
    {
      key: "size",
      title: "Size",
      customRender: (val: string | number) =>
        val ? `${(Number(val) / (1024 * 1024)).toFixed(2)} MB` : "--",
    },
    {
      key: "url",
      title: "Download Link",
      align: "center",
      customRender: (val: string | number) => (
        <div className="flex justify-center">
          <DownloadButton
            link={`${val}`}
            className="bg-[#0A436A] hover:bg-[#0A436A]/60 hover:transition hover:duration-150 hover:ease-in-out"
            label="Download"
          />
        </div>
      ),
    },
  ];
  return (
    <section className="bg-[#E2E7F0] px-6 md:px-24 py-20">
      <div className="text-bki-blue text-xl font-bold md:text-4xl mb-4">
        <FancyTitle title="Annual Reports History" />
      </div>
      <SimpleTable columns={column} data={data} />
    </section>
  );
}
