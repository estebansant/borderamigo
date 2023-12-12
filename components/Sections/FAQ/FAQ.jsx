import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="flex-column-center relative h-fit w-full gap-[45px] bg-pink px-[16px] py-[100px]">
      <h2 className="h3-bold text-center text-black">
        Frequently asked questions (FAQ)
      </h2>
      <Accordion
        type="single"
        collapsible
        className="flex-column-start w-full max-w-[804px] gap-[16px]"
      >
        <AccordionItem
          value="item-1"
          className="w-full gap-[10px] rounded-[16px] border-none bg-white px-[24px] py-[16px]"
        >
          <AccordionTrigger className="paragraph min-w-full border-b-[1px] border-solid border-line text-gray">
            Lorem Ipsum is simply dummy text of the.
          </AccordionTrigger>
          <AccordionContent className="small-paragraph mt-[10px] text-gray">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard.Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="w-full gap-[10px] rounded-[16px] border-none bg-white px-[24px] py-[16px]"
        >
          <AccordionTrigger className="paragraph min-w-full border-b-[1px] border-solid border-line text-gray">
            Lorem Ipsum is simply dummy text of the.
          </AccordionTrigger>
          <AccordionContent className="small-paragraph mt-[10px] text-gray">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard.Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          className="w-full gap-[10px] rounded-[16px] border-none bg-white px-[24px] py-[16px]"
        >
          <AccordionTrigger className="paragraph min-w-full border-b-[1px] border-solid border-line text-gray">
            Lorem Ipsum is simply dummy text of the.
          </AccordionTrigger>
          <AccordionContent className="small-paragraph mt-[10px] text-gray">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard.Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          className="w-full gap-[10px] rounded-[16px] border-none bg-white px-[24px] py-[16px]"
        >
          <AccordionTrigger className="paragraph min-w-full border-b-[1px] border-solid border-line text-gray">
            Lorem Ipsum is simply dummy text of the.
          </AccordionTrigger>
          <AccordionContent className="small-paragraph mt-[10px] text-gray">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard.Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export { FAQ };
