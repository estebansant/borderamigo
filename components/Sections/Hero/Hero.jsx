"use client";
import React from "react";
import { Announcement } from "./Announcement";
import { Title } from "./Fragments/Title";
import { Subtitle } from "./Fragments/Subtitle";
import { CTAButton } from "./Fragments/CTAButton";
import { Passport } from "./Fragments/Passport";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex-column-center relative z-10 mt-[-64px] h-fit w-full bg-bew-gray bg-main bg-cover bg-center bg-no-repeat px-[16px] avg:flex-row"
    >
      <div className="mb-[160px] flex h-auto w-full max-w-[1200px] flex-col items-center avg:mb-[150px] avg:mt-[64px] avg:flex-row avg:justify-around lg:mb-[180px]">
        <Passport />
        <div className="flex-column-center avg:flex-column-start mt-[40px] max-w-[560px] gap-[30px] avg:max-w-[460px] md:max-w-[560px]">
          <div className="flex-column-center avg:flex-column-start max-w-[560px]">
            <Title />
          </div>

          <Subtitle />
          <div className="flex-column-center avg:flex-column-start gap-[24px]">
            <CTAButton />
          </div>
        </div>
      </div>
      <Announcement />
    </section>
  );
};

export { Hero };
