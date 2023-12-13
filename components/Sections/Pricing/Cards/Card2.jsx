"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import check from "@/public/assets/icons/check.svg";
import { Card2Data } from "@/constants/CardsPricing";

const Card2 = () => {
  return (
    <React.Fragment>
      {Card2Data.map((card, i) => {
        return (
          <article
            key={i}
            className="flex-column-start w-[95%] max-w-[410px] gap-[40px] rounded-[24px] bg-white p-[24px]"
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

              <Button
                asChild
                className="flex-center button-text duration-[400ms] h-[52px] w-full max-w-[352px] rounded-[55px] border-[1px] border-solid border-mint bg-mint px-[30px] py-[12px] text-white transition-all ease-in-out hover:bg-orange hover:text-white"
              >
                <Link href={card.link}>Get Started</Link>
              </Button>
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
          </article>
        );
      })}
    </React.Fragment>
  );
};

export { Card2 };
