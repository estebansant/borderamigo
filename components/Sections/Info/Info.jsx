"use client";
import React from "react";
import Image from "next/image";
import passport from "@/public/assets/icons/passport.svg";
import bullet from "@/public/assets/icons/bullet_ellipse.svg";
import world from "@/public/assets/images/world.png";
import { BasicRequirements } from "@/constants/BasicRequirements";
import { motion } from "framer-motion";

const Info = () => {
  const upVar = {
    offscreen: {
      y: "3vh",
      opacity: 0,
    },
    onscreen: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };
  const rightVar = {
    offscreen: {
      x: "-3vh",
      opacity: 0,
    },
    onscreen: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };
  const leftVar = {
    offscreen: {
      x: "3vh",
      opacity: 0,
    },
    onscreen: {
      x: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section className="flex-center relative h-fit w-full bg-pink px-[16px] pb-[88px]">
      <div className="mt-[175px] flex h-auto w-full max-w-[1200px] flex-col items-center justify-center gap-[50px] avg:mt-[150px] md:flex-row md:gap-[50px] lg:mt-[180px]">
        <div className="flex-column-start w-full gap-[40px] md:max-w-[440px] lg:max-w-[560px]">
          <motion.h2
            variants={upVar}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, delay: 0.2, amount: 0.2 }}
            className="title-opensans text-black"
          >
            The easiest pathway to a European residence and citizenship.
          </motion.h2>

          <motion.div
            variants={rightVar}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, delay: 0.2, amount: 0.2 }}
            className="flex-column-start gap-[24px]"
          >
            <p className="paragraph text-gray">
              Spain has introduced its inaugural visa targeted specifically at
              remote workers and freelancers - the pioneering Spanish Digital
              Nomad Visa, allowing foreign individuals to live and work remotely
              in Spain.
            </p>

            <p className="paragraph-bold text-gray">Basic requirements are:</p>

            <ul className="flex-column-start gap-[18px]">
              {BasicRequirements.map((item, index) => {
                return (
                  <li key={index} className="flex-start">
                    <Image
                      src={bullet}
                      alt="bullet point"
                      width={14}
                      height={14}
                    />
                    <p className="paragraph ml-[8px] text-black">
                      {item.title}
                    </p>
                  </li>
                );
              })}
            </ul>

            <p className="paragraph text-gray">
              While obtaining Spain&aposs digital nomad visa involves a
              bureaucratic paper chase, <b>we streamline everything</b> - by
              helping you navigate needed documents, translations, apostilles,
              and every step, so you avoid the typical administrative maze.
            </p>
          </motion.div>
        </div>

        <motion.article
          variants={leftVar}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, delay: 0.2, amount: 0.5 }}
          className="flex-column-start h-auto w-full gap-[58px] rounded-[24px] bg-white md:max-w-[440px] lg:max-w-[560px]"
        >
          <div className="flex-column-start gap-[16px] pl-[20px] pt-[20px]">
            <p className="small-paragraph-bold uppercase text-black">
              Welcome to
            </p>
            <h6 className="h5-bold text-black">Spanish Digital Nomad Visa</h6>
            <Image src={passport} alt="passport icon" width={36} height={36} />
          </div>
          <Image src={world} alt="world" className="h-auto w-full" />
        </motion.article>
      </div>
    </section>
  );
};

export { Info };
