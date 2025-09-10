import {ShipRegisterOwner} from "@/types/shipRegisterResult";
import SpecGrid, {Row} from "../components/SpecGrid";

export default function OwnerTab(props: {
    data: ShipRegisterOwner | null | undefined;
}) {
    const Alamat = ({
                        baris1,
                        baris2,
                        kotaProv,
                    }: {
        baris1: string;
        baris2: string;
        kotaProv: string;
    }) => (
        <div className="space-y-4">
            <div className="font-extrabold text-slate-900 tracking-wide uppercase">
                {baris1}
                <br/>
                {baris2}
            </div>
            <div className="font-extrabold text-slate-900 tracking-wide uppercase">
                {kotaProv}
            </div>
        </div>
    );

    const rows = [
        // {kind: "section", title: "Pemilik (Owner)"},
        {
            shaded: false,
            left: {
                value: "Pemilik (Owner)",
            },
            right: {
                label: "",
                value: (
                    <Alamat
                        baris1={props.data?.nmfl1 + " " + props.data?.nmfl2}
                        baris2={(props.data?.almfl1 + " " + props.data?.almfl2) }
                        kotaProv={props.data?.kotafl || ""}
                    />
                ),
            },
            // kosongkan right untuk memberi ruang putih seperti referensi
            // right: {label: "", value: ""},
        },
        // {kind: "section", title: "Operator"},
        {
            right: {
                label: "",
                value: (
                    <Alamat
                        baris1={props.data?.nmfl1 + " " + props.data?.nmfl2}
                        baris2={props.data?.almfl1 || "" + props.data?.almfl2}
                        kotaProv={props.data?.kotafl || ""}
                    />
                ),
            },
            left: {label: "", value: "Operator"},
        },
    ] satisfies Row[];

    return <SpecGrid rows={rows}/>;
}
