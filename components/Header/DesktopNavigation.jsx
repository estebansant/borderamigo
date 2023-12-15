"use client";
import React from "react";
import Link from "next/link";
import { HeaderLinks } from "./../../constants/HeaderLinks";
import logo from "@/public/assets/icons/logo.png";
import Image from "next/image";
import { motion } from "framer-motion";

const DesktopNavigation = () => {
  return (
    <motion.nav
      initial={{ y: "-3vh", opacity: 0 }}
      animate={{
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.7,
          ease: "easeInOut",
        },
      }}
      className="md:flex-between z-50 hidden w-full max-w-[1280px] gap-5 p-6 dark:shadow-none sm:px-12"
    >
      <div className="flex-center">
        <Link href="/">
          <Image src={logo} alt="visa pulse" className="h-[60px] w-[180px]" />
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
          href="#pricing"
          className="flex-center duration-[350ms] rounded-[55px] bg-mint px-5 py-[8px] transition-all ease-in-out hover:bg-orange"
        >
          <p className="small-paragraph-semibold text-white">Get Started</p>
        </Link>
      </div>
    </motion.nav>
  );
};

export { DesktopNavigation };
