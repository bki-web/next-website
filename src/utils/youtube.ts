export function getYouTubeId(url: string): string | null {
    try {
        const u = new URL(url);
        if (u.hostname === "youtu.be") {
            return u.pathname.slice(1);
        }
        if (u.hostname.includes("youtube.com")) {
            return u.searchParams.get("v");
        }
        return null;
    } catch {
        return null;
    }
}

export function getYouTubeThumb(url: string, quality: "default" | "mq" | "hq" | "maxres" = "hq") {
    const id = getYouTubeId(url);
    if (!id) return "";
    const map = {
        default: "default.jpg",
        mq: "mqdefault.jpg",
        hq: "hqdefault.jpg",
        maxres: "maxresdefault.jpg",
    };
    return `https://img.youtube.com/vi/${id}/${map[quality]}`;
}