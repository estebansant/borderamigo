"use client";

import React from "react";
import { FaqItems } from "@/constants/FaqItems";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
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
  return (
    <section
      id="faqs"
      className="flex-column-center relative h-fit w-full gap-[45px] bg-pink px-[16px] py-[100px]"
    >
      <motion.h2
        variants={downVar}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, delay: 0.2, amount: 0.4 }}
        className="h3-bold text-center text-black"
      >
        Frequently asked questions (FAQ)
      </motion.h2>
      <Accordion
        type="single"
        collapsible
        className="flex-column-start w-full max-w-[804px] gap-[16px]"
      >
        {FaqItems.map((item, i) => {
          return (
            <motion.div
              key={i}
              variants={downVar}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, delay: 0.2, amount: 0.6 }}
              className="w-full"
            >
              <AccordionItem
                value={item.value}
                className="w-full gap-[10px] rounded-[16px] border-none bg-white px-[24px] py-[16px]"
              >
                <AccordionTrigger className="paragraph min-w-full border-b-[1px] border-solid border-line text-left text-gray">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="small-paragraph mt-[10px] text-gray">
                  {item.name}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          );
        })}
      </Accordion>
    </section>
  );
};

export { FAQ };
