"use client";
import {useState} from "react";
import {motion} from "framer-motion";
import Badge from "./Badge";
import Pill from "./Pill";
import { classes } from "@/utils/string";
import GeneralTab from "../tabs/GeneralTab";
import HullDataTab from "../tabs/HullDataTab";
import MachineryDataTab from "../tabs/MachineryDataTab";
import OwnerTab from "../tabs/OwnerTab";
import SurvetStatusTab from "../tabs/SurveyStatusTab";

const tabs = [
    {key: "general", label: "General Data"},
    {key: "hull", label: "Hull Data"},
    {key: "machinery", label: "Machinery Data"},
    {key: "owner", label: "Owner"},
    {key: "survey", label: "Survey Status"},
];

export function ShipParticularContent() {
    const [activeTab, setActiveTab] = useState("general");
    const activeIndex = tabs.findIndex(tab => tab.key === activeTab);

    return (
        <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden p-3 lg:p-5">
            {/* Header */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:pb-4 pb-2">
                <div className="flex items-center gap-3 lg:flex-row flex-col">
                    <h2 className="text-lg md:text-xl font-bold text-slate-900">Speed Boat
                        GT11X</h2>
                    <Badge>Register No: <span className="ml-1">31873193</span></Badge>
                </div>
                <div className="flex lg:flex-row flex-col gap-2 shrink-0 self-start">
                    <Pill><span className="mr-1 opacity-70">IMO:</span> 69753922</Pill>
                    <Pill>GT1212</Pill>
                    <Pill className="!bg-green-500 text-white">Aktif</Pill>
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
                                activeTab === tab.key ? "text-[#0A436A]" : "text-white/70 hover:text-white"
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 text-sm">
                {activeTab === "general" && (
                    <GeneralTab/>
                )}

                {activeTab === "hull" && (
                    <HullDataTab/>
                )}

                {activeTab === "machinery" && (
                    <MachineryDataTab/>
                )}

                {activeTab === "owner" && (
                    <OwnerTab/>
                )}

                {activeTab === "survey" && (
                    <SurvetStatusTab/>
                )}
            </div>
        </div>
    );
}
