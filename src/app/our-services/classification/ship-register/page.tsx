import { Suspense } from "react";
import ShipRegisterPage from "./components/ShipRegisterPage";

export default function Page() {
  return (
    <Suspense>
      <ShipRegisterPage />
    </Suspense>
  )
}