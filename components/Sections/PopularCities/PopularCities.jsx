"use client";
import React from "react";
import { SliderCities } from "./SliderCities";
import { motion } from "framer-motion";

const PopularCities = () => {
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
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section className="flex-column-center h-fit w-full gap-[40px] bg-pink px-[16px] py-[50px] md:py-[100px]">
      <motion.h2
        variants={upVar}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, delay: 0.2, amount: 0.6 }}
        className="h3-bold text-center text-black"
      >
        Popular cities in Spain for remote workers
      </motion.h2>
      <SliderCities />
    </section>
  );
};

export { PopularCities };
