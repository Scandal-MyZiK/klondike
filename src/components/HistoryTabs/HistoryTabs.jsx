import React, { useState } from "react";
import "./style.css";
import { Button } from "../../components/Buttons/Button";
import { HistoryItem } from "../../components/HistoryItem/HistoryItem";

export const HistoryTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabButtonClick = (index) => {
    setActiveTab(index);
  };

  const buttons = ["Active", "Completed"];

  const contents = [
    [
      { text: "Subscribe to our CEO channel (RU)", price: "+ $ 100,000" },
      { text: "Subscribe to our CEO channel (RU)", price: "+ $ 100,000" },
      { text: "Subscribe to our CEO channel (RU)", price: "+ $ 100,000" },
      { text: "Subscribe to our CEO channel (RU)", price: "+ $ 100,000" },
    ],
    [
      { text: "Subscribe to our CEO channel (RU)", price: "+ $ 100,000" },
      { text: "Subscribe to our CEO channel (RU)", price: "+ $ 100,000" },
      { text: "Subscribe to our CEO channel (RU)", price: "+ $ 100,000" },
    ],
  ];

  return (
    <div className="history-tabs">
      <div className="history-tabs__btns">
        {buttons.map((button, index) => (
          <Button
            text={button}
            key={index}
            active={activeTab === index}
            handleClick={() => handleTabButtonClick(index)}
          />
        ))}
      </div>
      <div className="history-tabs__contents">
        {contents.map((content, index) => (
          <div
            className={`history-tabs__content ${
              activeTab === index ? "active" : ""
            }`}
            key={index}
          >
            {content.map((historyItem, itemIndex) => (
              <HistoryItem
                key={itemIndex}
                price={historyItem.price}
                text={historyItem.text}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
