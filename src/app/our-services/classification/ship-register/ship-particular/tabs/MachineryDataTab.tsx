// import {Column} from "@/types/simpleTable";
import SpecGrid from "../components/SpecGrid";
import {ShipRegisterMachine} from "@/types/shipRegisterResult";
import {match, P} from "ts-pattern";

// type MainEngineRow = {
//     no: string;
//     brand: string;
//     manufacture: string;
//     cyl: string;
//     power: string;
//     rpm: string;
//     year: string;
//     model: string;
//     serie: string;
//     position: string;
// };
//
// type AuxEngineRow = {
//     item: string;
//     brand: string;
//     manufacture: string;
//     location: string;
//     model: string;
//     bhp: string;
//     year: string;
// };

export default function MachineryDataTab({
                                             data,
                                         }: {
    data: ShipRegisterMachine | null | undefined;
}) {
    const rows = [
        {
            left: {
                label: "Sistim Start (Starting Device of Main Engine)",
                value: match(data?.sstr)
                    .with("A", () => "AKI (BATTERY)")
                    .with("U", () => "UDARA (AIR PRESSURE)")
                    .otherwise(() => null),
            },
            right: {
                label: "Jml. Baling-Baling (No. of Propeller)",
                value: data?.jpbb || "-",
            },
        },
        {
            shaded: true,
            left: {
                label: "Type Baling-Baling (Type of Propeller)",
                value: match(data?.tpbb)
                    .with("S", () => "Solid/Pejal")
                    .with("H", () => "Hollow")
                    .otherwise(() => null),
            },
            right: {label: "Voltage", value: data?.volt},
        },
        {
            left: {label: "Arus (Current)", value: data?.arus},
            right: {
                label: "Jenis Mesin (Type of Engine)",
                value: match(data?.tpbb)
                    .with("D", () => "Diesel")
                    .with("T", () => "Turbin")
                    .otherwise(() => null),
            },
        },
        {
            shaded: true,
            left: {
                label: "Jumlah Mesin Induk (No. of Main Engine)",
                value: data?.jme,
            },
            right: {
                label: "Cara Kerja Mesin (Engine Work Type)",
                value: match(data?.tpbb)
                    .with("2", () => "2 TAK (CYCLE)")
                    .with("4", () => "4 TAK (CYCLE)")
                    .with("S", () => "SINGLE ACTING")
                    .with("D", () => "DOUBLE ACTING")
                    .otherwise(() => null),
            },
        },
        {
            left: {label: "Gigi Reduksi (Gear Ratio)", value: data?.rasgr},
            right: {label: "Kecepatan Dinas (Service Speed)", value: data?.kdin},
        },
        {
            shaded: true,
            left: {label: "Kecepatan Coba (Trail Speed)", value: data?.kcob},
            right: {
                label: "Daya Listrik (Electrical Power) (KVA)",
                value: data?.daya,
            },
        },
        {
            left: {
                label: "Jumlah Mesin Bantu (No. of Aux. Engine)",
                value: data?.jmb,
            },
            right: {
                label: "Dia. x Langkah (Diameter x Stroke)",
                value: match({dia: data?.dia, lang: data?.lang})
                    .with(
                        {dia: P.not(P.nullish), lang: P.not(P.nullish)},
                        ({dia, lang}) => `${dia} x ${lang}`
                    )
                    .otherwise(() => null),
            },
        },
    ] satisfies Parameters<typeof SpecGrid>[0]["rows"];

    // MAIN ENGINE TABLE
    // const mainCols: Column<MainEngineRow>[] = [
    //     {key: "no", title: "No", align: "center"},
    //     {key: "brand", title: "Brand"},
    //     {key: "manufacture", title: "Manufacture"},
    //     {key: "cyl", title: "Cyl", align: "center"},
    //     {key: "power", title: "Power"},
    //     {key: "rpm", title: "RPM", align: "center"},
    //     {key: "year", title: "Year", align: "center"},
    //     {key: "model", title: "Model"},
    //     {key: "serie", title: "Serie"},
    //     {key: "position", title: "Position", align: "center"},
    // ];
    // const mainData: MainEngineRow[] = [
    //     {
    //         no: "1",
    //         brand: "CUMMINS",
    //         manufacture: "CUMMINS LIMITED",
    //         cyl: "12",
    //         power: "1200.000 HP",
    //         rpm: "1800",
    //         year: "2008",
    //         model: "KTA 38 M2",
    //         serie: "33172434",
    //         position: "SA",
    //     },
    //     {
    //         no: "1",
    //         brand: "CUMMINS",
    //         manufacture: "CUMMINS LIMITED",
    //         cyl: "12",
    //         power: "1200.000 HP",
    //         rpm: "1800",
    //         year: "2008",
    //         model: "KTA 38 M2",
    //         serie: "33172434",
    //         position: "SA",
    //     },
    // ];
    //
    // // AUX ENGINE
    // const auxCols: Column<AuxEngineRow>[] = [
    //     {key: "item", title: "Item"},
    //     {key: "brand", title: "Brand"},
    //     {key: "manufacture", title: "Manufacture"},
    //     {key: "location", title: "Location"},
    //     {key: "model", title: "Model"},
    //     {key: "bhp", title: "BHP", align: "right"},
    //     {key: "year", title: "Year", align: "center"},
    // ];
    // const auxData: AuxEngineRow[] = [
    //     {
    //         item: "A01",
    //         brand: "CATERPILLAR",
    //         manufacture: "CATERPILLAR CO., LTD.",
    //         location: "USA",
    //         model: "3406C",
    //         bhp: "349",
    //         year: "2008",
    //     },
    //     {
    //         item: "A02",
    //         brand: "CATERPILLAR",
    //         manufacture: "CATERPILLAR CO., LTD.",
    //         location: "USA",
    //         model: "3406C",
    //         bhp: "349",
    //         year: "2008",
    //     },
    // ];

    return (
        <div className="space-y-4">
            <SpecGrid rows={rows}/>

            {/* MAIN ENGINE TABLE */}
            {/* <h3 className="mt-2 text-lg md:text-xl font-semibold text-slate-900">
                MAIN ENGINE
            </h3>
            <SimpleTable columns={mainCols} data={mainData}/> */}

            {/* AUXILIARY ENGINE TABLE */}
            {/* <h3 className="mt-4 text-lg md:text-xl font-semibold text-slate-900">
                AUXILIARY ENGINE
            </h3>
            <SimpleTable columns={auxCols} data={auxData}/> */}
        </div>
    );
}
