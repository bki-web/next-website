// FILE: app/our-services/classification/ship-register/components/ShipParticularContent.tsx

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Badge from "./Badge";
import Pill from "./Pill";
import { classes } from "@/utils/string";
import GeneralTab from "../tabs/GeneralTab";
import HullDataTab from "../tabs/HullDataTab";
import MachineryDataTab from "../tabs/MachineryDataTab";
import OwnerTab from "../tabs/OwnerTab";
import SurvetStatusTab from "../tabs/SurveyStatusTab";
import NoResultsCard from "../../components/NoResultsCard";
import { match } from "ts-pattern";
import { cn } from "@/lib/utils";
// --- 1. REMOVED: All tanstack-query and action imports ---

// Import the data types, assuming they are exported from a types file
import { ShipRegisterDetail, ShipRegisterHullData, ShipRegisterMachine, ShipRegisterOwner, ShipRegisterSurvey } from "@/types/shipRegisterResult";
import PageTransition from "@/components/page-transition";


const tabs = [
  { key: "general", label: "General Data" },
  { key: "hull", label: "Hull Data" },
  { key: "machinery", label: "Machinery Data" },
  { key: "owner", label: "Owner" },
  { key: "survey", label: "Survey Status" },
];

// 2. Define the new props interface for all the pre-fetched data
interface ShipParticularContentProps {
    shipDetail: ShipRegisterDetail | null;
    hullData: ShipRegisterHullData | null;
    machineData: ShipRegisterMachine | null;
    ownerData: ShipRegisterOwner | null;
    surveyData: ShipRegisterSurvey[] | null;
}

export function ShipParticularContent({
  shipDetail,
  hullData,
  machineData,
  ownerData,
  surveyData,
}: ShipParticularContentProps) {
  // --- 3. REMOVED: All five useQuery hooks ---

  const [activeTab, setActiveTab] = useState("general");
  const activeIndex = tabs.findIndex((tab) => tab.key === activeTab);

  // --- 4. REMOVED: The main isLoading and isError checks ---
  // The server component handles fetching. If the main detail is missing, show an error.
  if (!shipDetail) {
    return (
      <NoResultsCard
        title="Ship with this register not found"
        subtitle="Please go back and check the register number."
      />
    );
  }

  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden p-3 lg:p-5">
      <PageTransition />
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between lg:pb-4 pb-2">
        <div className="flex items-center gap-3 lg:flex-row flex-col">
          <h2 className="text-lg md:text-xl font-bold text-slate-900">
            {shipDetail.nmkpl}
          </h2>
          <Badge>
            Register No: <span className="ml-1">{shipDetail.noreg}</span>
          </Badge>
        </div>
        <div className="flex lg:flex-row flex-col gap-2 shrink-0 self-start">
          <Pill>
            <span className="mr-1 opacity-70">IMO:</span>{" "}
            {shipDetail.noimo || "-"}
          </Pill>
          <Pill>GT: {shipDetail.grt || "-"}</Pill>
          <Pill
            className={cn(
              "text-white",
              shipDetail.stat === "A" ? "!bg-green-500" : "!bg-red-500"
            )}
          >
            {match(shipDetail.stat)
              .with("A", () => "Active")
              .otherwise(() => "Inactive")}
          </Pill>
        </div>
      </div>

      {/* Tabs (No change here) */}
      <div className="border-y lg:py-3 py-2">
        <div className="flex bg-[#0A436A] text-white/50 px-1 rounded-full relative">
          <motion.div
            className="absolute inset-1 rounded-full bg-white"
            initial={false}
            animate={{
              x: `${activeIndex * 99.25}%`,
              width: `${100 / tabs.length}%`,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
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

      {/* 5. Content: Simplified to just pass the props down. No more loading skeletons. */}
      <div className="p-6 text-sm">
        {activeTab === "general" && <GeneralTab data={shipDetail} />}
        {activeTab === "hull" && <HullDataTab data={hullData} />}
        {activeTab === "machinery" && <MachineryDataTab data={machineData} />}
        {activeTab === "owner" && <OwnerTab data={ownerData} />}
        {activeTab === "survey" && <SurvetStatusTab data={surveyData} />}
      </div>
    </div>
  );
}