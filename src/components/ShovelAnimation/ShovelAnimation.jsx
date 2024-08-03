import React, { useEffect, useState } from "react";

import ShovelImage from "./assets/img/shovel.png";
import "./style.css";

export const ShovelAnimation = () => {
  const [coins, setCoins] = useState([]);

  const handleTouch = (e) => {
    const newCoins = Array.from(e.touches).map((touch) => {
      // 42 - coin width
      const x =
        touch.clientX + 42 > window.innerWidth
          ? window.innerWidth - 42
          : touch.clientX;
      const y = touch.clientY;
      return { id: Date.now() + touch.identifier, x, y };
    });
    setCoins((prevCoins) => [...prevCoins, ...newCoins]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCoins(
        (prevCoins) => prevCoins.filter((coin) => Date.now() - coin.id < 5000) // 5-second animation
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="shovel" onTouchStart={handleTouch}>
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
