"use client";

import React from "react";
import Link from "next/link";
import { HeaderLinks } from "./../../constants/HeaderLinks";
import Image from "next/image";
import hamburguerMenu from "./../../public/assets/icons/hamburguer_menu.svg";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNavigation = () => {
  return (
    <nav className="flex h-[64px] w-full items-center justify-between border-[1px] border-solid border-line bg-pink p-8 md:hidden">
      <Link href="/">
        <p className="button-text text-black">BorderAmigo</p>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={hamburguerMenu}
            alt="hamburguer menu icon"
            width={40}
            height={40}
            className="md:hidden"
          />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="flex-column gap-[10%] border-none bg-pink"
        >
          <Link href="/">
            <p className="button-text text-black">BorderAmigo</p>
          </Link>

          <div className="flex-between h-[95%] w-full flex-col">
            <div className="flex-column-center h-auto w-full gap-[2rem]">
              {HeaderLinks.map((item, i) => {
                return (
                  <SheetClose asChild key={i}>
                    <Link href={item.link}>
                      <p className="navbar text-gray">{item.title}</p>
                    </Link>
                  </SheetClose>
                );
              })}
            </div>

            {/* Auth links */}
            <div className="flex-column-center mb-6 h-auto w-full gap-6">
              <SheetClose className="border-none focus:outline-none">
                <Link
                  href="/log-in"
                  className="flex-center duration-[350ms] w-[225px] rounded-[55px] border-none bg-line-2 px-5 py-[8px] outline-none transition-all ease-in-out hover:bg-bew-gray focus:outline-none"
                >
                  <p className="small-paragraph-semibold text-black">Login</p>
                </Link>
              </SheetClose>
              <SheetClose>
                <Link
                  href="/sign-up"
                  className="flex-center duration-[350ms] w-[225px] rounded-[55px] bg-mint px-5 py-[8px] transition-all ease-in-out hover:bg-orange"
                >
                  <p className="small-paragraph-semibold text-white">
                    Get Started
                  </p>
                </Link>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export { MobileNavigation };
