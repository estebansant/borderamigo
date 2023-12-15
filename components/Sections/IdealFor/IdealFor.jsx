"use client";
import Image from "next/image";
import React from "react";
import { IdealCards } from "@/constants/IdealCards";
import { motion } from "framer-motion";

const IdealFor = () => {
  const downVar = {
    offscreen: {
      y: "-3vh",
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
    <section className="flex-column-center relative h-fit w-full gap-[40px] bg-pink px-[16px] pb-[100px]">
      <motion.h2
        variants={downVar}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, delay: 0.2, amount: 0.4 }}
        className="h3-bold text-center text-black"
      >
        Ideal for
      </motion.h2>
      <div className="flex-column-center gap-[32px] md:flex-row">
        {IdealCards.map((card, i) => {
          return (
            <motion.article
              variants={upVar}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, delay: 0.2, amount: 0.4 }}
              key={i}
              className="flex-column-start h-auto w-auto max-w-[358px] gap-[36px] rounded-[16px] bg-white p-[20px]"
            >
              <Image src={card.image} alt={card.alt} width={316} height={162} />
              <div className="flex-column-start gap-[16px]">
                <h5 className="h5-bold max-w-[318px] text-black md:h-[64px]">
                  {card.title}
                </h5>
                <p className="small-paragraph max-w-[318px] text-black">
                  {card.text}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export { IdealFor };
