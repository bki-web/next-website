"use client";
import { useSearchParams } from "next/navigation";
import Pagination from "./pagination";

export default function PaginationCommon({
  handlePageChange,
  pageCount,
  totalRecords,
  pageSize,
  dataLength,
}: {
  totalRecords: number;
  pageCount: number;
  pageSize: number;
  dataLength: number;
  handlePageChange: (pageNumber: number) => void;
}) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const dataNumber = pageSize * (currentPage - 1) + 1 || 0;
  const dataNumberTo = dataNumber - 1 + dataLength || 0;

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-black pb-10">
      <p className="text-bki-blue">
        Showing <b>{dataNumber}</b> to <b>{dataNumberTo}</b> of{" "}
        <b>{totalRecords}</b> data
      </p>
      <Pagination
        totalPages={pageCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
