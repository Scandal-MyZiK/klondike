import React from "react";
import "./style.css";

import Diamond from "./assets/diamond.svg";
import Cup from "./assets/cup.svg";
import Skull from "./assets/skull.svg";
import Box from "./assets/box.svg";
import Gold from "./assets/gold.svg";
import Ready from "./assets/ready.svg";

export const StoryLine = () => {
  const data = [
    {
      img: Diamond,
      title: "dec 2023",
      text: "Built a fully working MVP and integrated first 10 P2P lending platforms.",
      finished: true,
    },
    {
      img: Cup,
      title: "feb 2024",
      text: "Built a fully working MVP and integrated first 10 P2P",
    },
    {
      img: Skull,
      title: "mar 2024",
      text: "Built a fully working MVP and integrated first 10 P2P lending platforms.",
    },
    {
      img: Gold,
      title: "jul 2024",
      text: "Built a fully working MVP and integrated firs",
    },
    {
      img: Box,
      title: "sep 2024",
      text: "Built a fully working MVP and integrated firs",
    },
  ];

  return (
    <ul className="storyline">
      {data.map((item, index) => {
        return (
          <li className={`storyline__item`} key={index}>
            <div className="storyline__img-block">
              <img src={item.img} alt="" className="storyline__img" />
            </div>
            <div className="storyline__content">
              <span className="storyline__title">
                {item.title}{" "}
                {item.finished && (
                  <img className="storyline__ready-icon" src={Ready} alt="" />
                )}
              </span>
              <p className="storyline__text">{item.text}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
