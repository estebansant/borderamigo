"use client";

import Slider from "react-slick";
import { PopularCitiesCards } from "../../../constants/PopularCitiesCards";
import prevArrow from "@/public/assets/icons/arrow_prev_active.svg";
import nextArrow from "@/public/assets/icons/arrow_next_active.svg";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCities = () => {
  const SlickArrowPrev = ({ currentSlide, slideCount, ...props }) => (
    <Image src={prevArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowNext = ({ currentSlide, slideCount, ...props }) => (
    <Image src={nextArrow} alt="nextArrow" {...props} />
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowPrev />,
    nextArrow: <SlickArrowNext />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="flex-center w-full max-w-[1200px]">
      <Slider
        {...settings}
        className="w-[90%] border-none pl-[45px] focus:border-none avg:pl-[75px] md:pl-[50px] lg:w-full"
      >
        {PopularCitiesCards.map((card) => {
          return (
            <div key={card.id} className="border-none focus:border-none">
              <Link
                href={card.link}
                className="flex-column-center h-fit w-auto max-w-[210px] gap-[16px] border-none focus:border-none avg:max-w-[250px] lg:max-w-[340px]"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  className="h-auto max-h-[408px] w-auto max-w-[210px] avg:max-w-[250px] lg:max-w-[340px]"
                />
                <h6 className="intro-bold text-center text-black">
                  {card.title}
                </h6>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export { SliderCities };
