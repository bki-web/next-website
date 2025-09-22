// FILE: app/technical-information/page.tsx

import PageTransition from "@/components/page-transition";
import Hero from "@/components/Hero";
// The component is now expecting props, we will pass them below
import TechnicalInformationTabs from "@/app/technical-information/components/TechnicalInformationTabs";
import {randomUUID} from 'crypto'
// --- Types and helper functions moved from the client component ---
type ItemResponse = {
    nomor: string;
    judul: string;
    url: string;
    filename: string;
};

type TIItem = {
    id: string;
    title: string;
    url: string;
    date?: string;
};

const ENDPOINTS = {
    EN: "http://api.bki.co.id/api-websitebki/technical_information.php?kdtipe=97",
    ID: "http://api.bki.co.id/api-websitebki/technical_information.php?kdtipe=9",
};

function normalize(items: ItemResponse[]): TIItem[] {
    if (!Array.isArray(items)) return [];
    return items.map((raw, idx) => {
        const id = (raw.nomor || `${idx}`) + randomUUID();
        const title = raw.judul || "Untitled";
        const url = raw.url && raw.filename ? raw.url + raw.filename : "#";
        return { id, title, url, date: raw.nomor };
    });
}

// --- Data fetching logic moved here ---
async function getTechnicalInformationData() {
    // This fetch runs on the server, so no CORS issues.
    try {
        const [enRes, idRes] = await Promise.all([
            fetch(ENDPOINTS.EN, { cache: "no-store" }),
            fetch(ENDPOINTS.ID, { cache: "no-store" }),
        ]);

        const enJson = await enRes.json();
        const idJson = await idRes.json();

        return {
            initialDataEN: normalize(enJson.data),
            initialDataID: normalize(idJson.data),
        };
    } catch (error) {
        console.error("Failed to fetch technical information:", error);
        // Return empty arrays on failure to prevent the page from crashing.
        return { initialDataEN: [], initialDataID: [] };
    }
}


// The page component is now async
export default async function TechnicalInformationPage() {
    // We await the data before rendering the page
    const { initialDataEN, initialDataID } = await getTechnicalInformationData();
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
            />

            <section className="w-full 2xl:py-20 md:py-16 py-12 2xl:px-28 md:px-24 px-8 bg-white">
                {/* Pass the fetched data down as props */}
                <TechnicalInformationTabs
                    initialDataEN={initialDataEN}
                    initialDataID={initialDataID}
                />
            </section>
        </div>
    );
}