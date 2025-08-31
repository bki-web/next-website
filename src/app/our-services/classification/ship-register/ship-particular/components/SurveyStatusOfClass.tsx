import SimpleTable from "@/app/our-services/classification/ship-register/ship-particular/components/SimpleTable";

export type SurveyRow = {
    no: string | number;
    kind: string;
    dueDate?: string;
    rangeDate?: string;
    postponed?: string;
    lastDate?: string;
};

type Column<T> = { key: keyof T; title: string; align?: "left" | "center" | "right" };

const col = <K extends keyof SurveyRow>(
    key: K,
    title: string,
    align?: "left" | "center" | "right"
): Column<SurveyRow> => ({key, title, align});

export default function SurveyStatusOfClass({sections}: {
    sections: { title: string; rows: SurveyRow[] }[];
}) {
    const columns: Column<SurveyRow>[] = [
        col("no", "No", "center"),
        col("kind", "Kind of Survey"),
        col("dueDate", "Due Date"),
        col("rangeDate", "Range Date"),
        col("postponed", "Postponed"),
        col("lastDate", "Last Date"),
    ];

    return (
        <section className="w-full space-y-4">
            {sections.map((sec, i) => (
                <div key={i} className="rounded-xl border border-slate-200 overflow-hidden bg-white">
                    <div className="px-4 md:px-6 py-3 bg-slate-100/80 border-b border-slate-200">
                        <h3 className="text-lg md:text-xl font-extrabold tracking-wide text-black">
                            {sec.title.toUpperCase()}
                        </h3>
                    </div>
                    <div className="p-3 md:p-4">
                        <SimpleTable columns={columns} data={sec.rows}/>
                    </div>
                </div>
            ))}
        </section>
    );
}
