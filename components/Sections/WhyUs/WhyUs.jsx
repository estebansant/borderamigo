import React from "react";
import { GridWhyUs } from "./GridWhyUs";

const WhyUs = () => {
  return (
    <section className="flex-column-center relative h-fit w-full gap-[45px] bg-white bg-whyUs bg-cover bg-center bg-no-repeat px-[16px] py-[100px]">
      <h2 className="h3-bold text-black">Why us?</h2>
      <GridWhyUs />
    </section>
  );
};

export { WhyUs };
