// components/loading-ship-register.tsx
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingFallback() {
  return (
    <section className="w-full flex flex-col lg:py-20 py-10 lg:px-24 px-4 lg:gap-y-8 gap-y-4 bg-[#E2E7F0]">
      <div className="w-full flex flex-col lg:gap-y-8 gap-y-4">
        {new Array(3).fill(0).map((_, index) => (
          <Skeleton key={`${index}`} className="w-full h-60 bg-gray-400" />
        ))}
      </div>
    </section>
  );
}
