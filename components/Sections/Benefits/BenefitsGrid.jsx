import React from "react";
import { BenefitsCards } from "@/constants/BenefitsCards";
import Image from "next/image";
import { motion } from "framer-motion";

const BenefitsGrid = () => {
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
    <div className="grid auto-cols-auto auto-rows-auto avg:grid-cols-2 md:grid-cols-3 md:grid-rows-3">
      {BenefitsCards.map((card, i) => {
        return (
          <motion.div
            key={i}
            variants={upVar}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, delay: 0.2, amount: 0.6 }}
            className="flex-column-start gap-[16px] border-[1px] border-solid border-line bg-white p-[24px] backdrop-blur-xs"
          >
            <Image src={card.image} alt={card.alt} width={75} height={75} />
            <div className="flex-column-start gap-[8px]">
              <h6 className="paragraph-bold text-black">{card.title}</h6>
              <p className="paragraph text-gray">{card.subtitle}</p>
            </div>
            <p className="paragraph max-w-[332px] text-black">{card.text}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export { BenefitsGrid };
