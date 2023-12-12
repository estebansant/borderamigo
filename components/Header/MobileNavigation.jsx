"use client";

import React from "react";
import Link from "next/link";
import { HeaderLinks } from "./../../constants/HeaderLinks";
import Image from "next/image";
import hamburguerMenu from "./../../public/assets/icons/hamburguer_menu.svg";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const MobileNavigation = () => {
  return (
    <nav className="flex h-[64px] w-full items-center justify-between border-[1px] border-solid border-line bg-pink p-8 md:hidden">
      <Link href="/">
        <p className="button-text text-black">BorderAmigo</p>
      </Link>

      <Popover>
        <PopoverTrigger asChild>
          <Image
            src={hamburguerMenu}
            alt="hamburguer menu icon"
            width={32}
            height={32}
            className="md:hidden"
          />
        </PopoverTrigger>
        <PopoverContent className="flex-column mr-[25px] gap-[10%] border-none bg-pink">
          <div className="flex-between mt-[12px] h-[95%] w-full flex-col gap-[35px]">
            <div className="flex-column-center h-auto w-full gap-[2rem]">
              {HeaderLinks.map((item, i) => {
                return (
                  <Link key={i} href={item.link}>
                    <p className="navbar text-gray">{item.title}</p>
                  </Link>
                );
              })}
            </div>

            {/* Auth links */}
            <div className="flex-column-center mb-6 h-auto w-full gap-6">
              <Link
                href="/log-in"
                className="flex-center duration-[350ms] w-[90%] rounded-[55px] border-none bg-line-2 px-5 py-[8px] outline-none transition-all ease-in-out hover:bg-bew-gray focus:outline-none"
              >
                <p className="small-paragraph-semibold text-black">Login</p>
              </Link>
              <Link
                href="/sign-up"
                className="flex-center duration-[350ms] w-[90%] rounded-[55px] bg-mint px-5 py-[8px] transition-all ease-in-out hover:bg-orange"
              >
                <p className="small-paragraph-semibold text-white">
                  Get Started
                </p>
              </Link>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </nav>
  );
};

export { MobileNavigation };
