// FILE: app/technical-information/components/TechnicalInformationTabs.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";

export type TIItem = {
    id: string;       // unik dari server (nomor + uuid)
    title: string;    // judul
    url: string;      // url lengkap (url + filename)
    date?: string;    // nomor (opsional)
};

type Props = {
    initialDataEN: TIItem[];
    initialDataID: TIItem[];
};

const container: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.035 },
    },
};

const row: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function TechnicalInformationTabs({
                                                     initialDataEN,
                                                     initialDataID,
                                                 }: Props) {
    const [active, setActive] = useState<"EN" | "ID">("EN");

    // seed dari props
    const [en] = useState<TIItem[]>(initialDataEN ?? []);
    const [id] = useState<TIItem[]>(initialDataID ?? []);

    // loading UI state
    const [loading, setLoading] = useState<boolean>(false);

    // controls
    const [query, setQuery] = useState("");
    const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    // tampilkan loader sebentar saat pindah tab (UX halus)
    const switchTab = (t: "EN" | "ID") => {
        if (t === active) return;
        setActive(t);
        setLoading(true);
        // kasih delay kecil agar spinner & skeleton terlihat sebentar
        const tid = setTimeout(() => setLoading(false), 300);
        return () => clearTimeout(tid);
    };

    // reset page ketika filter berubah
    useEffect(() => {
        setPage(1);
    }, [active, query, sortDir, pageSize]);

    const source = active === "EN" ? en : id;

    // filter
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return source;
        return source.filter(
            (x) =>
                x.title.toLowerCase().includes(q) ||
                (x.date ?? "").toLowerCase().includes(q) ||
                x.id.toLowerCase().includes(q),
        );
    }, [source, query]);

    // sort by title
    const sorted = useMemo(() => {
        const arr = [...filtered];
        arr.sort((a, b) => {
            const aa = a.title.toLocaleLowerCase();
            const bb = b.title.toLocaleLowerCase();
            if (aa < bb) return sortDir === "asc" ? -1 : 1;
            if (aa > bb) return sortDir === "asc" ? 1 : -1;
            return 0;
        });
        return arr;
    }, [filtered, sortDir]);

    // paginate
    const total = sorted.length;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    const current = Math.min(page, totalPages);
    const startIdx = (current - 1) * pageSize;
    const endIdx = Math.min(startIdx + pageSize, total);
    const pageItems = sorted.slice(startIdx, endIdx);

    const goto = (p: number) => setPage(Math.max(1, Math.min(totalPages, p)));

    return (
        <div className="relative">
            <div className="mx-auto w-full max-w-5xl px-4">
                {/* Header */}
                <div className="text-center">
                    <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
                        This pages provides downloadable technical information newsletter contained the most update notices of the latest BKI Rules and Guidelines. This information newsletter have substance of a brief description about appliances and contents from newly created BKI Regulation nor the latest amendment from the existing regulation.
                    </p>
                </div>

                {/* Controls */}
                <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    {/* Tabs */}
                    <div className="inline-flex rounded-full border border-slate-200 p-1 bg-white shadow-sm">
                        {(["EN", "ID"] as const).map((t) => (
                            <button
                                key={t}
                                onClick={() => switchTab(t)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                                    active === t
                                        ? "bg-slate-900 text-white"
                                        : "text-slate-700 hover:bg-slate-100"
                                }`}
                            >
                                {t === "EN" ? "English" : "Bahasa Indonesia"}
                            </button>
                        ))}
                    </div>

                    {/* Right controls */}
                    <div className="flex flex-wrap gap-3">
                        <input
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search title or number…"
                            className="w-64 rounded-sm border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200"
                        />
                        <select
                            value={sortDir}
                            onChange={(e) => setSortDir(e.target.value as "asc" | "desc")}
                            className="rounded-sm border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200"
                        >
                            <option value="asc">Title: A → Z</option>
                            <option value="desc">Title: Z → A</option>
                        </select>
                        <select
                            value={pageSize}
                            onChange={(e) => setPageSize(Number(e.target.value))}
                            className="rounded-sm border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-200"
                        >
                            {[10, 20, 30, 50].map((n) => (
                                <option key={n} value={n}>
                                    {n} / page
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Loader (spinner) */}
                {loading && (
                    <div className="flex justify-center items-center py-8">
                        <svg
                            className="animate-spin h-7 w-7 text-sky-600"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            />
                        </svg>
                    </div>
                )}

                {/* List */}
                <div className="mt-6">
                    {loading ? (
                        // SKELETON ketika loading
                        <ul className="grid gap-3">
                            {Array.from({ length: pageSize }).map((_, i) => (
                                <li
                                    key={i}
                                    className="h-[58px] rounded-sm bg-slate-100 animate-pulse"
                                />
                            ))}
                        </ul>
                    ) : (
                        <>
                            <motion.ul
                                variants={container}
                                initial="hidden"
                                animate="show"
                                className="grid gap-3"
                            >
                                {pageItems.map((it) => (
                                    <motion.li key={it.id} variants={row}>
                                        <a
                                            href={it.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-4 rounded-sm border border-slate-200 bg-white px-4 py-3.5 shadow-sm hover:shadow-md transition"
                                        >
                      <span className="grid place-items-center h-9 w-9 rounded-md bg-sky-50 text-sky-600 group-hover:bg-sky-100 transition">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="stroke-current"
                        >
                          <path
                              d="M12 3v12m0 0a4 4 0 0 1-8 0h8Zm0 0a4 4 0 0 0 8 0h-8Z"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                          />
                        </svg>
                      </span>

                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-slate-800 font-medium leading-snug group-hover:text-slate-900 line-clamp-2">
                                                    {it.title}
                                                </h3>
                                                {it.date && (
                                                    <p className="text-xs text-slate-500 mt-0.5">
                                                        No: {it.date}
                                                    </p>
                                                )}
                                            </div>

                                            <span className="text-slate-400 group-hover:text-slate-600 transition">
                        ↗
                      </span>
                                        </a>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            {/* Empty */}
                            {total === 0 && (
                                <div className="mt-6 rounded-sm border border-dashed border-slate-300 p-6 text-center text-slate-500">
                                    No items found.
                                </div>
                            )}

                            {/* Pagination footer */}
                            {total > 0 && (
                                <div className="mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm text-slate-600">
                                    <div>
                                        Showing{" "}
                                        <span className="font-medium text-slate-800">
                      {startIdx + 1}
                    </span>
                                        –
                                        <span className="font-medium text-slate-800">
                      {endIdx}
                    </span>{" "}
                                        of{" "}
                                        <span className="font-medium text-slate-800">{total}</span>
                                    </div>

                                    <div className="inline-flex items-center gap-1">
                                        <button
                                            onClick={() => goto(1)}
                                            disabled={current === 1}
                                            className="px-3 py-2 rounded-md border border-slate-200 bg-white disabled:opacity-40"
                                            aria-label="First page"
                                        >
                                            «
                                        </button>
                                        <button
                                            onClick={() => goto(current - 1)}
                                            disabled={current === 1}
                                            className="px-3 py-2 rounded-md border border-slate-200 bg-white disabled:opacity-40"
                                            aria-label="Previous page"
                                        >
                                            ‹
                                        </button>

                                        {Array.from({ length: totalPages })
                                            .map((_, i) => i + 1)
                                            .filter(
                                                (p) =>
                                                    p === 1 ||
                                                    p === totalPages ||
                                                    Math.abs(p - current) <= 2,
                                            )
                                            .reduce<number[]>((acc, p, idx, arr) => {
                                                if (idx > 0 && p - arr[idx - 1] > 1) acc.push(-1);
                                                acc.push(p);
                                                return acc;
                                            }, [])
                                            .map((p, idx) =>
                                                    p === -1 ? (
                                                        <span
                                                            key={`gap-${idx}`}
                                                            className="px-2 text-slate-400"
                                                        >
                            …
                          </span>
                                                    ) : (
                                                        <button
                                                            key={p}
                                                            onClick={() => goto(p)}
                                                            className={`px-3 py-2 rounded-md border ${
                                                                p === current
                                                                    ? "border-slate-900 bg-slate-900 text-white"
                                                                    : "border-slate-200 bg-white hover:bg-slate-100"
                                                            }`}
                                                        >
                                                            {p}
                                                        </button>
                                                    ),
                                            )}
                                        <button
                                            onClick={() => goto(current + 1)}
                                            disabled={current === totalPages}
                                            className="px-3 py-2 rounded-md border border-slate-200 bg-white disabled:opacity-40"
                                            aria-label="Next page"
                                        >
                                            ›
                                        </button>
                                        <button
                                            onClick={() => goto(totalPages)}
                                            disabled={current === totalPages}
                                            className="px-3 py-2 rounded-md border border-slate-200 bg-white disabled:opacity-40"
                                            aria-label="Last page"
                                        >
                                            »
                                        </button>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
