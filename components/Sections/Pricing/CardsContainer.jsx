"use client";

import React from "react";
import { Card1 } from "./Cards/Card1";
import { Card2 } from "./Cards/Card2";

const CardsContainer = () => {
  const [plan, setPlan] = React.useState("");

  const onPlanChange = (value) => {
    setPlan(value);
  };

  return (
    <div className="flex-column-center h-fit w-full max-w-[1200px] gap-[24px] md:flex-row md:items-center md:justify-center">
      {/* I separated them in 2 components to change the normal color of the CTA button and the hover animation */}
      <Card1 change={onPlanChange} plan={plan} />
      <Card2 change={onPlanChange} plan={plan} />
    </div>
  );
};

export { CardsContainer };
