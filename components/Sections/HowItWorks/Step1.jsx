import React from 'react';
import arrow from "@/public/assets/icons/dotted_arrow.svg";
import Image from "next/image";

const Step1 = () => {
  return (
    <div className="relative flex h-[198px] w-full max-w-[752px] items-center justify-center gap-[24px] avg:h-auto">
            <div className="flex flex-col items-center justify-center gap-[16px]">
              <div className="flex-center h-[40px] w-[40px] rounded-[100%] bg-mint">
                <p className="text-center font-OpenSans text-[1.5rem] font-semibold leading-[150%] text-white">
                  1
                </p>
              </div>
              <Image src={arrow} alt="arrow icon" />
            </div>

            <div className="flex-column-start absolute right-0 top-0 w-[135px] max-w-[324px] gap-[8px] avg:w-full">
              <div className="flex-column-start gap-[4px]">
                <p className="mini-bold uppercase text-white">Step 1</p>
                <h3 className="h5-bold text-white">Verify your eligibility</h3>
              </div>
              <p className="small-paragraph max-w-[324px] text-gray">
                Confirm you meet the core application criteria to pursue the
                Spanish Digital Nomad visa.
              </p>
            </div>
          </div>
  )
}

export {Step1}