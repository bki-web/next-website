import { match, P } from "ts-pattern";
import NoResultsCard from "./NoResultsCard";
import { PaginationInfo, ShipRegister } from "@/types/shipRegisterResult";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-slate-300/70 px-3 py-1 text-sm font-semibold shadow-sm bg-white text-slate-800">
      {children}
    </span>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg bg-slate-900 text-white px-2.5 py-1 text-xs font-semibold">
      {children}
    </span>
  );
}

function MetaItem({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col basis-1/2 md:basis-1/3 xl:basis-1/4 pr-4">
      <p className="text-slate-500 text-sm"> {label} </p>
      <p className="font-medium text-slate-800 mt-0.5"> {value} </p>
    </div>
  );
}

export default function ListShipRegister({
  data,
  pagination,
}: {
  data: ShipRegister[] | undefined;
  pagination: PaginationInfo | undefined;
}) {
  if (data === undefined) {
    // search not yet initiated
    return <div className="hidden" />;
  }
  
  return (
    <section className="w-full flex flex-col lg:pt-20 pt-10 lg:px-24 px-4 lg:gap-y-8 gap-y-4 bg-[#E2E7F0]">
      <p className="lg:text-6xl text-3xl text-[#0A436A] font-bold">{pagination?.totalRecords} Results</p>
      <div className="w-full flex flex-col lg:gap-y-8 gap-y-4">
        {match(data)
          .with([], () => (
            <NoResultsCard
              title="Ship not found"
              subtitle="Try to enter different keywords and search again."
            />
          ))
          .with(P.array(P.any), (list) => (
            <>
              {list.map((ship) => (
                <Link href={`/our-services/classification/ship-register/ship-particular/${ship.NOREG}`} key={ship.NOREG}>
                  <article
                    className="rounded-xl border border-slate-200 bg-white shadow-sm cursor-pointer"
                  >
                    <div className="flex flex-col gap-4 p-4 md:p-5 lg:flex-row lg:items-start lg:justify-between">
                      {/* Left */}
                      <div className="min-w-0 flex-1">
                        {/* Title + Register No + IMO No. + GT */}
                        <div className="flex justify-between items-center">
                          <div className="flex items-start md:items-center gap-3 lg:flex-row flex-col">
                            <h2 className="text-lg md:text-xl font-bold text-slate-900">
                              {ship.NMKPL}
                            </h2>
                            <Badge>
                              Register No:{" "}
                              <span className="ml-0 md:ml-1">{ship.NOREG}</span>
                            </Badge>
                          </div>
                          <div className="flex lg:flex-row flex-col gap-2 shrink-0 self-start">
                            <Pill>
                              <span className="mr-1 opacity-70">IMO:</span>{" "}
                              {ship.NOIMO}
                            </Pill>
                            <Pill>GT{ship.GRT}</Pill>
                          </div>
                        </div>

                        {/* Meta rows (FLEX) */}
                        <div className="mt-3 flex flex-wrap gap-y-3 border-t border-b border-[#C8C8C8] py-4">
                          <MetaItem label="Flag" value={ship.FLAG || "-"} />
                          <MetaItem label="Type of Ship" value={ship.TYSHP || "-"} />
                          <MetaItem
                            label="Status Compliance"
                            value={
                              <span className="text-emerald-600">
                                {ship.status_compliance || "-"}
                              </span>
                            }
                          />
                          <MetaItem
                            label="Status Class"
                            value={
                              <span className={cn(ship.STAT === "A" ? `text-emerald-600` : `text-red-600`)}>
                                {match(ship.STAT)
                                  .with("A", () => "Active")
                                  .otherwise(() => "Inactive")}
                              </span>
                            }
                          />
                        </div>

                        {/* Details */}
                        <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                          <span className="font-semibold">Details: </span>
                          Click to view detail
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </>
          ))
          .otherwise(() => (
            <div />
          ))}
      </div>
    </section>
  );
}
