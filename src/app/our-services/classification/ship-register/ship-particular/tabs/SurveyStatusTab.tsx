import {SurveySection} from "@/types/survey";
import SimpleTable from "../components/SimpleTable";
import {Column} from "@/types/simpleTable";
import {ShipRegisterSurvey} from "@/types/shipRegisterResult";
// import SurveyStatusOfClass from "../components/SurveyStatusOfClass";

const col = <K extends keyof ShipRegisterSurvey>(
    key: K,
    title: string,
    align?: "left" | "center" | "right"
): Column<ShipRegisterSurvey> => ({key, title, align});

export default function SurvetStatusTab(props: { data: ShipRegisterSurvey[] | undefined | null }) {
    const data = props.data || []
    const classData = data.filter(prop => prop.jenis === "KLAS").map((prop, index) => ({
        ...prop,
        no: index + 1
    }))
    const statutoryData = data.filter(prop => prop.jenis === "STATUTORIA").map((prop, index) => ({
        ...prop,
        no: index + 1
    }))

    const sections: SurveySection[] = [
        {
            title: "Survey Status of Class",
            rows: classData
        },
        {
            title: "Survey Status of Class",
            rows: statutoryData
        },
    ];

    const columns: Column<ShipRegisterSurvey>[] = [
        col("no", "No", "center"),
        col("jenissurvey", "Kind of Survey"),
        col("duedate", "Due Date"),
        col("rangedate", "Range Date"),
        col("postponeddate", "Postponed"),
        col("lastdate", "Last Date"),
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