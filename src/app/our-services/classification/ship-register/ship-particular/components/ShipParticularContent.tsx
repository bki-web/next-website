"use client";
import {useState} from "react";

const tabs = [
    {key: "general", label: "General Data"},
    {key: "hull", label: "Hull Data"},
    {key: "machinery", label: "Machinery Data"},
    {key: "owner", label: "Owner"},
    {key: "survey", label: "Survey Status"},
];

export default function ShipParticularContent() {
    const [activeTab, setActiveTab] = useState("general");

    return (
        <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
                <div className="flex items-center">
                    <h1 className="font-bold text-xl">PROSPERO 9</h1>
                    <p className="text-sm text-gray-600">
                        Register No: <span className="font-semibold">11635</span>
                    </p>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="text-sm">
                        IMO: <span className="font-semibold">9530840</span>
                    </p>
                    <p className="text-sm">
                        GT: <span className="font-semibold">1212</span>
                    </p>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-md text-xs">
            Aktif
          </span>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex border-b">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`flex-1 py-3 text-sm font-semibold transition 
              ${
                            activeTab === tab.key
                                ? "bg-blue-900 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="p-6 text-sm">
                {activeTab === "general" && (
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p>
                                    <span className="font-semibold">Material:</span> LOGAM
                                </p>
                                <p>
                                    <span className="font-semibold">Bendera:</span> INDONESIA
                                </p>
                                <p>
                                    <span className="font-semibold">Jenis Kapal:</span>{" "}
                                    OFFSHORE SUPPORT VESSEL
                                </p>
                                <p>
                                    <span className="font-semibold">Nama Sebelumnya:</span>{" "}
                                    PUTRAJAYA SINGOSARI
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className="font-semibold">Port of Register:</span>{" "}
                                    JAKARTA
                                </p>
                                <p>
                                    <span className="font-semibold">Dual Kelas:</span> BV
                                </p>
                                <p>
                                    <span className="font-semibold">Distinctive No:</span> PMQY
                                </p>
                            </div>
                        </div>

                        <div className="border p-4 rounded bg-gray-50">
                            <p className="font-bold">Tanda Kelas & Notasi Lambung</p>
                            <p>A100 Offshore Service Vessel, SUPPLY</p>
                            <p>Uniform Deck Load = 5 t/m</p>
                        </div>
                        <div className="border p-4 rounded bg-gray-50">
                            <p className="font-bold">Ex. Dual Kelas</p>
                            <p>OFFSHORE SUPPORT VESSEL</p>
                        </div>
                    </div>
                )}

                {activeTab === "hull" && (
                    <div>
                        <p className="text-gray-600 italic">Hull Data content goes here…</p>
                    </div>
                )}

                {activeTab === "machinery" && (
                    <div>
                        <p className="text-gray-600 italic">
                            Machinery Data content goes here…
                        </p>
                    </div>
                )}

                {activeTab === "owner" && (
                    <div>
                        <p className="text-gray-600 italic">Owner data content goes here…</p>
                    </div>
                )}

                {activeTab === "survey" && (
                    <div>
                        <p className="text-gray-600 italic">
                            Survey status content goes here…
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
