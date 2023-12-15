"use client";
import React from "react";
import { CardsContainer } from "./CardsContainer";
import { motion } from "framer-motion";

const Pricing = () => {
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
      id="pricing"
      className="flex-column-center relative h-fit w-full gap-[40px] bg-pink px-[16px] py-[100px]"
    >
      <div className="flex-column-center gap-[20px]">
        <motion.h2
          variants={upVar}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, delay: 0.2, amount: 0.2 }}
          className="h3-bold text-center text-black"
        >
          Pricing
        </motion.h2>
        <motion.p
          variants={upVar}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, delay: 0.2, amount: 0.2 }}
          className="paragraph text-center text-black"
        >
          Transparent pricing. No surprise fees.{" "}
        </motion.p>
      </div>
      <CardsContainer />
    </section>
  );
};

export { Pricing };
