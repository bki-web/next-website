import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingStateArticle() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Skeleton className="relative h-96 bg-gray-200" />
            <Skeleton className="relative h-96 bg-gray-200" />
            <Skeleton className="relative h-96 bg-gray-200" />
        </div>
    )
}