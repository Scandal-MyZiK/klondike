import React, { useEffect, useState } from "react";

import "./style.css";

export const Notification = ({ message, username, points, onClose }) => {
  const [hideNotification, setHideNotification] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideNotification(true);
    }, 3000); // Auto close after 3 seconds

    const timer2 = setTimeout(() => {
      onClose();
    }, 4000); // Auto close after 4 seconds

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [onClose]);

  return (
    <div
      className={`notification ${hideNotification ? "notification-hide" : ""}`}
    >
      <b>{username}</b>
      {message}
      <b>{points} points</b>

      <span className="notification__line"></span>
    </div>
  );
};
