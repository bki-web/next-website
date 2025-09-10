'use client';
import Link from "next/link";
import {classes} from "@/utils/string";
import {Fragment} from "react";
import {ArrowLeft} from "lucide-react";
import {useRouter} from "next/navigation";

interface RouteItem {
    text: string;
    href?: string;
}

interface Props {
    routes: RouteItem[];
    backgroundClass: string;
    title: string;
    description?: string;
    innerComponent?: React.ReactNode;
    customOverlayClass?: string;
}

export default function Hero(props: Props) {
    const {routes, backgroundClass, title, description, innerComponent, customOverlayClass} = props;
    const router = useRouter();
    return (
        <section
            className={classes("w-full relative overflow-hidden", innerComponent ? "h-[60vh]" : "h-[50vh]")}>
            <div className={classes('absolute inset-0 bg-cover blur-xs bg-center', backgroundClass)}/>
            <div
                className={
                    classes(
                        'absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A436A] to-[#0A436A00]',
                        customOverlayClass ? customOverlayClass : "",
                        innerComponent ? "h-[20vh]" : "h-[15vh]"
                    )
                }
            />
            <div
                className="w-full relative flex flex-col justify-center items-center py-24 xl:pt-32 2xl:pt-40 text-center text-white text-shadow-lg text-shadow-black/30">
                <div className="flex flex-row w-full justify-center items-center gap-2 relative">
                    {routes.length > 1 ?
                        <button className="absolute lg:left-28 group cursor-pointer flex items-center gap-2"
                                onClick={router.back}>
                            <ArrowLeft className="group-hover:scale-125 transition-transform duration-500"/>
                            <p className="text-base text-white group-hover:scale-110">Back</p>
                        </button> : null}
                    {routes.map((route, index) => (
                        <Fragment key={route.text + '-' + index}>
                            {index > 0 && (
                                <span className="md:text-xl 2xl:text-3xl">
                                    /
                                </span>
                            )}
                            {route.href ? (
                                <Link href={route.href} className="md:text-xl 2xl:text-3xl">
                                    {route.text}
                                </Link>
                            ) : (
                                <span className="md:text-xl 2xl:text-3xl text-[#ffffff75]">
                                    {route.text}
                                </span>
                            )}
                        </Fragment>
                    ))}
                </div>
                <p className="mt-4 text-lg md:text-4xl 2xl:text-5xl font-semibold">
                    {title}
                </p>
                {description && (
                    <p className="mt-4 text-md md:text-lg xl:text-xl 2xl:text-2xl max-w-3/5">
                        {description}
                    </p>
                )}
            </div>

            {innerComponent}
        </section>
    )
}