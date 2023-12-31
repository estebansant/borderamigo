"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import announcement from "@/public/assets/icons/announcement.svg";
import { motion } from "framer-motion";

const Announcement = () => {
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

  return (
    <motion.div
      variants={upVar}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, delay: 0.2, amount: 0.2 }}
      className="flex-column-center absolute bottom-[-110px] z-10 w-[92.5%] max-w-[1280px] rounded-[30px] border-[1px] border-solid border-mint bg-white p-[16px] avg:bottom-[-95px] avg:p-[20px] md:p-[32px]"
    >
      <div className="flex-start mb-[20px] w-full gap-[16px]">
        <Image src={announcement} alt="announcement" width={32} height={32} />
        <h3 className="subtitle-petrona-bold text-mint">Announcement</h3>
      </div>
      <p className="paragraph-petrona text-black">
        The long-awaited Digital Nomad Visa for Spain is here and it promises
        appealing residency and tax perks for remote workers seeking to apply
        residency and live in Spain.This pioneering visa welcomes remote
        professionals from non-EU nations to reside in Spain, whether briefly or
        for long durations. It also presents a pathway to permanent resident
        status after 5 years and to citizenship after a decade.{" "}
        <Link
          href="https://www.exteriores.gob.es/Consulados/londres/en/ServiciosConsulares/Paginas/Consular/Digital-Nomad-Visa.aspx"
          className="paragraph-petrona text-mint hover:underline"
        >
          See the circular
        </Link>
      </p>
    </motion.div>
  );
};

export { Announcement };
