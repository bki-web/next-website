import { Suspense } from "react";
import ShipRegisterPage from "./components/ShipRegisterPage";
import { trpc } from "@/trpc/server";
import { formatResult } from "@/utils/replacer";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const {submitted, nmkpl, noreg, noimo, minGT, maxGT, page} = await searchParams
  // const nmkpl = searchParams.nmkpl as string | undefined;
  // const noreg = searchParams.noreg as string | undefined;
  // const noimo = searchParams.noimo as string | undefined;
  // const minGT = searchParams.minGT as string | undefined;
  // const maxGT = searchParams.maxGT as string | undefined;
  // const page = Number(searchParams.page) || 1;

  
  const shouldSearch = submitted === 'true';
  let searchResult = null;

  if (shouldSearch) {
    try {
      // searchResult = await searchShip({
      //   nmkpl,
      //   noreg,
      //   noimo,
      //   minGT,
      //   maxGT,
      //   page,
      //   limit: 10,
      // });
      searchResult = await trpc.shipRegister.search({
        nmkpl,
        noreg,
        noimo,
        minGT,
        maxGT,
        page: +(page || 1),
        limit: 10,
      })
    } catch (error) {
      console.error("SSR search failed:", error);
      searchResult = null;
    }
  }

  return (
    <Suspense>
      <ShipRegisterPage initialData={formatResult(searchResult)} />
      <div className="hidden">Test deployed 1.1.2</div>
    </Suspense>
  );
}