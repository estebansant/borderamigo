"use client";
import React from "react";
import { GridWhyUs } from "./GridWhyUs";
import { motion } from "framer-motion";

const WhyUs = () => {
  const upVar = {
    offscreen: {
      y: "3vh",
      opacity: 0,
    },
    onscreen: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section
      id="why-us"
      className="relative h-full w-full bg-white bg-whyUs bg-cover bg-center bg-no-repeat"
    >
      <div className="flex-column-center relative h-fit w-full gap-[45px] bg-no-repeat px-[16px] py-[100px]">
        <motion.h2
          variants={upVar}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, delay: 0.2, amount: 0.2 }}
          className="h3-bold text-black"
        >
          Why us?
        </motion.h2>
        <GridWhyUs />
      </div>
    </section>
  );
};

export { WhyUs };
