"use client";
import React from "react";
import { BenefitsGrid } from "./BenefitsGrid";
import { motion } from "framer-motion";

const Benefits = () => {
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
      id="benefits"
      className="flex-column-center relative h-fit w-full gap-[40px] bg-dark-pink px-[16px] py-[100px]"
    >
      <div className="flex-column-center max-w-[748px] gap-[20px]">
        <motion.h2
          variants={upVar}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, delay: 0.2, amount: 0.2 }}
          className="h3-bold text-center text-black"
        >
          Benefits of the Spanish Digital Nomad Visa
        </motion.h2>
        <motion.p
          variants={upVar}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, delay: 0.2, amount: 0.4 }}
          className="paragraph text-center text-black"
        >
          The new Spanish Digital Nomad Visa makes it a very attractive
          destination for digital nomads — easy to get with low income
          requirements, minimal bureaucracy and renewal up to 5 years. Whether
          you pick a buzzing city like Barcelona or a charming pueblo, Spain
          dishes up the work-travel balance in spades with an enviable quality
          of life.
        </motion.p>
      </div>

      <BenefitsGrid />
    </section>
  );
};

export { Benefits };
