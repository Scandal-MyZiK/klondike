import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "normalize.css";
import Loading from "../components/Loading/Loading";
import Navigation from "../components/Navigation/Navigation";
import { Notification } from "../components/Notification/Notification";
import Home from "../pages/Home/Home";
import Team from "../pages/Team/Team";
import Tasks from "../pages/Tasks/Tasks";
import RoadMap from "../pages/Roadmap/RoadMap";
import "./assets/fonts/fonts.css";
import "./app.css";

const App = () => {
  const [showNotification, setShowNotification] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (showLoading === false) {
      setShowNotification(true);
    }
  }, [showLoading]);

  if (showLoading) {
    return (
      <div className="app-container">
        <Loading />
      </div>
    );
  }

  return (
    <Router>
      <div className="app-container">
        {showNotification && (
          <Notification
            points="1,000"
            username="Antonio777"
            message="successfully completed the main task and received"
            onClose={() => {
              setShowNotification(false);
            }}
          />
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Tasks />} />
          <Route path="/tasks" element={<Team />} />
          <Route path="/roadmap" element={<RoadMap />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
};

export default App;
