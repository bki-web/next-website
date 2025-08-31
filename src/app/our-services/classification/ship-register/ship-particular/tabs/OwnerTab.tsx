import SpecGrid, { Row } from "../components/SpecGrid";


export default function OwnerTab() {
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
        {kind: "section", title: "Pemilik (Owner)"},
        {
            shaded: false,
            left: {
                label: "",
                value: (
                    <Alamat
                        baris1="SOWOHI KENTITI JAYA, PT."
                        baris2="JL.PASAR KEMBANG NO.23"
                        kotaProv="SURABAYA - JAWA TIMUR"
                    />
                ),
            },
            // kosongkan right untuk memberi ruang putih seperti referensi
            right: {label: "", value: ""},
        },
        {kind: "section", title: "Operator"},
        {
            left: {
                label: "",
                value: (
                    <Alamat
                        baris1="SOWOHI KENTITI JAYA, PT."
                        baris2="JL.PASAR KEMBANG NO.23"
                        kotaProv="SURABAYA - JAWA TIMUR"
                    />
                ),
            },
            right: {label: "", value: ""},
        },
    ] satisfies Row[];

    return (
        <SpecGrid rows={rows}/>
    );
}