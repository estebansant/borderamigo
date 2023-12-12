import Image from "next/image";
import React from "react";
import { IdealCards } from "@/constants/IdealCards";

const IdealFor = () => {
  return (
    <section className="flex-column-center relative h-fit w-full gap-[40px] bg-pink px-[16px] pb-[100px]">
      <h2 className="h3-bold text-center text-black">Ideal for</h2>
      <div className="flex-column-center gap-[32px] md:flex-row">
        {IdealCards.map((card, i) => {
          return (
            <article
              key={i}
              className="flex-column-start h-auto w-auto max-w-[358px] gap-[36px] rounded-[16px] bg-white p-[20px]"
            >
              <Image src={card.image} alt={card.alt} width={316} height={162} />
              <div className="flex-column-start gap-[16px]">
                <h4 className="h5-bold max-w-[318px] text-black md:h-[64px]">
                  {card.title}
                </h4>
                <p className="small-paragraph max-w-[318px] text-black">
                  {card.text}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export { IdealFor };
