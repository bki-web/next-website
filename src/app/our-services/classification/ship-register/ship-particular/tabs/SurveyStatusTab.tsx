import { SurveyRow, SurveySection } from "@/types/survey";
import SimpleTable from "../components/SimpleTable";
// import SurveyStatusOfClass from "../components/SurveyStatusOfClass";

type Column<T> = { key: keyof T; title: string; align?: "left" | "center" | "right" };

const col = <K extends keyof SurveyRow>(
    key: K,
    title: string,
    align?: "left" | "center" | "right"
): Column<SurveyRow> => ({key, title, align});

export default function SurvetStatusTab() {

    const sections: SurveySection[] = [
    {
        title: "Survey Status of Class",
        rows: [
            {no: 1, kind: "Special Survey", dueDate: "12-Mar-2030", lastDate: "10-Mar-2025"},
            {no: 2, kind: "Annual Survey", rangeDate: "12-Dec-2025 to 12-Jun-2026"},
            {no: 3, kind: "Docking Survey", dueDate: "10-Mar-2028", lastDate: "10-Mar-2025"},
            {no: 4, kind: "Intermediate Survey", rangeDate: "12-Dec-2026 to 12-Jun-2028"},
            {no: 5, kind: "Propeller Shaft (starboard-aft), Method 4", dueDate: "10-Mar-2030", lastDate: "10-Mar-2025"},
            {no: 6, kind: "Propeller Shaft (portside-aft), Method 4", dueDate: "10-Mar-2030", lastDate: "10-Mar-2025"},
        ],
    },
    {
        title: "Survey Status of Class",
        rows: [
            {
                no: 1,
                kind: "LOAD LINE ANNUAL",
                dueDate: "12 Jun 2026",
                rangeDate: "12 Dec 2025 to 12 Jun 2026",
                lastDate: "10-Mar-2025"
            },
            {
                no: 2,
                kind: "LOAD LINE RENEWAL ILLC 88",
                dueDate: "12 Mar 2026",
                rangeDate: "- to 12 Mar 2030",
                lastDate: "10 Mar 2025"
            },
        ],
    },
];

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