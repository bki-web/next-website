"use client";
import {useCallback, useState} from "react";
import {BookOpen, FileText, FolderOpen} from "lucide-react";
import Link from "next/link";
import Accordion from "@/components/Accordion";

type DocItem = { id: string; label: string; href?: string };
type SubGroup = { id: string; title: string; docs: DocItem[] };
type Section = { id: string; title: string; groups: SubGroup[] };

const DATA: Section[] = [
    {
        id: "part-0",
        title: "Part 0. General",
        groups: [
            {
                id: "gcn",
                title: "Guidance for Class Notations ( Pt. 0, Vol.B )",
                docs: [
                    {
                        id: "gcn-jan-2025",
                        label: "Guidance for Class Notations ( Pt. 0, Vol.B ) Jan 2025",
                        href: "https://rules-api.bki.co.id/v1/publication?path=ZXlKcGRpSTZJa0pMWW5KQldHaHdkMEpXV2pncmRXUTVha3BxU2xFOVBTSXNJblpoYkhWbElqb2liMGx0ZEhKNGFHdGFjSFpxZEZNM1RraENPV3cxWmxwVmIweGhlQ3QyZDNoQlZsVjFUMHBSZWtSbGRqZ3JOa3hPY1cxdVVXSjFaRXBYV1hSTFNWWk1aa1ZxZEVveVIzRmlibGhEWm1acmNUTjBLMkl3U1U1NWJHTjBVazFWVUhaWFpqTklhR1UwTXpNNWNqUkpTM2xhY21ab1FXOW9PVlpJZFVRM1NYY3JaRmh4YVdKTGQyWjVRVVo0TlZad2VHSk5WR05aTWtJdlVsWXhaV1ZLYVdoUmJ6RjVUV1ozZUZKVU4xbzJhWFJVYmxONFdIbGFlbXhoY2xsWU9VcGxNbWtySWl3aWJXRmpJam9pWVdRMVptUmhNbVUyWlRnNVlUWmpaREEyTW1Vd01qRTVPV1kxTUdRMll6WXpOVGRsT1dZNFpEZ3hPV1U1WkRNeVpUSTBaR1JtTTJVMVlqUTBaalJtWVNJc0luUmhaeUk2SWlKOQ,,&act=view&app=252f31d48ff053e3a7bba35251ad78d1",
                    },
                ],
            },
        ],
    },

    {
        id: "part-1",
        title: "Part 1. Seagoing Ship",
        groups: [
            {
                id: "pt1-vol1",
                title: "Rules for Classification and Surveys ( Pt. 1, Vol.I )",
                docs: [
                    {
                        id: "pt1-vol1-2025-07",
                        label: "Rules for Classification and Surveys ( Pt. 1, Vol.I ) Jul 2025",
                        href: "#"
                    },
                    {
                        id: "pt1-vol1-2022-id",
                        label: "Rules for Classification and Surveys (ID) ( Pt. 1, Vol.I ) 2022",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol2",
                title: "Rules for Hull ( Pt. 1, Vol.II )",
                docs: [
                    {id: "pt1-vol2-2025-07", label: "Rules for Hull ( Pt. 1, Vol.II ) Jul 2025", href: "#"},
                    {id: "pt1-vol2-2022-id", label: "Rules for Hull (ID) ( Pt. 1, Vol.II ) 2022", href: "#"},
                ],
            },
            {
                id: "pt1-vol3",
                title: "Rules for Machinery Installations ( Pt. 1, Vol.III )",
                docs: [
                    {
                        id: "pt1-vol3-2025-07",
                        label: "Rules for Machinery Installations ( Pt. 1, Vol.III ) Jul 2025",
                        href: "#"
                    },
                    {
                        id: "pt1-vol3-2022-id",
                        label: "Rules for Machinery Installations (ID) ( Pt. 1, Vol.III ) 2022",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol4",
                title: "Rules for Electrical Installations ( Pt. 1, Vol.IV )",
                docs: [
                    {
                        id: "pt1-vol4-2025-07",
                        label: "Rules for Electrical Installations ( Pt. 1, Vol.IV ) Jul 2025",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol5",
                title: "Rules for Materials ( Pt. 1, Vol.V )",
                docs: [
                    {id: "pt1-vol5-2025-01", label: "Rules for Materials ( Pt. 1, Vol.V ) Jan 2025", href: "#"},
                    {
                        id: "pt1-vol5-2025-03-corr",
                        label: "Corigenda Rules for Materials ( Pt. 1, Vol.V ), Mar 2025",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol6",
                title: "Rules for Welding ( Pt. 1, Vol.VI )",
                docs: [
                    {id: "pt1-vol6-2024-01", label: "Rules for Welding ( Pt. 1, Vol.VI ) Jan 2024", href: "#"},
                    {id: "pt1-vol6-2022-id", label: "Rules for Welding (ID) ( Pt. 1, Vol.VI ) 2022", href: "#"},
                ],
            },
            {
                id: "pt1-vol7",
                title: "Rules for Automation ( Pt. 1, Vol.VII )",
                docs: [
                    {id: "pt1-vol7-2025-01", label: "Rules for Automation ( Pt. 1, Vol.VII ) Jan 2025", href: "#"},
                ],
            },
            {
                id: "pt1-vol8",
                title: "Rules for Refrigerating Installation ( Pt. 1, Vol.VIII )",
                docs: [
                    {
                        id: "pt1-vol8-2018-04",
                        label: "Rules for Refrigerating Installation ( Pt. 1, Vol.VIII ) Apr 2018",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol9",
                title: "Rules for Ships Carrying Liquefied Gases in Bulk ( Pt. 1, Vol.IX )",
                docs: [
                    {
                        id: "pt1-vol9-2024-07-amd",
                        label: "Amendment Rules for Ships Carrying Liquefied Gases in Bulk ( Pt. 1, Vol.IX ), Jul 2024",
                        href: "#"
                    },
                    {
                        id: "pt1-vol9-2023-01-amd",
                        label: "Amendment Rules for Ships Carrying Liquefied Gases in Bulk ( Pt. 1, Vol.IX ), Jan 2023",
                        href: "#"
                    },
                    {
                        id: "pt1-vol9-2022-corr",
                        label: "Corigenda Rules for Ships Carrying Liquefied Gases in Bulk ( Pt. 1, Vol.IX ), 2022",
                        href: "#"
                    },
                    {
                        id: "pt1-vol9-2022",
                        label: "Rules for Ships Carrying Liquefied Gases in Bulk ( Pt. 1, Vol.IX ) 2022",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol10",
                title: "Rules for Ships Carrying Dangerous Chemicals in Bulk ( Pt. 1, Vol.X )",
                docs: [
                    {
                        id: "pt1-vol10-2023-07",
                        label: "Rules for Ships Carrying Dangerous Chemicals in Bulk ( Pt. 1, Vol.X ) Jul 2023",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol11",
                title: "Rules for Approval of Manufacturers and Service Suppliers ( Pt. 1, Vol.XI )",
                docs: [
                    {
                        id: "pt1-vol11-2025-07",
                        label: "Rules for Approval of Manufacturers and Service Suppliers ( Pt. 1, Vol.XI ) Jul 2025",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol12",
                title: "Rules for Fishing Vessels ( Pt. 1, Vol.XII )",
                docs: [
                    {id: "pt1-vol12-2003", label: "Rules for Fishing Vessels ( Pt. 1, Vol.XII ) 2003", href: "#"},
                ],
            },
            {
                id: "pt1-vol13",
                title: "Regulation for The Redundant Propulsion and Steering Systems ( Pt. 1, Vol.XIII )",
                docs: [
                    {
                        id: "pt1-vol13-2002",
                        label: "Regulation for The Redundant Propulsion and Steering Systems ( Pt. 1, Vol.XIII ) 2002",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol14",
                title: "Rules for Non - Metalic Materials ( Pt. 1, Vol.XIV )",
                docs: [
                    {
                        id: "pt1-vol14-2025-07",
                        label: "Rules for Non - Metalic Materials ( Pt. 1, Vol.XIV ) Jul 2025",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol15",
                title: "IACS Common Structural Rules For Bulk Carriers ( Pt. 1, Vol.XV )",
                docs: [
                    {
                        id: "pt1-vol15-2014",
                        label: "IACS Common Structural Rules For Bulk Carriers ( Pt. 1, Vol.XV ) 2014",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol16",
                title: "IACS Common Structural Rules For Double Hull Oil Tankers ( Pt. 1, Vol.XVI )",
                docs: [
                    {
                        id: "pt1-vol16-2014",
                        label: "IACS Common Structural Rules For Double Hull Oil Tankers ( Pt. 1, Vol.XVI ) 2014",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol17",
                title: "Common Structural Rules for Bulk Carrier and Oil Tanker ( Pt. 1, Vol.XVII )",
                docs: [
                    {
                        id: "pt1-vol17-2025-08-corr",
                        label: "Corigenda Common Structural Rules for Bulk Carrier and Oil Tanker ( Pt. 1, Vol.XVII ), Aug 2025",
                        href: "#"
                    },
                    {
                        id: "pt1-vol17-2024-07",
                        label: "Common Structural Rules for Bulk Carrier and Oil Tanker ( Pt. 1, Vol.XVII ) Jul 2024",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol18",
                title: "Rules for Container Ships ( Pt. 1, Vol.XVIII )",
                docs: [
                    {
                        id: "pt1-vol18-2025-07",
                        label: "Rules for Container Ships ( Pt. 1, Vol.XVIII ) Jul 2025",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol1-guidelines",
                title: "Guidelines for the Use of Gas or other Low-Flashpoint Fuels for Ships ( Pt. 1, Vol.1 )",
                docs: [
                    {
                        id: "pt1-vol1-2025-01",
                        label: "Guidelines for the Use of Gas or other Low-Flashpoint Fuels for Ships ( Pt. 1, Vol.1 ) Jan 2025",
                        href: "#"
                    },
                    {
                        id: "pt1-vol1-2025-04-amd",
                        label: "Amendment Guidelines for the Use of Gas or other Low-Flashpoint Fuels for Ships ( Pt. 1, Vol.1 ), Apr 2025",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-vol3-guidelines",
                title: "Guidelines for Machinery Conditioning Monitoring ( Pt. 1, Vol.3 )",
                docs: [{
                    id: "pt1-vol3-2011",
                    label: "Guidelines for Machinery Conditioning Monitoring ( Pt. 1, Vol.3 ) 2011",
                    href: "#"
                }],
            },
            {
                id: "pt1-vol5-guidelines",
                title: "Guidelines for the Carriage of Refrigerated Containers on Board Ships ( Pt. 1, Vol.5 )",
                docs: [{
                    id: "pt1-vol5-2004",
                    label: "Guidelines for the Carriage of Refrigerated Containers on Board Ships ( Pt. 1, Vol.5 ) 2004",
                    href: "#"
                }],
            },
            {
                id: "pt1-vol6-guidelines",
                title: "Guidelines for Analysis Techniques Strength ( Pt. 1, Vol.6 )",
                docs: [{
                    id: "pt1-vol6-2005",
                    label: "Guidelines for Analysis Techniques Strength ( Pt. 1, Vol.6 ) 2005",
                    href: "#"
                }],
            },
            {
                id: "pt1-vol10-guidelines",
                title: "Guidelines for Ships Intended to Carry Compressed Natural Gases in Bulk ( Pt. 1, Vol.10 )",
                docs: [{
                    id: "pt1-vol10-2017-01",
                    label: "Guidelines for Ships Intended to Carry Compressed Natural Gases in Bulk ( Pt. 1, Vol.10 ) Jan 2017",
                    href: "#"
                }],
            },
            {
                id: "pt1-vol11-guidelines",
                title: "Guidelines for Condition Assessment Program ( Pt. 1, Vol.11 )",
                docs: [{
                    id: "pt1-vol11-2015-01",
                    label: "Guidelines for Condition Assessment Program ( Pt. 1, Vol.11 ) Jan 2015",
                    href: "#"
                }],
            },
            {
                id: "pt1-vol12-guidelines",
                title: "Guidelines for Safe Ocean Towing ( Pt. 1, Vol.12 )",
                docs: [{
                    id: "pt1-vol12-2021-07",
                    label: "Guidelines for Safe Ocean Towing ( Pt. 1, Vol.12 ) Jul 2021",
                    href: "#"
                }],
            },
            {
                id: "pt1-vol13-guidelines",
                title: "Guidelines for Ship Recycling Facilities ( Pt. 1, Vol.13 )",
                docs: [{
                    id: "pt1-vol13-2024-07",
                    label: "Guidelines for Ship Recycling Facilities ( Pt. 1, Vol.13 ) Jul 2024",
                    href: "#"
                }],
            },
            {
                id: "pt1-vol14-guidelines",
                title: "Guidelines for Electric Vehicle Carrier ( Pt. 1, Vol.14 )",
                docs: [{
                    id: "pt1-vol14-2024-09",
                    label: "Guidelines for Electric Vehicle Carrier ( Pt. 1, Vol.14 ) Sep 2024",
                    href: "#"
                }],
            },
            {
                id: "pt1-vol15-guidelines",
                title: "Guidelines for Inventory of Hazardous Materials ( Pt. 1, Vol.15 )",
                docs: [{
                    id: "pt1-vol15-2024-10",
                    label: "Guidelines for Inventory of Hazardous Materials ( Pt. 1, Vol.15 ) Oct 2024",
                    href: "#"
                }],
            },
            {
                id: "pt1-volA-guidance",
                title: "Guidance for Ventilation System on Board Seagoing Ships ( Pt. 1, Vol.A )",
                docs: [{
                    id: "pt1-volA-2025-07",
                    label: "Guidance for Ventilation System on Board Seagoing Ships ( Pt. 1, Vol.A ) Jul 2025",
                    href: "#"
                }],
            },
            {
                id: "pt1-volB-guidance",
                title: "Guidance for Sea Trials of Motor Vessels ( Pt. 1, Vol.B )",
                docs: [{
                    id: "pt1-volB-2019",
                    label: "Guidance for Sea Trials of Motor Vessels ( Pt. 1, Vol.B ) 2019",
                    href: "#"
                }],
            },
            {
                id: "pt1-volC-guidance",
                title: "Guidance for Ultrasonic Thickness Measurement Report ( Pt. 1, Vol.C )",
                docs: [{
                    id: "pt1-volC-2006",
                    label: "Guidance for Ultrasonic Thickness Measurement Report ( Pt. 1, Vol.C ) 2006",
                    href: "#"
                }],
            },
            {
                id: "pt1-volD-guidance",
                title: "Guidance for the Inspection of Anchor Chain Cables ( Pt. 1, Vol.D )",
                docs: [{
                    id: "pt1-volD-2002",
                    label: "Guidance for the Inspection of Anchor Chain Cables ( Pt. 1, Vol.D ) 2002",
                    href: "#"
                }],
            },
            {
                id: "pt1-volG-guidance",
                title: "Guidance for the Corrosion Protection and Coating Systems ( Pt. 1, Vol.G )",
                docs: [{
                    id: "pt1-volG-2025-07",
                    label: "Guidance for the Corrosion Protection and Coating Systems ( Pt. 1, Vol.G ) Jul 2025",
                    href: "#"
                }],
            },
            {
                id: "pt1-volI-id",
                title: "Petunjuk Klasifikasi dan Survey Kapal Notasi A90 dan A80 ( Pt. 1, Vol.I )",
                docs: [{
                    id: "pt1-volI-2015-07",
                    label: "Petunjuk Klasifikasi dan Survey Kapal Notasi A90 dan A80 ( Pt. 1, Vol.I ) Jul 2015",
                    href: "#"
                }],
            },
            {
                id: "pt1-volP-guidance",
                title: "Guidance for Calculation of Diesel Engine Crankshaft ( Pt. 1, Vol.P )",
                docs: [{
                    id: "pt1-volP-2018-07",
                    label: "Guidance for Calculation of Diesel Engine Crankshaft ( Pt. 1, Vol.P ) Jul 2018",
                    href: "#"
                }],
            },
            {
                id: "pt1-volV-guidance",
                title: "Guidance for the Design, Construction and Testing of Pumps ( Pt. 1, Vol.V )",
                docs: [{
                    id: "pt1-volV-2024-04",
                    label: "Guidance for the Design, Construction and Testing of Pumps ( Pt. 1, Vol.V ) Apr 2024",
                    href: "#"
                }],
            },
            {
                id: "pt1-volW-guidance",
                title: "Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W )",
                docs: [
                    {
                        id: "pt1-volW-2025-01-amd",
                        label: "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ), Jan 2025",
                        href: "#"
                    },
                    {
                        id: "pt1-volW-2024-07-amd",
                        label: "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ), Jul 2024",
                        href: "#"
                    },
                    {
                        id: "pt1-volW-2024-01-amd",
                        label: "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ), Jan 2024",
                        href: "#"
                    },
                    {
                        id: "pt1-volW-2023-07-amd-1",
                        label: "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ), Jul 2023",
                        href: "#"
                    },
                    {
                        id: "pt1-volW-2023-07-amd-2",
                        label: "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ), Jul 2023",
                        href: "#"
                    },
                    {
                        id: "pt1-volW-2022-01-amd",
                        label: "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ), Jan 2022",
                        href: "#"
                    },
                    {
                        id: "pt1-volW-2022",
                        label: "Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ) 2022",
                        href: "#"
                    },
                    {
                        id: "pt1-volW-2022-amd",
                        label: "Amendment Guidance for The Approval and Type Approval of Materials and Equipment for Marine Use ( Pt. 1, Vol.W ), 2022",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-volX-id",
                title: "Petunjuk Pelaksanaan Standar Pengukuran Ketebalan Konstruksi Lambung ( Pt. 1, Vol.X )",
                docs: [{
                    id: "pt1-volX-2019",
                    label: "Petunjuk Pelaksanaan Standar Pengukuran Ketebalan Konstruksi Lambung ( Pt. 1, Vol.X ) 2019",
                    href: "#"
                }],
            },
            {
                id: "pt1-volY-guidance",
                title: "Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y )",
                docs: [
                    {
                        id: "pt1-volY-2025-05-amd",
                        label: "Amendment Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ), May 2025",
                        href: "#"
                    },
                    {
                        id: "pt1-volY-2024-04-amd",
                        label: "Amendment Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ), Apr 2024",
                        href: "#"
                    },
                    {
                        id: "pt1-volY-2024-10-amd",
                        label: "Amendment Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ), Oct 2024",
                        href: "#"
                    },
                    {
                        id: "pt1-volY-2023-11-amd",
                        label: "Amendment Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ), Nov 2023",
                        href: "#"
                    },
                    {
                        id: "pt1-volY-2023-03-amd",
                        label: "Amendment Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ), Mar 2023",
                        href: "#"
                    },
                    {
                        id: "pt1-volY-2022-10-amd",
                        label: "Amendment Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ), Oct 2022",
                        href: "#"
                    },
                    {
                        id: "pt1-volY-2022-amd",
                        label: "Amendment Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ), 2022",
                        href: "#"
                    },
                    {
                        id: "pt1-volY-2022",
                        label: "Guidance for Code and Convention Interpretation ( Pt. 1, Vol.Y ) 2022",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt1-volZ-guidance",
                title: "Guidance on Review and Approval of Novel Design ( Pt. 1, Vol.Z )",
                docs: [{
                    id: "pt1-volZ-2023-07",
                    label: "Guidance on Review and Approval of Novel Design ( Pt. 1, Vol.Z ) Jul 2023",
                    href: "#"
                }],
            },
            {
                id: "pt1-volAA-guidance",
                title: "Guidance for Design Wave Load on Ship Structures ( Pt. 1, Vol.AA )",
                docs: [{
                    id: "pt1-volAA-2025-07",
                    label: "Guidance for Design Wave Load on Ship Structures ( Pt. 1, Vol.AA ) Jul 2025",
                    href: "#"
                }],
            },
            {
                id: "pt1-volAB-guidance",
                title: "Guidance for Sloshing Assessment ( Pt. 1, Vol.AB )",
                docs: [{
                    id: "pt1-volAB-2023-07",
                    label: "Guidance for Sloshing Assessment ( Pt. 1, Vol.AB ) Jul 2023",
                    href: "#"
                }],
            },
            {
                id: "pt1-volAC-guidance",
                title: "Guidance for Marine Industry ( Pt. 1, Vol.AC )",
                docs: [{
                    id: "pt1-volAC-2025-01",
                    label: "Guidance for Marine Industry ( Pt. 1, Vol.AC ) Jan 2025",
                    href: "#"
                }],
            },
        ],
    },

    {
        id: "part-2",
        title: "Part 2. Inland Waterway",
        groups: [
            {
                id: "pt2-vol1",
                title: "Rules for Inland Waterway Classification and Surveys ( Pt. 2, Vol.I )",
                docs: [
                    {
                        id: "pt2-vol1-2015-07",
                        label: "Rules for Inland Waterway Classification and Surveys ( Pt. 2, Vol.I ) Jul 2015",
                        href: "#",
                    },
                ],
            },
            {
                id: "pt2-vol2",
                title: "Rules for Inland Waterway Vessels-Hull Construction ( Pt. 2, Vol.II )",
                docs: [
                    {
                        id: "pt2-vol2-2015-07",
                        label: "Rules for Inland Waterway Vessels-Hull Construction ( Pt. 2, Vol.II ) Jul 2015",
                        href: "#",
                    },
                ],
            },
            {
                id: "pt2-vol3",
                title: "Rules for Inland Waterway Vessels-Machinery Installation ( Pt. 2, Vol.III )",
                docs: [
                    {
                        id: "pt2-vol3-2015-07",
                        label: "Rules for Inland Waterway Vessels-Machinery Installation ( Pt. 2, Vol.III ) Jul 2015",
                        href: "#",
                    },
                ],
            },
            {
                id: "pt2-vol4",
                title: "Rules for Inland Waterway Vessels-Electrical Installation ( Pt. 2, Vol.IV )",
                docs: [
                    {
                        id: "pt2-vol4-2015-07",
                        label: "Rules for Inland Waterway Vessels-Electrical Installation ( Pt. 2, Vol.IV ) Jul 2015",
                        href: "#",
                    },
                ],
            },
            {
                id: "pt2-vol5",
                title: "Rules for Inland Waterway Additional Requirements of Notations ( Pt. 2, Vol.V )",
                docs: [
                    {
                        id: "pt2-vol5-2015-07",
                        label: "Rules for Inland Waterway Additional Requirements of Notations ( Pt. 2, Vol.V ) Jul 2015",
                        href: "#",
                    },
                ],
            },
        ],
    },

    {
        id: "part-3",
        title: "Part 3. Special Ships",
        groups: [
            {
                id: "pt3-vol1",
                title: "Rules for Oil Recovery Vessels ( Pt. 3, Vol.I )",
                docs: [
                    {id: "pt3-vol1-2005", label: "Rules for Oil Recovery Vessels ( Pt. 3, Vol.I ) 2005", href: "#"},
                ],
            },
            {
                id: "pt3-vol2",
                title: "Rules for Floating Dock ( Pt. 3, Vol.II )",
                docs: [
                    {id: "pt3-vol2-2019", label: "Rules for Floating Dock ( Pt. 3, Vol.II ) 2019", href: "#"},
                ],
            },
            {
                id: "pt3-vol3",
                title: "Rules for High Speed Craft ( Pt. 3, Vol.III )",
                docs: [
                    {
                        id: "pt3-vol3-2023-07-amd",
                        label: "Amendment Rules for High Speed Craft ( Pt. 3, Vol.III ), Jul 2023",
                        href: "#"
                    },
                    {id: "pt3-vol3-2022", label: "Rules for High Speed Craft ( Pt. 3, Vol.III ) 2022", href: "#"},
                ],
            },
            {
                id: "pt3-vol5",
                title: "Rules for Fiberglass Reinforced Plastics Ships ( Pt. 3, Vol.V )",
                docs: [
                    {
                        id: "pt3-vol5-2021",
                        label: "Rules for Fiberglass Reinforced Plastics Ships ( Pt. 3, Vol.V ) 2021",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt3-vol6",
                title: "Peraturan Kapal Kayu ( Pt. 3, Vol.VI )",
                docs: [
                    {id: "pt3-vol6-2023-07", label: "Peraturan Kapal Kayu ( Pt. 3, Vol.VI ) Jul 2023", href: "#"},
                ],
            },
            {
                id: "pt3-vol7",
                title: "Rules for Small Vessels up to 24 m ( Pt. 3, Vol.VII )",
                docs: [
                    {
                        id: "pt3-vol7-2021-01",
                        label: "Rules for Small Vessels up to 24 m ( Pt. 3, Vol.VII ) Jan 2021",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt3-vol8",
                title: "Rules for Classification and Construction of WIG CRAFT ( Pt. 3, Vol.VIII )",
                docs: [
                    {
                        id: "pt3-vol8-2006",
                        label: "Rules for Classification and Construction of WIG CRAFT ( Pt. 3, Vol.VIII ) 2006",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt3-vol9",
                title: "Rules for Yacht ( Pt. 3, Vol.IX )",
                docs: [
                    {id: "pt3-vol9-2019-07", label: "Rules for Yacht ( Pt. 3, Vol.IX ) Jul 2019", href: "#"},
                ],
            },
            {
                id: "pt3-vol10",
                title: "Rules for Crew Boats ( Pt. 3, Vol.X )",
                docs: [
                    {id: "pt3-vol10-2020-09", label: "Rules for Crew Boats ( Pt. 3, Vol.X ) Sep 2020", href: "#"},
                ],
            },
            {
                id: "pt3-vol11",
                title: "Rules for Patrol Boat ( Pt. 3, Vol.XI )",
                docs: [
                    {id: "pt3-vol11-2020-08", label: "Rules for Patrol Boat ( Pt. 3, Vol.XI ) Aug 2020", href: "#"},
                ],
            },
            {
                id: "pt3-vol1-guidelines",
                title: "Guidelines for Autonomous Ships ( Pt. 3, Vol.1 )",
                docs: [
                    {id: "pt3-vol1-2020", label: "Guidelines for Autonomous Ships ( Pt. 3, Vol.1 ) 2020", href: "#"},
                ],
            },
            {
                id: "pt3-vol2-guidelines",
                title: "Guidelines for Thermoplastic Vessels ( Pt. 3, Vol.2 )",
                docs: [
                    {
                        id: "pt3-vol2-2023-12",
                        label: "Guidelines for Thermoplastic Vessels ( Pt. 3, Vol.2 ) Dec 2023",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt3-volA-guidance",
                title: "Guidance for FRP and Wooden Fishing Vessel up to 24 m ( Pt. 3, Vol.A )",
                docs: [
                    {
                        id: "pt3-volA-2022",
                        label: "Guidance for FRP and Wooden Fishing Vessel up to 24 m ( Pt. 3, Vol.A ) 2022",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt3-volB-guidance",
                title: "Guidance for Certification of FRP Fishing Vessel less than 12 m ( Pt. 3, Vol.B )",
                docs: [
                    {
                        id: "pt3-volB-2020-03",
                        label: "Guidance for Certification of FRP Fishing Vessel less than 12 m ( Pt. 3, Vol.B ) Mar 2020",
                        href: "#"
                    },
                ],
            },
        ],
    },

    {
        id: "part-4",
        title: "Part 4. Special Equipment and System",
        groups: [
            {
                id: "pt4-vol1",
                title: "Rules for Stowage and Lashing of Containers ( Pt. 4, Vol.I )",
                docs: [
                    {
                        id: "pt4-vol1-2025-01",
                        label: "Rules for Stowage and Lashing of Containers ( Pt. 4, Vol.I ) Jan 2025",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt4-vol2",
                title: "Rules for Dinamics Positioning Systems ( Pt. 4, Vol.II )",
                docs: [
                    {
                        id: "pt4-vol2-2011",
                        label: "Rules for Dinamics Positioning Systems ( Pt. 4, Vol.II ) 2011",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt4-vol1-guidelines",
                title: "Guidelines for Certification of Loading Computer System ( Pt. 4, Vol.1 )",
                docs: [
                    {
                        id: "pt4-vol1-2023-07-amd",
                        label: "Amendment Guidelines for Certification of Loading Computer System ( Pt. 4, Vol.1 ), Jul 2023",
                        href: "#"
                    },
                    {
                        id: "pt4-vol1-2021",
                        label: "Guidelines for Certification of Loading Computer System ( Pt. 4, Vol.1 ) 2021",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt4-vol2-guidelines",
                title: "Guidelines for the Bridge Arrangement and Equipment on Seagoing Ships ( Pt. 4, Vol.2 )",
                docs: [
                    {
                        id: "pt4-vol2-2022-01-amd",
                        label: "Amendment Guidelines for the Bridge Arrangement and Equipment on Seagoing Ships ( Pt. 4, Vol.2 ), Jan 2022",
                        href: "#"
                    },
                    {
                        id: "pt4-vol2-2022",
                        label: "Guidelines for the Bridge Arrangement and Equipment on Seagoing Ships ( Pt. 4, Vol.2 ) 2022",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt4-vol3-guidelines",
                title: "Guidelines for Loading Gear on Seagoing Ships and Offshore Installations ( Pt. 4, Vol.3 )",
                docs: [
                    {
                        id: "pt4-vol3-2025-07",
                        label: "Guidelines for Loading Gear on Seagoing Ships and Offshore Installations ( Pt. 4, Vol.3 ) Jul 2025",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt4-vol4-guidelines",
                title: "Guidelines for Maritime Cybersecurity ( Pt. 4, Vol.4 )",
                docs: [
                    {
                        id: "pt4-vol4-2021-03",
                        label: "Guidelines for Maritime Cybersecurity ( Pt. 4, Vol.4 ) Mar 2021",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt4-vol5-guidelines",
                title: "Guidelines for Shiplift and Transfer Systems ( Pt. 4, Vol.5 )",
                docs: [
                    {
                        id: "pt4-vol5-2022",
                        label: "Guidelines for Shiplift and Transfer Systems ( Pt. 4, Vol.5 ) 2022",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt4-volA-guidance",
                title: "Guidance for Risk Assessment Application for the Marine and Offshore Industries ( Pt. 4, Vol.A )",
                docs: [
                    {
                        id: "pt4-volA-2025-07",
                        label: "Guidance for Risk Assessment Application for the Marine and Offshore Industries ( Pt. 4, Vol.A ) Jul 2025",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt4-volC-guidance",
                title: "Guidance for Equipment on Fire Fighting Ship ( Pt. 4, Vol.C )",
                docs: [
                    {
                        id: "pt4-volC-2018-07",
                        label: "Guidance for Equipment on Fire Fighting Ship ( Pt. 4, Vol.C ) Jul 2018",
                        href: "#"
                    },
                ],
            },
        ],
    },

    {
        id: "part-5",
        title: "Part 5. Offshore Technology",
        groups: [
            {
                id: "pt5-vol1",
                title: "Rules for Classification and Surveys ( Pt. 5, Vol.I )",
                docs: [
                    {
                        id: "pt5-vol1-2024-01",
                        label: "Rules for Classification and Surveys ( Pt. 5, Vol.I ) Jan 2024",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt5-vol2",
                title: "Rules for Structures ( Pt. 5, Vol.II )",
                docs: [
                    {id: "pt5-vol2-2011", label: "Rules for Structures ( Pt. 5, Vol.II ) 2011", href: "#"},
                ],
            },
            {
                id: "pt5-vol4",
                title: "Rules for Machinery Installations ( Pt. 5, Vol.IV )",
                docs: [
                    {id: "pt5-vol4-2011", label: "Rules for Machinery Installations ( Pt. 5, Vol.IV ) 2011", href: "#"},
                ],
            },
            {
                id: "pt5-vol5",
                title: "Rules for Electrical Installations ( Pt. 5, Vol.V )",
                docs: [
                    {id: "pt5-vol5-2011", label: "Rules for Electrical Installations ( Pt. 5, Vol.V ) 2011", href: "#"},
                ],
            },
            {
                id: "pt5-vol6",
                title: "Rules for Mobile Offshore Units ( Pt. 5, Vol.VI )",
                docs: [
                    {
                        id: "pt5-vol6-2025-01",
                        label: "Rules for Mobile Offshore Units ( Pt. 5, Vol.VI ) Jan 2025",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt5-vol7",
                title: "Rules for Fixed Offshore Installation ( Pt. 5, Vol.VII )",
                docs: [
                    {
                        id: "pt5-vol7-2011",
                        label: "Rules for Fixed Offshore Installation ( Pt. 5, Vol.VII ) 2011",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt5-vol9",
                title: "Rules for Single Point Mooring ( Pt. 5, Vol.IX )",
                docs: [
                    {
                        id: "pt5-vol9-2025-01",
                        label: "Rules for Single Point Mooring ( Pt. 5, Vol.IX ) Jan 2025",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt5-vol12",
                title: "Rules for Facilities on Offshore Installations ( Pt. 5, Vol.XII )",
                docs: [
                    {
                        id: "pt5-vol12-2013",
                        label: "Rules for Facilities on Offshore Installations ( Pt. 5, Vol.XII ) 2013",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt5-vol2-guidelines",
                title: "Guidelines for Floating Offshore Liquefied Gas Terminals ( Pt. 5, Vol.2 )",
                docs: [
                    {
                        id: "pt5-vol2-2021",
                        label: "Guidelines for Floating Offshore Liquefied Gas Terminals ( Pt. 5, Vol.2 ) 2021",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt5-vol3-guidelines",
                title: "Guidelines for Floating Production Installations ( Pt. 5, Vol.3 )",
                docs: [
                    {
                        id: "pt5-vol3-2025-07",
                        label: "Guidelines for Floating Production Installations ( Pt. 5, Vol.3 ) Jul 2025",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt5-vol4-guidelines",
                title: "Guidelines for Aquaculture ( Pt. 5, Vol.4 )",
                docs: [
                    {id: "pt5-vol4-2022", label: "Guidelines for Aquaculture ( Pt. 5, Vol.4 ) 2022", href: "#"},
                ],
            },
            {
                id: "pt5-volA-guidance",
                title: "Guidance for Survey Using Risk-Based Inspection for the Offshore Industry ( Pt. 5, Vol.A )",
                docs: [
                    {
                        id: "pt5-volA-2012",
                        label: "Guidance for Survey Using Risk-Based Inspection for the Offshore Industry ( Pt. 5, Vol.A ) 2012",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt5-volB-guidance",
                title: "Guidance for Fatigue Assessment of Offshore Structures ( Pt. 5, Vol.B )",
                docs: [
                    {
                        id: "pt5-volB-2015-02",
                        label: "Guidance for Fatigue Assessment of Offshore Structures ( Pt. 5, Vol.B ) Feb 2015",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt5-volC-guidance",
                title: "Guidance for Buckling for Buckling and Ultimate Strength Assessment of Offshore Structure ( Pt. 5, Vol.C )",
                docs: [
                    {
                        id: "pt5-volC-2015-02",
                        label: "Guidance for Buckling for Buckling and Ultimate Strength Assessment of Offshore Structure ( Pt. 5, Vol.C ) Feb 2015",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt5-volD-guidance",
                title: "Guidance for Life Extension of Floating Production Installations ( Pt. 5, Vol.D )",
                docs: [
                    {
                        id: "pt5-volD-2024-04",
                        label: "Guidance for Life Extension of Floating Production Installations ( Pt. 5, Vol.D ) Apr 2024",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt5-volE-guidance",
                title: "Guidance for Position Mooring Systems ( Pt. 5, Vol.E )",
                docs: [
                    {
                        id: "pt5-volE-2024-10",
                        label: "Guidance for Position Mooring Systems ( Pt. 5, Vol.E ) Oct 2024",
                        href: "#"
                    },
                ],
            },
        ],
    },

    {
        id: "part-6",
        title: "Part 6. Statutory",
        groups: [
            {
                id: "pt6-vol2",
                title: "Rules For the Verification and Registeration of Ship Security Management System (bilingual) ( Pt. 6, Vol.II )",
                docs: [
                    {
                        id: "pt6-vol2-2004",
                        label: "Rules For the Verification and Registeration of Ship Security Management System (bilingual) ( Pt. 6, Vol.II ) 2004",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt6-vol1-guidelines",
                title: "Guidelines for The Preparation Damage Stability Calculation and Damage Control Documentation on Board ( Pt. 6, Vol.1 )",
                docs: [
                    {
                        id: "pt6-vol1-2005",
                        label: "Guidelines for The Preparation Damage Stability Calculation ... ( Pt. 6, Vol.1 ) 2005",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt6-vol3-guidelines",
                title: "Guidelines on Intact Stability ( Pt. 6, Vol.3 )",
                docs: [
                    {
                        id: "pt6-vol3-2025-07",
                        label: "Guidelines on Intact Stability ( Pt. 6, Vol.3 ) Jul 2025",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt6-vol4-guidelines",
                title: "Guidelines on Crew Accomodation ( Pt. 6, Vol.4 )",
                docs: [
                    {
                        id: "pt6-vol4-2016-02",
                        label: "Guidelines on Crew Accomodation ( Pt. 6, Vol.4 ) Feb 2016",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt6-vol5-guidelines",
                title: "Guidelines for Determination of Energy Efficiency Design Index ( Pt. 6, Vol.5 )",
                docs: [
                    {
                        id: "pt6-vol5-2024-01-amd",
                        label: "Amendment Guidelines for Determination of Energy Efficiency Design Index ( Pt. 6, Vol.5 ), Jan 2024",
                        href: "#"
                    },
                    {
                        id: "pt6-vol5-2023-01",
                        label: "Guidelines for Determination of Energy Efficiency Design Index ( Pt. 6, Vol.5 ) Jan 2023",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt6-vol6-guidelines",
                title: "Guidelines for the Audit and Registration Safety Management Systems (EN) ( Pt. 6, Vol.6 )",
                docs: [
                    {
                        id: "pt6-vol6-2017-en",
                        label: "Guidelines for the Audit and Registration Safety Management Systems (EN) ( Pt. 6, Vol.6 ) 2017",
                        href: "#"
                    },
                    {
                        id: "pt6-vol6-2017-id",
                        label: "Guidelines for the Audit and Registration Safety Management Systems (ID) ( Pt. 6, Vol.6 ) 2017",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt6-vol7-guidelines",
                title: "Guidelines for Statutory Survey and Certification ( Pt. 6, Vol.7 )",
                docs: [
                    {
                        id: "pt6-vol7-2018-01",
                        label: "Guidelines for Statutory Survey and Certification ( Pt. 6, Vol.7 ) Jan 2018",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt6-vol8-guidelines",
                title: "Guidelines for Freight Container ( Pt. 6, Vol.8 )",
                docs: [
                    {id: "pt6-vol8-2018", label: "Guidelines for Freight Container ( Pt. 6, Vol.8 ) 2018", href: "#"},
                ],
            },
            {
                id: "pt6-vol9-guidelines",
                title: "Guidelines for the Preparation of Port State Control Inspections (for Ship Owner) ( Pt. 6, Vol.9 )",
                docs: [
                    {
                        id: "pt6-vol9-2022",
                        label: "Guidelines for the Preparation of Port State Control Inspections (for Ship Owner) ( Pt. 6, Vol.9 ) 2022",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt6-vol10-guidelines",
                title: "Guidelines for Maintenance of Safety Equipment ( Pt. 6, Vol.10 )",
                docs: [
                    {
                        id: "pt6-vol10-2020-01",
                        label: "Guidelines for Maintenance of Safety Equipment ( Pt. 6, Vol.10 ) Jan 2020",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt6-volA-guidance",
                title: "Guidance for the Audit and Registration of Safety Management System ( Pt. 6, Vol.A )",
                docs: [
                    {
                        id: "pt6-volA-2017-en",
                        label: "Guidance for the Audit and Registration of Safety Management System (EN) ( Pt. 6, Vol.A ) 2017",
                        href: "#"
                    },
                    {
                        id: "pt6-volA-2017-id",
                        label: "Guidance for the Audit and Registration of Safety Management System (ID) ( Pt. 6, Vol.A ) 2017",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt6-volB-guidance",
                title: "Guidance For the Verification and Registration of Ship Security Management Systems ( Pt. 6, Vol.B )",
                docs: [
                    {
                        id: "pt6-volB-2004",
                        label: "Guidance For the Verification and Registration of Ship Security Management Systems ( Pt. 6, Vol.B ) 2004",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt6-volC-guidance",
                title: "Guidance For Inclining Test ( Pt. 6, Vol.C )",
                docs: [
                    {id: "pt6-volC-2015-10", label: "Guidance For Inclining Test ( Pt. 6, Vol.C ) Oct 2015", href: "#"},
                    {
                        id: "pt6-volC-2015-10-id",
                        label: "Petunjuk Pengujian Kemiringan ( Pt. 6, Vol.C ) Oct 2015",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt6-volG-guidance",
                title: "Guidance on Intact Stability ( Pt. 6, Vol.G )",
                docs: [
                    {id: "pt6-volG-2014", label: "Guidance on Intact Stability ( Pt. 6, Vol.G ) 2014", href: "#"},
                ],
            },
        ],
    },

    {
        id: "part-7",
        title: "Part 7. Class Notation",
        groups: [
            {
                id: "pt7-vol1-guidelines",
                title: "Guidelines for Certification of Lifting Appliances ( Pt. 7, Vol.1 )",
                docs: [
                    {
                        id: "pt7-vol1-2013",
                        label: "Guidelines for Certification of Lifting Appliances ( Pt. 7, Vol.1 ) 2013",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt7-vol2-guidelines",
                title: "Guidelines for Dynamic Loading Approach ( Pt. 7, Vol.2 )",
                docs: [
                    {
                        id: "pt7-vol2-2013",
                        label: "Guidelines for Dynamic Loading Approach ( Pt. 7, Vol.2 ) 2013",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt7-vol3-guidelines",
                title: "Guidelines for Spectral-Based Fatigue Analysis ( Pt. 7, Vol.3 )",
                docs: [
                    {
                        id: "pt7-vol3-2013",
                        label: "Guidelines for Spectral-Based Fatigue Analysis ( Pt. 7, Vol.3 ) 2013",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt7-vol4-guidelines",
                title: "Guidelines for Livestock Carriers ( Pt. 7, Vol.4 )",
                docs: [
                    {
                        id: "pt7-vol4-2015-01",
                        label: "Guidelines for Livestock Carriers ( Pt. 7, Vol.4 ) Jan 2015",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt7-volA-guidance",
                title: "Guidance for The Class Notation Helicopter Deck and Facilities (HELIL and HELIL(SRF)) ( Pt. 7, Vol.A )",
                docs: [
                    {
                        id: "pt7-volA-2013",
                        label: "Guidance for The Class Notation Helicopter Deck and Facilities (HELIL and HELIL(SRF)) ( Pt. 7, Vol.A ) 2013",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt7-volB-guidance",
                title: "Guidance For Crew Habitability On Ship ( Pt. 7, Vol.B )",
                docs: [
                    {
                        id: "pt7-volB-2025-07",
                        label: "Guidance For Crew Habitability On Ship ( Pt. 7, Vol.B ) Jul 2025",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt7-volC-guidance",
                title: "Guidance For Crew Habitability On Offshore Installation ( Pt. 7, Vol.C )",
                docs: [
                    {
                        id: "pt7-volC-2014",
                        label: "Guidance For Crew Habitability On Offshore Installation ( Pt. 7, Vol.C ) 2014",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt7-volD-guidance",
                title: "Guidance for Hull Inspection and Maintenance Program ( Pt. 7, Vol.D )",
                docs: [
                    {
                        id: "pt7-volD-2013",
                        label: "Guidance for Hull Inspection and Maintenance Program ( Pt. 7, Vol.D ) 2013",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt7-volE-guidance",
                title: "Guidance for Planned Maintenance Program ( Pt. 7, Vol.E )",
                docs: [
                    {
                        id: "pt7-volE-2013",
                        label: "Guidance for Planned Maintenance Program ( Pt. 7, Vol.E ) 2013",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt7-volF-guidance",
                title: "Guidance for the Environmental Service Systems for Ships, Offshore Units, Floating Installations and Liftboats ( Pt. 7, Vol.F )",
                docs: [
                    {
                        id: "pt7-volF-2013",
                        label: "Guidance for the Environmental Service Systems for Ships, Offshore Units, Floating Installations and Liftboats ( Pt. 7, Vol.F ) 2013",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt7-volH-guidance",
                title: "Guidance for The Class Notation Emergency Respon Service ( Pt. 7, Vol.H )",
                docs: [
                    {
                        id: "pt7-volH-2013",
                        label: "Guidance for The Class Notation Emergency Respon Service ( Pt. 7, Vol.H ) 2013",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt7-volI-guidance",
                title: "Guidance for Survey Based on Reliability-Centered Maintenance ( Pt. 7, Vol.I )",
                docs: [
                    {
                        id: "pt7-volI-2012",
                        label: "Guidance for Survey Based on Reliability-Centered Maintenance ( Pt. 7, Vol.I ) 2012",
                        href: "#"
                    },
                ],
            },
        ],
    },

    {
        id: "part-8",
        title: "Part 8. Domestic Ships",
        groups: [
            {
                id: "pt8-vol1",
                title: "Peraturan Domestik ( Pt. 8, Vol.I )",
                docs: [
                    {id: "pt8-vol1-2022", label: "Peraturan Domestik ( Pt. 8, Vol.I ) 2022", href: "#"},
                ],
            },
            {
                id: "pt8-vol1-guidelines",
                title: "Pedoman Kapal Sungai dan Danau ( Pt. 8, Vol.1 )",
                docs: [
                    {
                        id: "pt8-vol1-2022-11",
                        label: "Pedoman Kapal Sungai dan Danau ( Pt. 8, Vol.1 ) Nov 2022",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt8-volA-guidance",
                title: "Petunjuk Penilaian Risiko Kapal Domestik ( Pt. 8, Vol.A )",
                docs: [
                    {
                        id: "pt8-volA-2023-05",
                        label: "Petunjuk Penilaian Risiko Kapal Domestik ( Pt. 8, Vol.A ) May 2023",
                        href: "#"
                    },
                ],
            },
        ],
    },

    {
        id: "part-9",
        title: "Part 9. Naval Ship Technology",
        groups: [
            {
                id: "pt9-vol1-guidelines",
                title: "Guidelines for Classification and Surveys ( Pt. 9, Vol.1 )",
                docs: [
                    {
                        id: "pt9-vol1-2020-07",
                        label: "Guidelines for Classification and Surveys ( Pt. 9, Vol.1 ) Jul 2020",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt9-vol2-guidelines",
                title: "Guidelines for Hull Structures and Ship Equipment ( Pt. 9, Vol.2 )",
                docs: [
                    {
                        id: "pt9-vol2-2020-07",
                        label: "Guidelines for Hull Structures and Ship Equipment ( Pt. 9, Vol.2 ) Jul 2020",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt9-vol3-guidelines",
                title: "Guidelines for Propulsion Plants ( Pt. 9, Vol.3 )",
                docs: [
                    {
                        id: "pt9-vol3-2020-01",
                        label: "Guidelines for Propulsion Plants ( Pt. 9, Vol.3 ) Jan 2020",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt9-vol4-guidelines",
                title: "Guidelines for Electrical Installations ( Pt. 9, Vol.4 )",
                docs: [
                    {
                        id: "pt9-vol4-2020",
                        label: "Guidelines for Electrical Installations ( Pt. 9, Vol.4 ) 2020",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt9-vol5-guidelines",
                title: "Guidelines for Naval Ship Materials ( Pt. 9, Vol.5 )",
                docs: [
                    {
                        id: "pt9-vol5-2020-07",
                        label: "Guidelines for Naval Ship Materials ( Pt. 9, Vol.5 ) Jul 2020",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt9-vol6-guidelines",
                title: "Guidelines for Ship Operation Installations and Auxiliary Systems ( Pt. 9, Vol.6 )",
                docs: [
                    {
                        id: "pt9-vol6-2020-01",
                        label: "Guidelines for Ship Operation Installations and Auxiliary Systems ( Pt. 9, Vol.6 ) Jan 2020",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt9-vol7-guidelines",
                title: "Guidelines for Automations ( Pt. 9, Vol.7 )",
                docs: [
                    {id: "pt9-vol7-2020", label: "Guidelines for Automations ( Pt. 9, Vol.7 ) 2020", href: "#"},
                ],
            },
        ],
    },

    {
        id: "part-10",
        title: "Part 10. Industry",
        groups: [
            {
                id: "pt10-vol1-guidelines",
                title: "Guidelines for Medical Hyperbaric Chamber Facilities ( Pt. 10, Vol.1 )",
                docs: [
                    {
                        id: "pt10-vol1-2020-01",
                        label: "Guidelines for Medical Hyperbaric Chamber Facilities ( Pt. 10, Vol.1 ) Jan 2020",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt10-vol2-guidelines",
                title: "Guidelines for Offshore Concrete Structures ( Pt. 10, Vol.2 )",
                docs: [
                    {
                        id: "pt10-vol2-2020",
                        label: "Guidelines for Offshore Concrete Structures ( Pt. 10, Vol.2 ) 2020",
                        href: "#"
                    },
                ],
            },
            {
                id: "pt10-volA-guidance",
                title: "Petunjuk Konstruksi dan Fasilitas Pelabuhan ( Pt. 10, Vol.A )",
                docs: [
                    {
                        id: "pt10-volA-2020-01",
                        label: "Petunjuk Konstruksi dan Fasilitas Pelabuhan ( Pt. 10, Vol.A ) Jan 2020",
                        href: "#"
                    },
                ],
            },
        ],
    },
];

export default function DocumentSection() {
    // buka/tutup untuk level 1 dan level 2
    const [openTop, setOpenTop] = useState<Record<string, boolean>>({});
    const [openSub, setOpenSub] = useState<Record<string, boolean>>({});

    const toggleTop = useCallback(
        (id: string) => setOpenTop((s) => ({...s, [id]: !s[id]})),
        []
    );
    const toggleSub = useCallback(
        (id: string) => setOpenSub((s) => ({...s, [id]: !s[id]})),
        []
    );

    return (
        <section className="relative 2xl:px-28 lg:px-20 px-4 2xl:py-20 lg:py-16 py-12 bg-white flex flex-col gap-4">
            {DATA.map((sec) => {
                const isOpenTop = openTop[sec.id];
                return (
                    <div
                        key={sec.id}
                        className="rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-white"
                    >
                        {/* Part Header */}
                        <div className="bg-gradient-to-r from-[#0A436A] to-[#145d8a] px-4">
                            <Accordion
                                icon={<FolderOpen size={20} color={"white"}/>}
                                title={sec.title}
                                description=""
                                isOpen={isOpenTop}
                                onToggle={() => toggleTop(sec.id)}
                                titleClass="!text-white text-xl font-semibold"
                                iconClass="!text-white"
                                descriptionClass="hidden"
                            />
                        </div>

                        {/* Subgroups */}
                        {isOpenTop && (
                            <div className="divide-y divide-gray-100 bg-gray-50">
                                {sec.groups.map((grp) => {
                                    const isOpenSub = openSub[grp.id];
                                    return (
                                        <div key={grp.id} className="bg-white">
                                            <div className="bg-gray-100 px-4">
                                                <Accordion
                                                    icon={<BookOpen size={18}/>}
                                                    title={grp.title}
                                                    description=""
                                                    isOpen={isOpenSub}
                                                    onToggle={() => toggleSub(grp.id)}
                                                    titleClass="!text-gray-800 text-base"
                                                    iconClass="!text-[#0A436A]"
                                                    descriptionClass="hidden"
                                                />
                                            </div>

                                            {isOpenSub && (
                                                <div className="grid gap-3 px-6 py-4 md:grid-cols-2">
                                                    {grp.docs.map((doc) => (
                                                        <Link
                                                            key={doc.id}
                                                            href={doc.href ?? "#"}
                                                            className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm transition hover:border-[#0A436A] hover:shadow-md"
                                                        >
                              <span className="flex items-center gap-3">
                                <FileText className="h-5 w-5 text-[#0A436A]"/>
                                <span className="text-sm font-medium text-gray-800 group-hover:underline">
                                  {doc.label}
                                </span>
                              </span>
                                                            {/* Year badge */}
                                                            {doc.label.match(/\b(19|20)\d{2}\b/) && (
                                                                <span
                                                                    className="ml-3 rounded-full bg-[#0A436A]/10 px-2 py-0.5 text-xs font-semibold text-[#0A436A]">
                                  {doc.label.match(/\b(19|20)\d{2}\b/)}
                                </span>
                                                            )}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </section>
    );
}