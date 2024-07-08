import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "normalize.css";
import Loading from "../components/Loading/Loading";
import Navigation from "../components/Navigation/Navigation";
import Home from "../pages/Home/Home";
import Team from "../pages/Team/Team";
import Tasks from "../pages/Tasks/Tasks";
import RoadMap from "../pages/Roadmap/RoadMap";
import "./assets/fonts/fonts.css";
import "./app.css";

const App = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
