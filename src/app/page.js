"use client";

import LineGradient from "@/components/LineGradient";
import DotGroup from "@/layouts/DotGroup";
import Landing from "@/layouts/Landing";
import MySkills from "@/layouts/MySkills";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <main className="w-full h-full ">
      <DotGroup />
      <div className="w-5/6 mx-auto md:h-full ">
        <Landing />
      </div>
      <LineGradient />
      <div className="w-5/6 mx-auto md:h-full ">
        <MySkills />
      </div>
    </main>
  );
}
