"use client";
import {useState} from "react";
import {motion} from "framer-motion";
import Badge from "./Badge";
import Pill from "./Pill";
import {classes} from "@/utils/string";
import GeneralTab from "../tabs/GeneralTab";
import HullDataTab from "../tabs/HullDataTab";
import MachineryDataTab from "../tabs/MachineryDataTab";
import OwnerTab from "../tabs/OwnerTab";
import SurvetStatusTab from "../tabs/SurveyStatusTab";
import {trpc} from "@/trpc/react";
import {Skeleton} from "@/components/ui/skeleton";
import NoResultsCard from "../../components/NoResultsCard";
import {match} from "ts-pattern";
import {cn} from "@/lib/utils";

const tabs = [
    {key: "general", label: "General Data"},
    {key: "hull", label: "Hull Data"},
    {key: "machinery", label: "Machinery Data"},
    {key: "owner", label: "Owner"},
    {key: "survey", label: "Survey Status"},
];

export function ShipParticularContent({noreg}: { noreg: string }) {
    const {data, isLoading} =
        trpc.shipRegister.getDetail.useQuery({noreg});

    const {data: dataHull, isLoading: isHullLoading} =
        trpc.shipRegister.getHullData.useQuery({noreg});

    const {data: dataOwner, isLoading: isOwnerDataLoading} =
        trpc.shipRegister.getOwnerData.useQuery({noreg});

    const {data: dataMachine, isLoading: isMachineDataLoading} =
        trpc.shipRegister.getMachineData.useQuery({noreg});

    const {data: dataSurvey, isLoading: isSurveyDataLoading} =
        trpc.shipRegister.getSurveyData.useQuery({noreg});

    const [activeTab, setActiveTab] = useState("general");
    const activeIndex = tabs.findIndex((tab) => tab.key === activeTab);

    if (isLoading) {
        return <Skeleton className="w-full h-96 rounded-lg bg-gray-400"/>;
    }

    if (!data?.length) {
        return (
            <NoResultsCard
                title="Ship with this register not found"
                subtitle="Please go back and check the register number."
            />
        );
    }

    const selectedData = data[0];
    return (
        <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden p-3 lg:p-5">
            {/* Header */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:pb-4 pb-2">
                <div className="flex items-center gap-3 lg:flex-row flex-col">
                    <h2 className="text-lg md:text-xl font-bold text-slate-900">
                        {selectedData.nmkpl}
                    </h2>
                    <Badge>
                        Register No: <span className="ml-1">{selectedData.noreg}</span>
                    </Badge>
                </div>
                <div className="flex lg:flex-row flex-col gap-2 shrink-0 self-start">
                    <Pill>
                        <span className="mr-1 opacity-70">IMO:</span>{" "}
                        {selectedData.noimo || "-"}
                    </Pill>
                    <Pill>GT{selectedData.grt || "-"}</Pill>
                    <Pill
                        className={cn(
                            "text-white",
                            selectedData.stat === "A" ? "!bg-green-500" : "!bg-red-500"
                        )}
                    >
                        {match(selectedData.stat)
                            .with("A", () => "Active")
                            .otherwise(() => "Inactive")}
                    </Pill>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-y lg:py-3 py-2">
                <div className="flex bg-[#0A436A] text-white/50 px-1 rounded-full relative">
                    {/* Highlight geser */}
                    <motion.div
                        className="absolute inset-1 rounded-full bg-white"
                        initial={false}
                        animate={{
                            x: `${activeIndex * 99.25}%`,
                            width: `${100 / tabs.length}%`,
                        }}
                        transition={{type: "spring", stiffness: 500, damping: 30}}
                    />
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={classes(
                                `flex-1 z-10 my-1 py-1 lg:text-sm text-xs font-semibold rounded-full transition-colors cursor-pointer`,
                                activeTab === tab.key
                                    ? "text-[#0A436A]"
                                    : "text-white/70 hover:text-white"
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 text-sm">
                {activeTab === "general" && !isLoading && (
                    <GeneralTab data={selectedData}/>
                )}
                {activeTab === "general" && isLoading && (
                    <Skeleton className="w-full h-96 rounded-lg bg-gray-400"/>
                )}

                {activeTab === "hull" && !isHullLoading && (
                    <HullDataTab data={dataHull}/>
                )}
                {activeTab === "general" && isHullLoading && (
                    <Skeleton className="w-full h-96 rounded-lg bg-gray-400"/>
                )}

                {activeTab === "machinery" && !isMachineDataLoading && (
                    <MachineryDataTab data={dataMachine}/>
                )}

                {activeTab === "owner" && !isOwnerDataLoading && (
                    <OwnerTab data={dataOwner}/>
                )}

                {(activeTab === "survey" && !isSurveyDataLoading) && <SurvetStatusTab data={dataSurvey}/>}
            </div>
        </div>
    );
}
