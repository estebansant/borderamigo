"use client";

import React from "react";
import Image from "next/image";
import check from "@/public/assets/icons/check.svg";
import { Card1Data } from "@/constants/CardsPricing";
import { PopUpModal } from "./PopUpModal";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Card1 = () => {
  return (
    <React.Fragment>
      {Card1Data.map((card, i) => {
        return (
          <article
            key={i}
            className="flex-column-start h-full w-[95%] max-w-[410px] gap-[40px] rounded-[24px] bg-white p-[24px] avg:h-[620px]"
          >
            <div className="flex-column-start gap-[8px] md:mb-[8px]">
              <h5 className="h5-bold text-black">{card.title}</h5>
              <p className="mini max-w-[336px] text-gray">{card.description}</p>
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
                <DialogTrigger className="flex-center button-text h-[52px] w-full max-w-[352px] rounded-[55px] border-[1px] border-solid border-mint bg-white px-[30px] py-[12px] text-mint transition-all duration-300 ease-in-out hover:bg-mint hover:text-white">
                  Get Started
                </DialogTrigger>
                <DialogContent className="flex-column-start h-[590px] w-[90%] rounded-[16px] bg-white p-[20px] avg:w-[400px] avg:min-w-[400px] md:h-[640px]">
                  <PopUpModal />
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex-column-start gap-[18px]">
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
          </article>
        );
      })}
    </React.Fragment>
  );
};

export { Card1 };
