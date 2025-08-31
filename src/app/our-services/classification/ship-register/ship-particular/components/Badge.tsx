export default function Badge({children}: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center rounded-lg bg-slate-900 text-white px-2.5 py-1 text-xs font-semibold">
      {children}
    </span>
    );
}