"use client";
import React from "react";
import { motion } from "framer-motion";

const Subtitle = () => {
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
    <motion.div
      variants={upVar}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, delay: 0.2 }}
      className="flex-column-start gap-[16px]"
    >
      <h2 className="subtitle-opensans-semibold w-full text-center text-mint avg:text-left">
        Helping remote workers move to Spain
      </h2>
      <p className="intro text-center text-black avg:text-left">
        We pave the way to streamline and fast track your digital nomad
        residence in Spain. We handle the tedious details so you can enjoy more
        tapas, siestas and sunshine in Spain.
      </p>
    </motion.div>
  );
};

export { Subtitle };
