"use client";
import EmptyStateCard from "@/components/EmptyState";
import NewsCard from "@/components/NewsCard";
import PaginationCommon from "@/components/PaginationCommon";
import {cn} from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import {useRouter, useSearchParams} from "next/navigation";
import { fetchNews } from "../actions";

export default function NewsList({
                                     limit = 10,
                                     className = "",
                                     hidePagination = false,
                                 }: {
    limit?: number;
    className?: string;
    hidePagination?: boolean;
}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    // const {data} = trpc.news.getList.useQuery({
    //     page: currentPage,
    //     limit,
    // });

    const { data } = useQuery({
        // The query key uniquely identifies this query's data
        queryKey: ["news", currentPage, limit],
        // The query function that returns a Promise
        queryFn: () => fetchNews(currentPage, limit),
    });


    if (data && data.data && data.data.length === 0) {
        return (
            <div className="w-full flex justify-center -top-16 md:-top-48">
                <EmptyStateCard
                    title="News not found"
                    message="Please check again another time while we update this page"
                />
            </div>
        );
    }

    const pagination = data
        ? data.meta.pagination
        : {page: 1, pageCount: 1, total: 1};
    const {pageCount, total} = pagination;

    const handlePageChange = (page: number) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("page", String(page));
        router.push(`/news?${newParams.toString()}`);
    };

    return (
        <div
            className={cn(
                "relative flex flex-col gap-6 -top-16 md:-top-48 px-6 md:px-24",
                className
            )}
        >
            <div className="grid relative grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {data?.data.map((a, i) => (
                    <NewsCard key={i} news={a} hasShadow={true} rounded={true}/>
                ))}
            </div>
            {!hidePagination && (
                <PaginationCommon
                    handlePageChange={handlePageChange}
                    totalRecords={total}
                    dataLength={data?.data.length || 0}
                    pageCount={pageCount}
                    pageSize={limit}
                />
            )}
        </div>
    );
}
