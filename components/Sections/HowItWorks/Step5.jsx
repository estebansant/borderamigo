import React from "react";
import arrow from "@/public/assets/icons/dotted_arrow.svg";
import Image from "next/image";

const Step5 = () => {
  return (
    <div className="relative flex h-[303px] w-full max-w-[752px] items-center justify-center gap-[24px] avg:h-auto">
      <div className="flex flex-col items-center justify-center gap-[16px]">
        <div className="flex-center h-[40px] w-[40px] rounded-[100%] bg-mint">
          <p className="text-center font-OpenSans text-[1.5rem] font-semibold leading-[150%] text-white">
            5
          </p>
        </div>
        <Image src={arrow} alt="arrow icon" />
      </div>

      <div className="flex-column-start absolute right-0 top-0 w-[135px] max-w-[324px] gap-[8px] avg:w-full">
        <div className="flex-column-start gap-[4px]">
          <p className="mini-bold uppercase text-white">Step 5</p>
          <h3 className="h5-bold text-white">Attend the appointment</h3>
        </div>
        <p className="small-paragraph max-w-[324px] text-gray">
          Appear to finalize visa interview at the Spanish embassy or consulate.
          You will be required to leave your passport at the embassy or
          consulate while they are assessing your application.
        </p>
      </div>
    </div>
  );
};

export { Step5 };
