"use client";
import {useRef, useState} from "react";
import Image from "next/image";
// import {ChevronLeft, ChevronRight} from "lucide-react";
import {Dialog, DialogContent, DialogOverlay, DialogTitle,} from "@/components/ui/dialog";
import {cn} from "@/lib/utils";

type Member = {
    name: string;
    position: string;
    image: string;
    description: string
};

export default function ImageScrollDialog(props: { members: Member[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);

    // const scrollLeft = () => {
    //     if (scrollRef.current) scrollRef.current.scrollBy({left: -300, behavior: "smooth"});
    // };
    //
    // const scrollRight = () => {
    //     if (scrollRef.current) scrollRef.current.scrollBy({left: 300, behavior: "smooth"});
    // };

    const [modalOpen, setModalOpen] = useState(false);
    const [activeImage, setActiveImage] = useState<Member | null>(null);

    const handleImageClick = (image: Member) => {
        setActiveImage(image);
        setModalOpen(true);
    };

    // const handleClose = () => {
    //   setModalOpen(false);
    //   setActiveImage(null);
    // };

    return (
        <div className="relative w-full group">
            {/* Left arrow */}
            {/*<button*/}
            {/*    onClick={scrollLeft}*/}
            {/*    className="flex opacity-100 md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-[#0A436A] text-white p-2 rounded-full shadow-md  group-hover:opacity-100 transition-opacity duration-300 z-10"*/}
            {/*>*/}
            {/*    <ChevronLeft className="w-6 h-6"/>*/}
            {/*</button>*/}

            {/* Scroll container */}
            <div
                ref={scrollRef}
                className="grid grid-cols-2 lg:grid-cols-4 cursor-pointer items-stretch gap-3 md:gap-6 py-3 md:py-6 px-6"
                // className="flex flex-row cursor-pointer items-stretch gap-3 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-3 md:py-6 px-6"
            >
                {props.members.map((member, i) => (
                    <div
                        onClick={() => handleImageClick(member)}
                        key={i}
                        className="relative flex-shrink-0 w-full h-[450px] shadow-lg overflow-hidden rounded-md"
                        // className="relative flex-shrink-0 w-[250px] md:w-[380px] lg:w-[450px] h-[250px] md:h-[380px] lg:h-[450px] shadow-lg overflow-hidden rounded-md"
                    >
                        <Image
                            src={`${member.image}`}
                            alt={member.name}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 md:p-4 text-white min-h-1/4">
                            <p className="font-bold text-xl">{member.name}</p>
                            <p className="">{member.position}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right arrow */}
            {/*<button*/}
            {/*    onClick={scrollRight}*/}
            {/*    className="flex opacity-100 md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-[#0A436A] text-white p-2 rounded-full shadow-md  group-hover:opacity-100 transition-opacity duration-300 z-10"*/}
            {/*>*/}
            {/*    <ChevronRight className="w-6 h-6"/>*/}
            {/*</button>*/}
            <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogOverlay className="fixed inset-0 bg-black/60 backdrop-blur-md"/>
                <DialogContent
                    className={cn(
                        "text-white bg-bki-blue backdrop-blur-3xl border border-white/40 p-0  rounded-lg",
                        "lg:w-[70vw] lg:h-[70vh]",
                        "sm:w-[90vw] sm:h-[80vh]",
                        "flex flex-col overflow-hidden",
                        "max-w-lvw",
                        "max-h-[80vh]",
                        "scroll-smooth",
                        "overflow-scroll lg:overflow-hidden"
                    )}
                >
                    <DialogTitle></DialogTitle>

                    {activeImage && (
                        <div className="flex-1 w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Left Column (Image) */}
                            <div className="relative aspect-square md:aspect-auto">
                                <Image
                                    src={activeImage.image}
                                    alt={`Image ${activeImage.name}`}
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>

                            {/* Right Column (Description) */}
                            <div className="flex flex-col justify-center p-4">
                                <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">{activeImage.name}</h2>
                                <div className="text-white text-xl mb-1 font-semibold">{activeImage.position}</div>
                                <p className="whitespace-pre-wrap">{activeImage.description}</p>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
