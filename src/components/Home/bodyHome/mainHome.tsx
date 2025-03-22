"use client";

import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import QuickNoti from "@/components/quicknotication/quicknoti";
import Card from "./deviceCard/homeDeviceCard";
function MainHome() {
  const { data: session } = useSession();
  const { status } = useSession({
    required: false,
  });
  const t = useTranslations("HomePage");
  //@ts-ignore
  //sd ->session



  return (
    <div className="flex flex-col ">
    <QuickNoti/>
    <div className="bg-mau3  gap-3 flex flex-col px-3 py-6 rounded-t-3xl">
      <Card/>
    </div>
    
    </div>
    
  );
}

export default MainHome;
