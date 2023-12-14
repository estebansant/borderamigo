import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogPosts } from "@/constants/BlogPosts";
// import { getPosts } from "@/app/ghost-config";

const { BLOG_URL, CONTENT_API_KEY } = process.env;

async function getPost(slug) {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}`
  ).then((res) => res.json());

  const titles = res.posts.map((post) => post.title);
  console.log(titles);

  return titles;
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  const post = await getPost();
  return {
    props: { post },
  };
};

const BlogPostsContainer = async (props) => {
  const { posts } = props;
  console.log({ posts });
  return (
    <div className="flex-column-center gap-[32px] avg:flex-row">
      {BlogPosts.map((card, i) => {
        return (
          <Link
            key={i}
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
        );
      })}
    </div>
  );
};

export { BlogPostsContainer };
