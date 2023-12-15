"use client";
import Image from "next/image";
import React from "react";
import gradient from "@/public/assets/images/gradient.png";
import { motion } from "framer-motion";

const GridWhyUs = () => {
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
    <div className="grid max-w-[1200px] auto-cols-auto auto-rows-auto gap-[24px] gap-y-[11.5px] avg:grid-cols-2 md:grid-cols-3 md:grid-rows-2">
      {/* I couldn't map through an array and se the variables of the array as tailwind classes to change the background image on hover and using a state to manage all the images on mouse enter and on mouse leave wasn't optimal  */}
      {/* card 1 */}
      <motion.article
        variants={upVar}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
        className="flex-column-center h-auto max-h-[332px] w-[300px] gap-[26px] rounded-[16px] bg-orange p-[16px] avg:w-auto"
      >
        <div className="flex h-[225px] w-full max-w-[332px] items-end rounded-[16px] bg-mb1 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out hover:bg-mb1Hover">
          <Image
            src={gradient}
            alt="gradient"
            className="h-full max-h-[166px] w-full min-w-full"
          />
        </div>
        <h6 className="paragraph text-center text-light-gray">
          The only online all-in-one platform for seamless application
        </h6>
      </motion.article>
      {/* card 2 */}
      <motion.article
        variants={upVar}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, delay: 0.2, amount: 0.4 }}
        className="flex-column-center h-auto max-h-[332px] w-[300px] gap-[26px] rounded-[16px] bg-orange p-[16px] avg:w-auto"
      >
        <h6 className="paragraph text-center text-light-gray">
          Experienced Visa Specialists
        </h6>
        <div className="flex h-[225px] w-full max-w-[332px] items-end rounded-[16px] bg-linearGradient bg-mb2 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out hover:bg-mb2Hover">
          <Image
            src={gradient}
            alt="gradient"
            className="h-full max-h-[166px] w-full min-w-full"
          />
        </div>
      </motion.article>
      {/* card 3 */}
      <motion.article
        variants={upVar}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, delay: 0.4, amount: 0.4 }}
        className="flex-column-center h-auto max-h-[332px] w-[300px] gap-[26px] rounded-[16px] bg-orange p-[16px] avg:w-auto"
      >
        <div className="flex h-[225px] w-full max-w-[332px] items-end rounded-[16px] bg-linearGradient bg-mb3 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out hover:bg-mb3Hover">
          <Image
            src={gradient}
            alt="gradient"
            className="h-full max-h-[166px] w-full min-w-full"
          />
        </div>
        <h6 className="paragraph text-center text-light-gray">
          AI- Powered Process
        </h6>
      </motion.article>
      {/* card 4 */}
      <motion.article
        variants={upVar}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, delay: 0.6, amount: 0.4 }}
        className="flex-column-center h-auto max-h-[332px] w-[300px] gap-[26px] rounded-[16px] bg-orange p-[16px] avg:w-auto"
      >
        <h6 className="paragraph text-center text-light-gray">
          Multilingual consultants
        </h6>
        <div className="flex h-[225px] w-full max-w-[332px] items-end rounded-[16px] bg-linearGradient bg-mb4 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out hover:bg-mb4Hover">
          <Image
            src={gradient}
            alt="gradient"
            className="h-full max-h-[166px] w-full min-w-full"
          />
        </div>
      </motion.article>
      {/* card 5 */}
      <motion.article
        variants={upVar}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, delay: 0.8, amount: 0.4 }}
        className="flex-column-center h-auto max-h-[332px] w-[300px] gap-[26px] rounded-[16px] bg-orange p-[16px] avg:w-auto"
      >
        <div className="flex h-[225px] w-full max-w-[332px] items-end rounded-[16px] bg-linearGradient bg-mb5 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out hover:bg-mb5Hover">
          <Image
            src={gradient}
            alt="gradient"
            className="h-full max-h-[166px] w-full min-w-full"
          />
        </div>
        <h6 className="paragraph text-center text-light-gray">
          Half the price to get your residence
        </h6>
      </motion.article>
      {/* card 6 */}
      <motion.article
        variants={upVar}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, delay: 1, amount: 0.4 }}
        className="flex-column-center h-auto max-h-[332px] w-[300px] gap-[26px] rounded-[16px] bg-orange p-[16px] avg:w-auto"
      >
        <h6 className="paragraph text-center text-light-gray">
          Highly efficient workflow
        </h6>
        <div className="flex h-[225px] w-full max-w-[332px] items-end rounded-[16px] bg-linearGradient bg-mb6 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out hover:bg-mb6Hover">
          <Image
            src={gradient}
            alt="gradient"
            className="h-full max-h-[166px] w-full min-w-full"
          />
        </div>
      </motion.article>
    </div>
  );
};

export { GridWhyUs };
