"use client";
import EmptyStateCard from "@/components/EmptyState";
import LoadingStateArticle from "@/components/LoadingState";
import PaginationCommon from "@/components/PaginationCommon";
import { trpc } from "@/trpc/react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { getCoverUrl } from "@/utils/strapiCover";

export default function EventList() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const { data, isLoading } = trpc.event.getList.useQuery({
    page: currentPage,
    limit: 10,
  });

  if (data && data.data && data.data.length === 0) {
    return (
      <div>
        <EmptyStateCard
          title="Event not found"
          message="Please check again another time while we update this page"
        />
      </div>
    );
  }

  const pagination = data
    ? data.meta.pagination
    : { page: 1, pageCount: 1, total: 1 };
  const { pageCount, total } = pagination;

  const handlePageChange = (page: number) => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", String(page));
    router.push(`/events?${newParams.toString()}`);
  };

  return (
    <>
      {isLoading && <LoadingStateArticle />}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data?.data.map((a, i) => {
          return (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-lg text-black hover:-translate-y-1 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
            >
              <div className="relative h-48">
                <Image
                  src={getCoverUrl(a.cover.formats)}
                  alt={a.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-slate-800">
                <p className="text-sm mb-2">
                  {a.location}, {a.startDate}
                </p>
                <h3 className="font-semibold text-lg mb-3">{a.title}</h3>
                <div className="text-sm mb-4">{a.description}</div>
                <a
                  href={"/events/" + a.documentId}
                  className="flex justify-center items-center px-4 py-2 bg-[#0A436A] text-white font-medium text-lg rounded transition-colors duration-400 hover:bg-[#0A436A]/50"
                >
                  View Event →
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {data?.data?.length && (
        <PaginationCommon
          handlePageChange={handlePageChange}
          totalRecords={total}
          dataLength={data?.data.length || 0}
          pageCount={pageCount}
          pageSize={10}
        />
      )}
    </>
  );
}
