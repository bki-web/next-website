import Button from "@/components/Button";

export default function ResearchFocusSection() {
    return (
        <section
            className="relative bg-white flex items-center flex-col md:flex-row">
            <div
                className="flex-[0.5] bg-[url('/rnd/riset-mock.png')] bg-cover bg-center w-full h-[-webkit-fill-available]"/>
            <div className="flex-[0.5] flex flex-col gap-5 md:gap-8 py-20 md:py-36 px-24 md:px-40">
                <div className="flex flex-col gap-2">
                    <p className="text-base md:text-xl 2xl:text-2xl text-black">Our Research Focus</p>
                    <p className="text-4xl md:text-5xl 2xl:text-6xl font-bold text-[#0A436A]">Riset Bersama PUTA ( ITS -
                        BKI )</p>
                    <div className="flex items-center gap-2">
                        <p className="text-xl md:text-2xl 2xl:text-3xl text-[#0A436A]">2025, April 6</p>
                        <p className="text-xl md:text-2xl 2xl:text-3xl text-[#0A436A]">-</p>
                        <p className="text-xl md:text-2xl 2xl:text-3xl text-red-400">Upcoming</p>
                    </div>
                </div>
                <p className="text-xl md:text-2xl 2xl:text-3xl text-black">
                    We publish our Annual Report to provide stakeholders with a clear view of our performance,
                    strategies, and progress throughout the year.
                </p>
                <div>
                    <Button text={'Detail'}/>
                </div>
            </div>
        </section>
    )
}