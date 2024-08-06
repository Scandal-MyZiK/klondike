import React from "react";
import "./style.css";

export const ProgressBar = ({ start, end }) => {
  console.log(start, end, start / end);

  return (
    <div className="progress-block">
      <span>
        {start}/{end}
      </span>
      <div className="progress-bar">
        <div className="progress-bar__line">
          <span
            className="progress-bar__left"
            style={{ width: `${(start / end) * 100}%` }}
          ></span>
          <span
            className="progress-bar__circle"
            style={{
              left: `${
                (start / end) * 100 > 3 && (start / end) * 100 < 97
                  ? `calc(${(start / end) * 100}% - 14px)`
                  : (start / end) * 100 > 97
                  ? "auto"
                  : "0"
              }`,

              right: `${(start / end) * 100 > 97 ? "0" : "auto"}`,
            }}
          ></span>
          <span className="progress-bar__right"></span>
        </div>
      </div>
    </div>
  );
};
