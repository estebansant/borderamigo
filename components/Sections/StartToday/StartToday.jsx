import { Button } from "@/components/ui/button";
import chevron from "@/public/assets/icons/chevron_right_white.svg";
import mirrorball from "@/public/assets/background/mirrorball.png";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const StartToday = () => {
  return (
    <section className="flex-column-center relative h-fit w-full gap-[32px] bg-white bg-startToday bg-cover bg-center bg-no-repeat px-[16px] py-[100px]">
      <Image
        src={mirrorball}
        alt="mirrorball"
        className="absolute h-[300px] max-h-[465px] w-[312px] max-w-[478px] avg:h-auto avg:w-auto"
      />
      <h2 className="title-petrona-medium z-10 max-w-[1092px] text-center text-black">
        Start Today. Get your Spanish <br /> Digital Nomad Visa asap.
      </h2>
      <div className="flex-column-center z-10 gap-[24px]">
        <p className="intro max-w-[85%] text-center text-black md:max-w-[75%] lg:max-w-[972px]">
          We pave the way to streamline and fast track your digital nomad
          residence in Spain. We handle the tedious details so you can enjoy
          more tapas, siestas and sunshine in Spain.
        </p>
        <Button
          className="flex-center h-fit max-w-[272px] gap-[10px] rounded-[55px] bg-mint px-[15px] py-[8px] hover:bg-orange md:px-[30px] md:py-[12px]"
          asChild
        >
          <Link className="flex-center gap-[10px]" href="#pricing">
            <p className="button-text text-white">Get Started</p>
            <Image src={chevron} alt="chevron right" width={20} height={20} />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export { StartToday };
