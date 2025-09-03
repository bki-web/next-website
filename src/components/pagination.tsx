export default function Pagination(props: {totalPages: number, currentPage: number, onPageChange: (page: number) => void}) {
        // Pagination logic
        const groupSize = 5;
        const currentGroup = Math.floor((props.currentPage - 1) / groupSize);
        const startPage = currentGroup * groupSize + 1;
        const endPage = Math.min(startPage + groupSize - 1, props.totalPages);
        const pageNumbers = [];
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return (
                <div className="flex items-center gap-2 justify-center mt-4">
                    <button
                        className="px-3 py-1 rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
                        disabled={props.currentPage === 1}
                        onClick={() => props.onPageChange(Math.max(1, startPage - groupSize))}
                    >
                        Prev
                    </button>
                    {pageNumbers.map((page) => (
                        <button
                            key={page}
                            className={`px-3 py-1 rounded cursor-pointer ${
                                page === props.currentPage
                                    ? "bg-bki-blue text-white font-bold"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-300"
                            }`}
                            onClick={() => props.onPageChange(page)}
                        >
                            {page}
                        </button>
                    ))}
                    <button
                        className="px-3 py-1 cursor-pointer rounded bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
                        disabled={endPage === props.totalPages}
                        onClick={() => props.onPageChange(Math.min(props.totalPages, startPage + groupSize))}
                    >
                        Next
                    </button>
                </div>
        )
}