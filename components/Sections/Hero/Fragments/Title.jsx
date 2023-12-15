"use client";
import React from "react";
import { motion } from "framer-motion";

const Title = () => {
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
    <motion.h1
      variants={upVar}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="text-center font-Petrona text-[4.2rem] font-medium leading-[120%] text-black avg:text-left md:text-[5.6rem] lg:text-[7rem]"
    >
      Make Spain Your
      <br />
      <bold className="text-center font-Petrona text-[4.6rem] font-bold leading-[120%] text-black avg:text-left md:text-[5.6rem] lg:text-[7rem]">
        Home Office
      </bold>
    </motion.h1>
  );
};

export { Title };
