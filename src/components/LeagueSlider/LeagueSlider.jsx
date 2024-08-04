import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import Shovel1 from "./assets/images/shovel.svg";
import Shovel2 from "./assets/images/shovel2.svg";
import Shovel3 from "./assets/images/shovel3.svg";
import Shovel4 from "./assets/images/shovel4.svg";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export const LeagueSlider = () => {
  const data = [
    {
      title: "Wood League",
      text: "Your number of shares determines the league you enter.",
      img: Shovel1,
      start: 20,
      end: 5000,
    },
    {
      title: "Bronze League",
      text: "Your number of shares determines the league you enter.",
      img: Shovel2,
      start: 300,
      end: 5000,
    },
    {
      title: "Silver League",
      text: "Your number of shares determines the league you enter.",
      img: Shovel3,
      start: 1000,
      end: 5000,
    },
    {
      title: "Gold League",
      text: "Your number of shares determines the league you enter.",
      img: Shovel4,
      start: 2000,
      end: 5000,
    },
  ];

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
    >
      {data.map((slide, idx) => {
        return (
          <SwiperSlide key={idx}>
            <span className="league-slider__title">{slide.title}</span>
            <p className="league-slider__text">{slide.text}</p>
            <img className="league-slider__img" src={slide.img} alt="" />

            <ProgressBar start={slide.start} end={slide.end} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
