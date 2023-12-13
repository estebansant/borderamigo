import React from "react";
import Image from "next/image";
import passport from "@/public/assets/images/passport.png";
import chevron from "@/public/assets/icons/chevron_right_white.svg";
import { Button } from "@/components/ui/button";
import { Announcement } from "./Announcement";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex-center relative h-fit w-full bg-bew-gray bg-main bg-cover bg-center bg-no-repeat px-[16px]"
    >
      <div className="mb-[150px] flex h-auto w-full max-w-[1200px] flex-col items-center avg:mb-[150px] avg:flex-row avg:justify-around lg:mb-[180px]">
        <Image
          src={passport}
          alt="passport"
          className="h-[300px] w-[265px] md:h-[475px] md:w-[435px] lg:h-[680px] lg:w-[662.5px]"
        />
        <div className="flex-column-center avg:flex-column-start mt-[40px] max-w-[560px] gap-[30px]">
          <h1 className="text-center font-Petrona text-[4.2rem] font-medium leading-[120%] text-black avg:text-left md:text-[5.6rem] lg:text-[7rem]">
            Make Spain Your
            <br />
            <bold className="text-center font-Petrona text-[4.6rem] font-bold leading-[120%] text-black avg:text-left md:text-[5.6rem] lg:text-[7rem]">
              Home Office
            </bold>
          </h1>

          <div className="flex-column-center avg:flex-column-start gap-[24px]">
            <div className="flex-column-start gap-[16px]">
              <h2 className="subtitle-opensans-semibold w-full text-center text-mint avg:text-left">
                Helping remote workers move to Spain
              </h2>
              <p className="intro text-center text-black avg:text-left">
                We pave the way to streamline and fast track your digital nomad
                residence in Spain. We handle the tedious details so you can
                enjoy more tapas, siestas and sunshine in Spain.
              </p>
            </div>

            <Button
              className="flex-center h-fit gap-[10px] rounded-[55px] bg-mint px-[15px] py-[8px] hover:bg-orange md:px-[30px] md:py-[12px]"
              asChild
            >
              <Link className="flex-center gap-[10px]" href="#pricing">
                <p className="button-text text-white">Get Started</p>
                <Image
                  src={chevron}
                  alt="chevron right"
                  width={20}
                  height={20}
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Announcement />
    </section>
  );
};

export { Hero };
