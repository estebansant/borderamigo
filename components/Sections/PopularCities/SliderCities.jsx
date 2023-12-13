"use client";

import Slider from "react-slick";
import { PopularCitiesCards } from "../../../constants/PopularCitiesCards";
import Image from "next/image";
import Link from "next/link";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const SliderCities = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
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
    <div className="w-full max-w-[1200px]">
      <Slider {...settings}>
        {PopularCitiesCards.map((card) => {
          return (
            <div
              key={card.id}
              className="max-w-[240px] avg:max-w-[280px] lg:max-w-[358px]"
            >
              <Link
                href={card.link}
                className="flex-column-start h-fit w-auto max-w-[240px] gap-[16px] avg:max-w-[280px] lg:max-w-[358px]"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  className="h-auto max-h-[408px] w-auto max-w-[240px] avg:max-w-[280px] lg:max-w-[358px]"
                />
                <h6 className="intro-bold text-black">{card.title}</h6>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export { SliderCities };
