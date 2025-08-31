import {classes} from "@/utils/string";

export default function Pill(props: { children: React.ReactNode, className?: string }) {
    return (
        <span
            className={
                classes("inline-flex items-center rounded-md border border-slate-300/70 px-3 py-1 text-sm font-semibold shadow-sm bg-white text-slate-800", props.className ?? '')
            }>
      {props.children}
    </span>
    );
}