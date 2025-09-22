import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";

export default function Loading() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <PageTransition/>

            {/* Hero Section */}
            <Hero
                routes={[
                    {text: "Home", href: "/"},
                    {text: "Technical Information"},
                ]}
                backgroundClass="bg-[url('/plan-approval/top-page.jpg')]"
                title={"Technical Information"}
                description={
                    "This pages provides downloadable technical information newsletter contained the most update notices of the latest BKI Rules and Guidelines. This information newsletter have substance of a brief description about appliances and contents from newly created BKI Regulation nor the latest amendment from the existing regulation."
                }
            />
            <section className="mx-auto max-w-5xl px-4 py-16">
                <div className="animate-pulse space-y-6">
                    <div className="h-8 w-1/3 bg-slate-200 rounded" />
                    <div className="h-6 w-2/3 bg-slate-200 rounded" />
                    <ul className="space-y-3 mt-8">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <li key={i} className="h-[58px] rounded bg-slate-200" />
                        ))}
                    </ul>
                </div>
            </section>
        </div>
    );
}