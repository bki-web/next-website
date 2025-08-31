// components/SpecGrid.tsx
import {ReactNode} from "react";

export type Field = { label?: string; value?: React.ReactNode };
export type Row =
    | { kind?: "pair"; shaded?: boolean; left: Field; right?: Field }
    | { kind: "section"; title: string }
    | { kind: "metrics"; shaded?: boolean; items: { label?: string; value?: React.ReactNode }[] };

export default function SpecGrid({rows}: { rows: Row[] }) {
    return (
        <section className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white">
            {rows.map((row, i) => {
                if (row.kind === "section") {
                    return (
                        <h3
                            key={`section-${i}`}
                            className="px-4 md:px-6 py-3 md:py-3.5 text-lg md:text-xl font-semibold text-slate-900 bg-slate-100/80 border-t border-slate-200"
                        >
                            {row.title}
                        </h3>
                    );
                }

                if (row.kind === "metrics") {
                    return (
                        <div
                            key={`metrics-${i}`}
                            className={`px-4 md:px-6 py-3 md:py-4 border-t border-slate-200 ${
                                row.shaded ? "bg-slate-50" : "bg-white"
                            }`}
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                                {row.items.map((m, idx) => (
                                    <Metric key={idx} label={m.label} value={m.value}/>
                                ))}
                            </div>
                        </div>
                    );
                }

                // default pair row (2 kolom)
                return (
                    <div
                        key={`pair-${i}`}
                        className={[
                            "grid md:grid-cols-2 gap-3 border-t border-slate-200 px-4 md:px-6 py-4",
                            row.shaded ? "bg-slate-50" : "bg-white",
                        ].join(" ")}
                    >
                        <Metric label={row.left.label} value={row.left.value}/>
                        {row.right && <Metric label={row.right.label} value={row.right.value}/>}
                    </div>
                );
            })}
        </section>
    );
}

function Metric({label, value}: { label?: string; value?: ReactNode }) {
    // kalau label & value kosong -> render empty div
    const isEmpty =
        (!label || label.trim() === "") &&
        (value === undefined ||
            (typeof value === "string" && value.trim() === ""));

    if (isEmpty) return <div/>;

    return (
        <div>
            {label && (
                <p className="text-xs md:text-sm text-slate-500">{label}</p>
            )}
            {value && (
                <div className="mt-1 font-semibold text-slate-900 text-sm md:text-base break-words">
                    {value}
                </div>
            )}
        </div>
    );
}
