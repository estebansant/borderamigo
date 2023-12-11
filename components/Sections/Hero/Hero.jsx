import React from "react";
import Image from "next/image";
import passport from "@/public/assets/images/passport.png";
import chevron from "@/public/assets/icons/chevron_right_white.svg";
import { Button } from "@/components/ui/button";
import { Announcement } from "./Announcement";

const Hero = () => {
  return (
    <section className="flex-center relative h-fit w-full bg-bew-gray bg-main bg-cover bg-center bg-no-repeat px-[16px]">
      <div className="mb-[250px] flex h-auto w-full max-w-[1280px] flex-col-reverse avg:mb-[150px] avg:flex-row avg:items-center avg:justify-around lg:mb-[180px]">
        <Image
          src={passport}
          alt="passport"
          className="h-auto w-auto avg:h-[300px] avg:w-[265px] md:h-[475px] md:w-[435px] lg:h-[680px] lg:w-[662.5px]"
        />
        <div className="flex-column-start mt-[40px] max-w-[560px] gap-[30px]">
          <h1 className="font-Petrona text-[4rem] font-medium leading-[120%] text-black md:text-[5.5rem] lg:text-[7rem]">
            Make Spain Your
            <br />
            <bold className="font-Petrona text-[4rem] font-bold leading-[120%] text-black md:text-[5.5rem] lg:text-[7rem]">
              Home Office
            </bold>
          </h1>

          <div className="flex-column-start gap-[24px]">
            <div className="flex-column-start gap-[16px]">
              <h2 className="subtitle-opensans-semibold text-mint">
                Helping remote workers move to Spain
              </h2>
              <p className="intro text-black">
                We pave the way to streamline and fast track your digital nomad
                residence in Spain. We handle the tedious details so you can
                enjoy more tapas, siestas and sunshine in Spain.
              </p>
            </div>

            <Button className="flex-center h-fit gap-[10px] rounded-[55px] bg-mint px-[15px] py-[8px] hover:bg-orange md:px-[30px] md:py-[12px]">
              <p className="button-text text-white">Get Started</p>
              <Image src={chevron} alt="chevron right" width={20} height={20} />
            </Button>
          </div>
        </div>
      </div>
      <Announcement />
    </section>
  );
};

export { Hero };
