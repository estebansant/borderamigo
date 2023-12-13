import React from "react";
import { SliderCities } from "./SliderCities";

const PopularCities = () => {
  return (
    <section className="flex-column-center h-fit w-full gap-[40px] bg-pink px-[16px] py-[50px] md:py-[100px]">
      <h2 className="h3-bold text-center text-black">
        Popular cities in Spain for remote workers
      </h2>
      <SliderCities />
    </section>
  );
};

export { PopularCities };
