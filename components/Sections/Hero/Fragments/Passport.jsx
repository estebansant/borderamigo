"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import passport from "@/public/assets/images/passport.png";

const Passport = () => {
  const rightVar = {
    offscreen: {
      x: "-3vh",
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
      variants={rightVar}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className="mt-[64px] avg:mt-0"
    >
      <Image
        src={passport}
        alt="passport"
        className="z-10 h-[272.09px] w-[265px] md:h-[446.63px] md:w-[435px] lg:h-[680.21px] lg:w-[662.5px]"
      />
    </motion.div>
  );
};

export { Passport };
