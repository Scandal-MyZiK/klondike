import React, { useEffect, useState } from "react";

import ShovelImage from "./assets/img/shovel.png";
import "./style.css";

export const ShovelAnimation = () => {
  const [coins, setCoins] = useState([]);

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    setCoins((prevCoins) => [...prevCoins, { id: Date.now(), x, y }]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins((prevCoins) =>
        prevCoins.filter((coin) => {
          return Date.now() - coin.id < 5000; // 2 секундная анимация
        })
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="shovel" onClick={handleClick}>
      {coins.map((coin) => (
        <div
          key={coin.id}
          className="coin"
          style={{ left: coin.x, top: coin.y }}
        />
      ))}
      <img className="shovel__img" src={ShovelImage} alt="" />
    </div>
  );
};
