import React from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Step5 } from "./Step5";
import { Step6 } from "./Step6";

const HowItWorks = () => {
  return (
    <section className="flex-column-center relative h-fit w-full gap-[76px] bg-black bg-vectors bg-cover bg-center bg-no-repeat px-[16px] pb-[182px] pt-[100px]">
      <h2 className="h3-bold text-center text-white">How it works?</h2>
      <div className="flex-center w-full max-w-[1280px]">
        <div className="flex-column-center w-full gap-[24px]">
          <Step1 />
          <Step2 />
          <Step3 />
          <Step4 />
          <Step5 />
          <Step6 />
        </div>
      </div>
    </section>
  );
};

export { HowItWorks };
