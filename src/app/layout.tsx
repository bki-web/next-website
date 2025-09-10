import type {Metadata} from "next";
import "./globals.css";
import {TransitionProvider} from "@/components/TransitionProvider";
import SiteNavbar from "@/components/SiteNavbar";

import {Jost, Montserrat} from 'next/font/google';
import FooterSection from "@/components/FooterSection";
import {TRPCProvider} from "@/trpc/react";

// Load Montserrat with chosen weights
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // choose what you need
    variable: '--font-montserrat', // optional CSS variable
});

const jost = Jost({
    subsets: ["latin"],
    variable: "--font-jost",
});


export const metadata: Metadata = {
    title: "Marine Classification Services | Biro Klasifikasi Indonesia (BKI)",
    description: "Partner with BKI for world-class marine classification services. Ensuring safety, compliance, and operational excellence for your fleet, from new builds to ships in service. Discover our commitment to global standards.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
        <body
            className={`${montserrat.variable} ${jost.variable} antialiased`}
        >
        <TRPCProvider>
            <TransitionProvider>
                <SiteNavbar/>
                {children}
                <FooterSection/>
                {/* <FloatingCallButton /> */}
            </TransitionProvider>
        </TRPCProvider>
        </body>
        </html>
    );
}
