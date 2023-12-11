import React from "react";
import Image from "next/image";
import Link from "next/link";
import announcement from "@/public/assets/icons/announcement.svg";

const Announcement = () => {
  return (
    <div className="flex-column-center absolute bottom-[-180px] w-[92.5%] max-w-[1280px] rounded-[30px] border-[1px] border-solid border-mint bg-white p-[16px] avg:bottom-[-100px] avg:p-[20px] md:p-[32px]">
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
        <Link href="/" className="paragraph-petrona text-mint hover:underline">
          See the circular
        </Link>
      </p>
    </div>
  );
};

export { Announcement };
