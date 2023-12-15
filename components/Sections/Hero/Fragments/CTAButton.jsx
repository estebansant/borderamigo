"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import chevron from "@/public/assets/icons/chevron_right_white.svg";
import Image from "next/image";

const CTAButton = () => {
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
    <motion.button
      variants={upVar}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, delay: 0.2 }}
      className="rounded-[55px] p-[4px]"
    >
      <Link
        className="flex-center h-fit gap-[10px] rounded-[55px] border-[1px] border-solid border-mint-300 p-[4px]"
        href="#pricing"
      >
        <div className="flex-center gap-[10px] rounded-[55px] bg-mint px-[15px] py-[8px] opacity-100 hover:bg-orange md:px-[30px] md:py-[12px]">
          <p className="button-text text-white opacity-100">Get Started</p>
          <Image src={chevron} alt="chevron right" width={20} height={20} />
        </div>
      </Link>
    </motion.button>
  );
};

export { CTAButton };
