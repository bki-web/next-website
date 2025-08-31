export default function Pagination() {
  return (
    <div className="flex items-center justify-end gap-2 lg:gap-4">
      <div className="flex items-center gap-1 text-slate-700">
        <button className="px-2 py-1 rounded-md hover:bg-slate-100">
          &lt;
        </button>
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className={`h-8 w-8 rounded-md text-sm font-medium ${
              n === 1
                ? "bg-slate-900 text-white"
                : "hover:bg-slate-100 text-slate-800"
            }`}
          >
            {n}
          </button>
        ))}
        <button className="px-2 py-1 rounded-md hover:bg-slate-100">
          &gt;
        </button>
      </div>
      <div className="flex items-center gap-2">
        <select className="rounded-md border border-slate-300 bg-white px-2 py-1 text-sm text-black">
          <option>10 / page</option>
          <option>20 / page</option>
          <option>50 / page</option>
        </select>
      </div>
    </div>
  );
}
