"use client";
import { Button } from "@/components/ui/button";
import { BlogPostsContainer } from "./BlogPostsContainer";
import chevron from "@/public/assets/icons/chevron_right_orange.svg";
import star from "@/public/assets/icons/blog_star.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
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
  return (
    <section
      id="blog"
      className="flex-center h-fit w-full bg-pink px-[16px] py-[50px] md:py-[100px]"
    >
      <div className="flex-column-center w-full max-w-[1200px] gap-[45px] avg:flex-row avg:items-start avg:justify-around">
        <motion.div
          variants={rightVar}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, delay: 0.2, amount: 0.6 }}
          className="flex-column-start gap-[40px]"
        >
          <div className="flex-column-start max-w-[278px] gap-[20px]">
            <div className="flex-center gap-[20px]">
              <Image src={star} alt="north star icon" width={60} height={60} />
              <h2 className="h3-bold text-center text-black">Blog</h2>
            </div>
            <p className="small-paragraph text-black">
              Indulge in our blog posts and learn more about the Spanish Digital
              Nomad Visa. Get expat tips, guides, reviews and much more.
            </p>
          </div>

          <Button
            className="flex-center h-fit max-w-[272px] gap-[10px] rounded-[55px] border-[1px] border-solid border-line bg-pink px-[15px] py-[8px] text-mint hover:bg-white hover:shadow-sm md:px-[30px] md:py-[12px]"
            asChild
          >
            <Link className="flex-center gap-[10px]" href="/">
              <p className="mini-semibold">Load more blog</p>
              <Image src={chevron} alt="chevron right" width={16} height={16} />
            </Link>
          </Button>
        </motion.div>

        <BlogPostsContainer />
      </div>
    </section>
  );
};

export { Blog };
