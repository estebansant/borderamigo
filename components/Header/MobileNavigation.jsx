"use client";

import React from "react";
import Link from "next/link";
import { HeaderLinks } from "./../../constants/HeaderLinks";
import Image from "next/image";
import hamburguerMenu from "./../../public/icons/hamburguer_menu.svg";
// import x from "./../../public/icons/x.svg";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNavigation = () => {
  return (
    <nav className="flex h-[64px] w-full items-center justify-end p-8">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src={hamburguerMenu}
            alt="hamburguer menu icon"
            width={40}
            height={40}
            className="sm:hidden"
          />
        </SheetTrigger>

        <SheetContent side="left" className="border-none bg-pink">
          <Link href="/">
            <h2>BorderAmigo</h2>
          </Link>

          <div>
            <SheetClose asChild>
              <div className="">
                {HeaderLinks.map((item, i) => {
                  return (
                    <Link href={item.link} key={i}>
                      <p>{item.title}</p>
                    </Link>
                  );
                })}
              </div>
            </SheetClose>
            <div className="flex-column">
              <SheetClose>
                <Link href="/log-in">
                  <p>Login</p>
                </Link>
              </SheetClose>
              <SheetClose>
                <Link href="/sign-up">
                  <p>Get Started</p>
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
