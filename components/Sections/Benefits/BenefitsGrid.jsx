import React from "react";
import { BenefitsCards } from "@/constants/BenefitsCards";
import Image from "next/image";

const BenefitsGrid = () => {
  return (
    <div className="grid auto-cols-auto auto-rows-auto avg:grid-cols-2 md:grid-cols-3 md:grid-rows-3">
      {BenefitsCards.map((card, i) => {
        return (
          <div
            key={i}
            className="flex-column-start gap-[16px] border-[1px] border-solid border-line bg-white p-[24px] backdrop-blur-xs"
          >
            <Image src={card.image} alt={card.alt} width={75} height={75} />
            <div className="flex-column-start gap-[8px]">
              <h6 className="paragraph-bold text-black">{card.title}</h6>
              <p className="paragraph text-gray">{card.subtitle}</p>
            </div>
            <p className="paragraph max-w-[332px] text-black">{card.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export { BenefitsGrid };
