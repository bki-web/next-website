"use client";
import Image from "next/image";
import Button from "@/components/Button";

const publications = [
    {
        id: 1,
        date: "08 Aug 2025 4:20 pm",
        title: "New Research Vessel For Marine Science In SA",
        description:
            "Research Vessel Encounter pulls in at O’Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders.",
        image: "/rnd/publication.png",
    },
    {
        id: 2,
        date: "08 Aug 2025 4:20 pm",
        title: "New Research Vessel For Marine Science In SA",
        description:
            "Research Vessel Encounter pulls in at O’Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders.",
        image: "/rnd/publication.png",
    },
    {
        id: 3,
        date: "08 Aug 2025 4:20 pm",
        title: "New Research Vessel For Marine Science In SA",
        description:
            "Research Vessel Encounter pulls in at O’Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders.",
        image: "/rnd/publication.png",
    },
    {
        id: 4,
        date: "08 Aug 2025 4:20 pm",
        title: "New Research Vessel For Marine Science In SA",
        description:
            "Research Vessel Encounter pulls in at O’Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders.",
        image: "/rnd/publication.png",
    },
    {
        id: 5,
        date: "08 Aug 2025 4:20 pm",
        title: "New Research Vessel For Marine Science In SA",
        description:
            "Research Vessel Encounter pulls in at O’Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders.",
        image: "/rnd/publication.png",
    },
    {
        id: 6,
        date: "08 Aug 2025 4:20 pm",
        title: "New Research Vessel For Marine Science In SA",
        description:
            "Research Vessel Encounter pulls in at O’Sullivan Beach boat ramp. A new coastal research vessel, RV Encounter, will support the investigations and training opportunities of Flinders.",
        image: "/rnd/publication.png",
    },
];

export default function TechnicalPublicationGrid() {
    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:px-28 lg:px-20 px-4 2xl:py-20 lg:py-16 py-12 bg-white">
            {publications.map((pub) => (
                <div
                    key={pub.id}
                    className="bg-white rounded-lg shadow overflow-hidden"
                >
                    <div className="relative w-full h-48">
                        <Image
                            src={pub.image}
                            alt={pub.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="p-4 text-gray-800 flex flex-col gap-4">
                        <div>
                            <p className="text-xs text-gray-500">{pub.date}</p>
                            <h2 className="mt-2 font-semibold line-clamp-2">{pub.title}</h2>
                            <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                                {pub.description}
                            </p>
                        </div>
                        <div>
                            <Button text={'Read'}/>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}