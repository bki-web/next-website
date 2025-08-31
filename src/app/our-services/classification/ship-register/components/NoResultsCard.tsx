import { Ship } from "lucide-react";

export default function NoResultsCard({title, subtitle}: {title: string; subtitle: string}) {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center bg-white rounded-xl shadow-sm border border-slate-200 w-full max-w-lg mx-auto my-10">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent mb-4">
        <Ship className="h-8 w-8 text-accent-foreground" />
      </div>
      <h3 className="text-xl md:text-2x xl:text-2xl font-semibold text-slate-800">
        {title}
      </h3>
      <p className="mt-2 text-sm md:text-lg xl:text-xl text-slate-500 max-w-xs">
        {subtitle}
      </p>
    </div>
  );
}