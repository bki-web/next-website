export default function MetaItem({label, value}: { label: string; value: React.ReactNode }) {
    return (
        <div className="flex flex-col basis-1/2 md:basis-1/3 xl:basis-1/4 pr-4">
            <p className="text-slate-500 text-sm"> {label} </p>
            <p className="font-medium text-slate-800 mt-0.5"> {value} </p>
        </div>
    );
}