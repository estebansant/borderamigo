import React from "react";
import { CardsContainer } from "./CardsContainer";

const Pricing = () => {
  return (
    <section className="flex-column-center relative h-fit w-full gap-[40px] bg-pink px-[16px] py-[100px]">
      <div className="flex-column-center gap-[20px]">
        <h2 className="h3-bold text-center text-black">Pricing</h2>
        <p className="paragraph text-center text-black">
          Transparent pricing. No surprise fees.{" "}
        </p>
      </div>
      <CardsContainer />
    </section>
  );
};

export { Pricing };
