"use client";

import React from "react";
import { FaqItems } from "@/constants/FaqItems";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section
      id="faqs"
      className="flex-column-center relative h-fit w-full gap-[45px] bg-pink px-[16px] py-[100px]"
    >
      <h2 className="h3-bold text-center text-black">
        Frequently asked questions (FAQ)
      </h2>
      <Accordion
        type="single"
        collapsible
        className="flex-column-start w-full max-w-[804px] gap-[16px]"
      >
        {FaqItems.map((item, i) => {
          return (
            <AccordionItem
              value={item.value}
              key={i}
              className="w-full gap-[10px] rounded-[16px] border-none bg-white px-[24px] py-[16px]"
            >
              <AccordionTrigger className="paragraph min-w-full border-b-[1px] border-solid border-line text-left text-gray">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="small-paragraph mt-[10px] text-gray">
                {item.name}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};

export { FAQ };
