"use client"

import PageTransition from "@/components/page-transition";
import { Fragment } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface RouteItem {
  text: string;
  href?: string;
}

const routes: RouteItem[] = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'Services',
    href: '/our-services'
  },
  {
    text: 'Classification',
    href: '/our-services/classification'
  },
  {
    text: 'Ship Register',
  },
];

const formSchema = z.object({
  shipName: z.string().optional(),
  registerNo: z.string().optional(),
  imoNo: z.string().optional(),
  minGT: z.string().optional(),
  maxGT: z.string().optional(),
});

type FormSchema = z.infer<typeof formSchema>;

export default function ShipRegisterPage() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      shipName: "",
      registerNo: "",
      imoNo: "",
      minGT: "",
      maxGT: "",
    },
  });

  function onSubmit(values: FormSchema) {
    // This function is called when the form is submitted and validated successfully.
    // You can handle your search logic here, e.g., make an API call.
    console.log("Form submitted with values:", values);
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <PageTransition />

      <section className="w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/our-services/classification/slider-1.jpg')] bg-cover bg-center"/>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A436A]/60 to-black/60"/>
        
        <div className="w-full relative flex flex-col justify-center items-center py-24 2xl:pt-40 text-center text-white text-shadow-lg text-shadow-black/30 gap-y-7 lg:gap-y-14 px-4">
          <div className="flex flex-row flex-wrap justify-center items-center gap-2">
            {routes.map((route, index) => (
              <Fragment key={route.text + '-' + index}>
                {index > 0 && (
                  <span className="md:text-xl 2xl:text-3xl">/</span>
                )}
                {route.href ? (
                  <Link href={route.href} className="md:text-xl 2xl:text-3xl text-white hover:underline transition-colors">
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

          <div className="flex flex-col items-center lg:gap-y-3 gap-y-2 lg:p-8 p-6 rounded-lg overflow-hidden border-2 border-[#E8E8E866]/40 lg:w-1/2 w-full relative">
            <div className="absolute inset-0 bg-black/50 blur-xl z-0"/>
            <p className="lg:text-5xl text-2xl font-bold text-white text-center z-10">
              Register of Ships
            </p>
            <p className="lg:text-2xl text-lg text-white text-center z-10">
              We provide independent and reliable ship classification services to ensure your vessels comply with international safety, environmental, and quality standards.
            </p>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4 z-10">
                <FormField
                  control={form.control}
                  name="shipName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="lg:text-2xl text-lg text-white text-left">Ship Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter ship name" 
                          className="lg:px-6 px-3 lg:py-6 py-1 rounded-lg border border-white/40 bg-black/50 text-white lg:text-2xl text-lg placeholder:text-gray-400" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="registerNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-2xl text-lg text-white text-left">Register No</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter register number" 
                            className="lg:px-6 px-3 lg:py-6 py-1 rounded-lg border border-white/40 bg-black/50 text-white lg:text-2xl text-lg placeholder:text-gray-400" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="imoNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-2xl text-lg text-white text-left">IMO No.</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter IMO number" 
                            className="lg:px-6 px-3 lg:py-6 py-1 rounded-lg border border-white/40 bg-black/50 text-white lg:text-2xl text-lg placeholder:text-gray-400" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="minGT"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-2xl text-lg text-white text-left">Min GT</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter minimum GT" 
                            type="number"
                            className="lg:px-6 px-3 lg:py-6 py-1 rounded-lg border border-white/40 bg-black/50 text-white lg:text-2xl text-lg placeholder:text-gray-400" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="maxGT"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="lg:text-2xl text-lg text-white text-left">Max GT</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter maximum GT" 
                            type="number"
                            className="lg:px-6 px-3 lg:py-6 py-1 rounded-lg border border-white/40 bg-black/50 text-white lg:text-2xl text-lg placeholder:text-gray-400" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
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
    </div>
  );
}