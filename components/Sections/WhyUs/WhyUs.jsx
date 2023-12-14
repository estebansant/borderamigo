import React from "react";
import { GridWhyUs } from "./GridWhyUs";
import Image from "next/image";
import vector from "@/public/assets/background/why_us.png";

const WhyUs = () => {
  return (
    <section id="why-us" className="relative h-full w-full bg-white">
      <Image
        src={vector}
        alt="background"
        className="absolute inset-0 h-full w-full"
      />
      <div className="flex-column-center relative h-fit w-full gap-[45px] bg-no-repeat px-[16px] py-[100px]">
        <h2 className="h3-bold text-black">Why us?</h2>
        <GridWhyUs />
      </div>
    </section>
  );
};

export { WhyUs };
