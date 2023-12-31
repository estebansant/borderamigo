"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogPosts } from "@/constants/BlogPosts";
import { motion } from "framer-motion";

const BlogPostsContainer = () => {
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
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <motion.div
      variants={leftVar}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, delay: 0.2, amount: 0.6 }}
      className="flex-column-center gap-[32px] avg:flex-row"
    >
      {BlogPosts.map((card, i) => {
        return (
          <article
            key={i}
            className="flex-column-start h-auto min-h-[458px] w-auto max-w-[358px] rounded-[16px]"
          >
            <Link
              href={card.link}
              className="flex-column-start w-full gap-[24px] rounded-[16px]"
            >
              <div className="flex-center max-h-[240px] max-w-[358px] overflow-hidden rounded-[16px]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  className="h-auto max-h-[240px] w-full transition-all duration-6000 ease-in-out hover:scale-105"
                />
              </div>

              <div className="flex-column-start w-full max-w-[358px] gap-[16px]">
                <div className="flex-column-start w-full gap-[8px]">
                  <div className="flex-between w-full">
                    <p className="mini text-gray">{card.type}</p>
                    <p className="mini-semibold text-black">{card.time}</p>
                  </div>
                  <h6 className="paragraph-bold text-black">{card.title}</h6>
                </div>
                <p className="mini text-gray">{card.text}</p>
              </div>
            </Link>
          </article>
        );
      })}
    </motion.div>
  );
};

export { BlogPostsContainer };
