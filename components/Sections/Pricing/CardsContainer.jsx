import React from "react";
import { Card1 } from "./Cards/Card1";
import { Card2 } from "./Cards/Card2";

const CardsContainer = () => {
  return (
    <div className="flex-column-center h-fit w-full max-w-[1280px] gap-[24px] md:flex-row md:items-center md:justify-center">
      <Card1 />
      <Card2 />
    </div>
  );
};

export { CardsContainer };
