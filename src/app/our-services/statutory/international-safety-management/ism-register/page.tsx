'use client';
import PageTransition from "@/components/page-transition";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";
import React, {Fragment} from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import Pagination from "@/components/pagination";
import ListISMRegister
    from "@/app/our-services/statutory/international-safety-management/ism-register/components/ListISMRegister";
import {useRouter} from "next/navigation";

const routes = [
    {
        text: "Home",
        href: "/",
    },
    {
        text: "Services",
        href: "/our-services",
    },
    {
        text: "Statutory",
        href: "/our-services#statutory",
    },
    {
        text: "International Safety Management",
        href: "/our-services/statutory/international-safety-management",
    },
    {
        text: "ISM Register",
    },
];


const formSchema = z.object({
    registerNo: z.string().optional(),
    companyName: z.string().optional(),
});
type FormSchema = z.infer<typeof formSchema>;
const defaultValue = {
    registerNo: '',
    companyName: '',
};

export default function InternationalSafetyManagementRegisterPage() {
    const router = useRouter();
    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValue,
    });

    const onSubmit = (values: FormSchema) => {
        console.log(values);
    }

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <PageTransition/>

            {/* Hero Section */}
            <section className="w-full relative overflow-hidden min-h-screen">
                <div
                    className="absolute inset-0 bg-[url('/our-services/classification/ship-register-background.jpg')] bg-cover bg-center"/>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0A436A]/60 to-black/60"/>
                <div
                    className="w-full relative flex flex-col justify-center items-center py-24 2xl:pt-40 text-center text-white text-shadow-lg text-shadow-black/30 gap-y-7 lg:gap-y-14 px-4">
                    <div className="flex flex-row flex-wrap justify-center items-center gap-2">
                        <button className="absolute lg:left-28 group cursor-pointer flex items-center gap-2"
                                onClick={router.back}>
                            <ArrowLeft className="group-hover:scale-125 transition-transform duration-500"/>
                            <p className="text-base text-white group-hover:scale-110">Back</p>
                        </button>
                        {routes.map((route, index) => (
                            <Fragment key={route.text + "-" + index}>
                                {index > 0 && (
                                    <span className="md:text-xl 2xl:text-3xl">/</span>
                                )}
                                {route.href ? (
                                    <Link
                                        href={route.href}
                                        className="md:text-xl 2xl:text-3xl text-white hover:underline transition-colors"
                                    >
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

                    <div
                        className="flex flex-col items-center lg:gap-y-3 gap-y-2 lg:p-8 p-6 rounded-lg overflow-hidden border-2 border-[#E8E8E866]/40 lg:w-1/2 w-full relative">
                        <div className="absolute inset-0 bg-black/50 blur-xl z-0"/>
                        <p className="text-lg md:text-4xl 2xl:text-5xl font-bold text-white text-center z-10">
                            ISM Register
                        </p>
                        <p className="text-md md:text-lg xl:text-xl 2xl:text-2xl text-white text-center z-10">
                            We provide independent and reliable ship classification services
                            to ensure your vessels comply with international safety,
                            environmental, and quality standards.
                        </p>

                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="w-full space-y-4 z-10"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <FormField
                                        control={form.control}
                                        name="registerNo"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className="lg:text-2xl text-lg text-white text-left">
                                                    Register No
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter register number"
                                                        type="number"
                                                        className="lg:px-6 px-3 lg:py-6 py-1 rounded-lg border border-white/40 bg-black/50 text-white lg:text-2xl text-lg placeholder:text-gray-400"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="companyName"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel className="lg:text-2xl text-lg text-white text-left">
                                                    Company Name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="Enter Company Name"
                                                        className="lg:px-6 px-3 lg:py-6 py-1 rounded-lg border border-white/40 bg-black/50 text-white lg:text-2xl text-lg placeholder:text-gray-400"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="inline-flex cursor-pointer items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-sm lg:text-xl font-light text-white bg-[#0A436A] backdrop-blur-md border border-white/50 hover:bg-[#0A436A]/80 transition-all duration-300 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 w-full mt-2"
                                >
                                    Search
                                    <span className="ml-2">→</span>
                                </Button>
                            </form>
                        </Form>
                    </div>
                </div>
            </section>

            <section>
                <ListISMRegister/>
                <div
                    className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 bg-[#E2E7F0] lg:px-24 px-4 pt-4 pb-10">
                    <p className="text-bki-blue">
                        Showing <b>1</b> to{" "}
                        <b>
                            2
                        </b>{" "}
                        of <b>20</b> data
                    </p>
                    <Pagination
                        totalPages={2}
                        currentPage={1}
                        onPageChange={() => {
                        }}
                    />
                </div>
            </section>
        </div>
    );
}
