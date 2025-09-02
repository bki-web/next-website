import {TileSize} from "@/app/photos/components/Tile";

export function sizeToSpan(size: TileSize): string {
    switch (size) {
        case "sm":
            return "col-span-2 row-span-2";
        case "md":
            return "col-span-3 row-span-2";
        case "lg":
            return "col-span-4 row-span-3";
        case "wide":
            return "col-span-4 row-span-2";
        case "tall":
            return "col-span-2 row-span-4";
        default:
            return "col-span-3 row-span-2";
    }
}