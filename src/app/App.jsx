import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "normalize.css";
import Loading from "../components/Loading/Loading";
import Navigation from "../components/Navigation/Navigation";
import "./assets/fonts/fonts.css";
import "./app.css";

const Home = lazy(() => import("../pages/Home/Home"));
const Team = lazy(() => import("../pages/Tasks"));
const Tasks = lazy(() => import("../pages/Team/Team"));
const RoadMap = lazy(() => import("../pages/RoadMap"));

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Tasks />} />
            <Route path="/tasks" element={<Team />} />
            <Route path="/roadmap" element={<RoadMap />} />
          </Routes>
        </Suspense>
        <Navigation />
      </div>
    </Router>
  );
};

export default App;
