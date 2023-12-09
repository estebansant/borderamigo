import React from "react";
import Link from "next/link";
import { HeaderLinks } from "./../../constants/HeaderLinks";

const DesktopNavigation = () => {
  return (
    <nav className="md:flex-between fixed z-50 hidden w-full gap-5 p-6 dark:shadow-none sm:px-12">
      <div className="flex-center">
        <Link href="/">
          <p>BorderAmigo</p>
        </Link>
      </div>
      <div className="flex-center gap-10">
        {HeaderLinks.map((item, i) => {
          return (
            <Link href={item.link} key={i}>
              <p>{item.title}</p>
            </Link>
          );
        })}
      </div>
      <div className="flex-center gap-6">
        <Link href="/log-in">
          <p>Login</p>
        </Link>
        <Link href="/sign-up">
          <p>Get Started</p>
        </Link>
      </div>
    </nav>
  );
};

export { DesktopNavigation };
