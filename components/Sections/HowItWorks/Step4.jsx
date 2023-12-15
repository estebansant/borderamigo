"use client";
import React from "react";
import arrow from "@/public/assets/icons/dotted_arrow.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Step4 = () => {
  const leftVar = {
    offscreen: {
      x: "3vh",
      opacity: 0,
    },
    onscreen: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={leftVar}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, delay: 0.2, amount: 0.4 }}
      className="relative flex h-[198px] w-full max-w-[752px] items-center justify-center gap-[24px] avg:h-auto"
    >
      <div className="flex flex-col items-center justify-center gap-[16px]">
        <div className="flex-center h-[40px] w-[40px] rounded-[100%] bg-mint">
          <p className="text-center font-OpenSans text-[1.5rem] font-semibold leading-[150%] text-white">
            4
          </p>
        </div>
        <Image src={arrow} alt="arrow icon" />
      </div>

      <div className="absolute left-0 top-0 flex w-[135px] max-w-[324px] flex-col items-end justify-center gap-[8px] avg:w-full">
        <div className="flex flex-col items-end justify-center gap-[4px]">
          <p className="mini-bold text-right uppercase text-white ">Step 4</p>
          <h3 className="h5-bold text-right text-white">Book an appointment</h3>
        </div>
        <p className="small-paragraph max-w-[324px] text-right text-gray">
          Schedule an in-person appointment after your documents are approved.
        </p>
      </div>
    </motion.div>
  );
};

export { Step4 };
