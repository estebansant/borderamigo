"use client";

import React from "react";
import { PopUpModal } from "./PopUpModal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import check from "@/public/assets/icons/check.svg";
import { Card2Data } from "@/constants/CardsPricing";
import { motion } from "framer-motion";

const Card2 = ({ change, plan }) => {
  const leftVar = {
    offscreen: {
      x: "3vh",
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
    <React.Fragment>
      {Card2Data.map((card, i) => {
        return (
          <motion.article
            variants={leftVar}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, delay: 0.2, amount: 0.4 }}
            key={i}
            className="flex-column-start h-full w-[95%] max-w-[410px] gap-[40px] rounded-[24px] bg-white p-[24px] avg:h-[620px]"
          >
            <div className="flex-column-start gap-[8px]">
              <h5 className="h5-bold text-black">{card.title}</h5>
              <p className="mini max-w-[336px] text-gray">
                {card.description} <b>{card.descriptionBold}</b>
              </p>
            </div>

            <div className="flex-column-start w-full gap-[20px]">
              <div className="flex-column-start gap-[8px]">
                <div className="flex-start gap-[16px]">
                  <p className="h4-bold text-gray line-through decoration-mint">
                    {card.placholderPrice}
                  </p>
                  <h6 className="h4-bold text-black">{card.realPrice}</h6>
                </div>
                <p className="mini text-gray">{card.vat}</p>
              </div>

              <Dialog>
                <DialogTrigger
                  onClick={() => change("B")}
                  className="flex-center button-text h-[60px] w-full max-w-[352px] rounded-[55px] border-none text-white transition-all duration-300 ease-in-out hover:border-[1px] hover:border-solid hover:border-mint hover:p-[4px]"
                >
                  <div className="flex-center h-[52px] w-full rounded-[55px] bg-mint px-[30px] py-[12px] hover:bg-orange hover:text-white">
                    Get Started
                  </div>
                </DialogTrigger>
                <DialogContent className="flex-column-start h-[590px] w-[90%] overflow-scroll rounded-[16px] bg-white p-[20px] avg:h-[640px] avg:w-[460px] avg:min-w-[460px] avg:overflow-hidden">
                  <PopUpModal change={change} plan={plan} />
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex-column-start gap-[18px]">
              <p className="small-paragraph italic text-mint">
                {card.everything}
              </p>
              {card.benefits.map((benefit, index) => {
                return (
                  <div key={index} className="flex-start gap-[8px]">
                    <Image
                      src={check}
                      alt="check tick icon"
                      width={20}
                      height={20}
                    />
                    <p className="paragraph text-black">{benefit}</p>
                  </div>
                );
              })}
            </div>
          </motion.article>
        );
      })}
    </React.Fragment>
  );
};

export { Card2 };
