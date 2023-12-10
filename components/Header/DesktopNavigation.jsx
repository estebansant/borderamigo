import React from "react";
import Link from "next/link";
import { HeaderLinks } from "./../../constants/HeaderLinks";

const DesktopNavigation = () => {
  return (
    <nav className="md:flex-between fixed z-50 hidden w-full gap-5 bg-transparent p-6 dark:shadow-none sm:px-12">
      <div className="flex-center">
        <Link href="/">
          <p className="button-text text-black">BorderAmigo</p>
        </Link>
      </div>
      <div className="flex-center gap-10">
        {HeaderLinks.map((item, i) => {
          return (
            <Link href={item.link} key={i} className="hover:cursor-pointer">
              <p className="navbar text-gray hover:underline">{item.title}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex-center gap-6">
        <Link href="/log-in">
          <p className="paragraph-bold text-mint hover:underline">Login</p>
        </Link>
        <Link
          href="/sign-up"
          className="flex-center duration-[350ms] rounded-[55px] bg-mint px-5 py-[8px] transition-all ease-in-out hover:bg-orange"
        >
          <p className="small-paragraph-semibold text-white">Get Started</p>
        </Link>
      </div>
    </nav>
  );
};

export { DesktopNavigation };
