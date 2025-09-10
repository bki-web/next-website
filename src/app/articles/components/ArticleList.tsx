"use client";
import ArticleCardModern from "@/components/ArticleCardModern";
import EmptyStateCard from "@/components/EmptyState";
import PaginationCommon from "@/components/PaginationCommon";
import {trpc} from "@/trpc/react";
import {useRouter, useSearchParams} from "next/navigation";

export default function ArticleList() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    const {data} = trpc.article.getList.useQuery({
        page: currentPage,
        limit: 10,
    });

    if (data && data.data && data.data.length === 0) {
        return (
            <div>
                <EmptyStateCard title="Article not found"
                                message="Please check again another time while we update this page"/>
            </div>
        )
    }

    const pagination = data ? data.meta.pagination : {page: 1, pageCount: 1, total: 1}
    const {pageCount, total} = pagination;

    const handlePageChange = (page: number) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set("page", String(page));
        router.push(
            `/articles?${newParams.toString()}`
        );
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data?.data.map((a, i) => (
                    <ArticleCardModern key={i} article={a}/>
                ))}
            </div>
            <PaginationCommon handlePageChange={handlePageChange} totalRecords={total}
                              dataLength={data?.data.length || 0} pageCount={pageCount} pageSize={10}/>
        </>
    );
}
