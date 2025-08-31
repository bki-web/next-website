"use client"

export type Column<T> = { key: keyof T; title: string; align?: "left" | "center" | "right" };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SimpleTable<T extends Record<string, any>>({
                                                                       columns,
                                                                       data,
                                                                       dense = false,
                                                                   }: {
    columns: Column<T>[];
    data: T[];
    dense?: boolean;
}) {
    return (
        <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="min-w-full text-sm">
                <thead>
                <tr className="bg-[#0A436A] text-white">
                    {columns.map((c) => (
                        <th
                            key={String(c.key)}
                            className={[
                                "px-3 py-3 font-semibold whitespace-nowrap",
                                c.align === "center" ? "text-center" : c.align === "right" ? "text-right" : "text-left",
                            ].join(" ")}
                        >
                            {c.title}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, i) => (
                    <tr key={i} className={i % 2 ? "bg-slate-50" : "bg-white"}>
                        {columns.map((c) => (
                            <td
                                key={String(c.key)}
                                className={[
                                    dense ? "px-3 py-2" : "px-3 py-3",
                                    c.align === "center" ? "text-center" : c.align === "right" ? "text-right" : "text-left",
                                    "whitespace-nowrap font-medium text-slate-900",
                                ].join(" ")}
                            >
                                {row[c.key] ?? "--"}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
