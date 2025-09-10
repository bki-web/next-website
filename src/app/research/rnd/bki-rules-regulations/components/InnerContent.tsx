'use client';

import {Search} from "lucide-react";
import React, {useState} from "react";

export default function InnerContent() {
    const [search, setSearch] = useState("");

    const handleSubmitSearch = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Search:", search);
    };
    return (
        <div className="w-full flex items-center justify-between relative 2xl:px-28 xl:px-24 lg:px-20 px-4">
            <form
                onSubmit={handleSubmitSearch}
                className="flex items-center bg-white/10 backdrop-blur-md border border-white"
            >
                <input
                    type="text"
                    placeholder="Filter"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-white px-3 py-2 outline-none"
                />
                <button
                    type="submit"
                    className="p-2 flex items-center justify-center"
                >
                    <Search className="text-white"/>
                </button>
            </form>
            <form
                onSubmit={handleSubmitSearch}
                className="flex items-center bg-white/10 backdrop-blur-md min-w-1/4 border border-white"
            >
                <input
                    type="text"
                    placeholder="Search something here"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder-white px-3 py-2 outline-none"
                />
                <button
                    type="submit"
                    className="p-2 flex items-center justify-center"
                >
                    <Search className="text-white"/>
                </button>
            </form>
        </div>
    )
}