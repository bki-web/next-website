import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import React from "react";

interface PaginationControlsProps {
  totalCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PAGE_SIZE = 10;
const PAGE_GROUP_SIZE = 5;

const PaginationControls: React.FC<PaginationControlsProps> = ({
  totalCount,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  if (totalPages <= 1) {
    return null;
  }

  const startPage = Math.floor((currentPage - 1) / PAGE_GROUP_SIZE) * PAGE_GROUP_SIZE + 1;
  const endPage = Math.min(startPage + PAGE_GROUP_SIZE - 1, totalPages);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  const showEllipsis = totalPages > PAGE_GROUP_SIZE && endPage < totalPages;
  const showPrevGroupEllipsis = startPage > 1;
  return (
      <button onClick={() => onPageChange(currentPage + 1)} className="text-black">Next Page</button>
  )
  return (
    <div className=" text-black py-4">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => onPageChange(currentPage - 1)}
              aria-disabled={currentPage === 1}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
            />
          </PaginationItem>
          {showPrevGroupEllipsis && (
            <PaginationItem>
              <PaginationEllipsis onClick={() => onPageChange(startPage - 1)} />
            </PaginationItem>
          )}
          {pageNumbers.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                isActive={page === currentPage}
                onClick={() => onPageChange(page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          {showEllipsis && (
            <PaginationItem>
              <PaginationEllipsis onClick={() => onPageChange(endPage + 1)} />
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationNext
              onClick={() => onPageChange(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : undefined}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default PaginationControls;