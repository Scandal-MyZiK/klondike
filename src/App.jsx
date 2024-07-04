import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "normalize.css";
import Loading from "./components/Loading/Loading";
import Navigation from "./components/Navigation/Navigation";
import "./app.css";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Profile = lazy(() => import("./pages/Profile"));

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<About />} />
            <Route path="/team" element={<Contact />} />
            <Route path="/roadmap" element={<Profile />} />
          </Routes>
        </Suspense>
        <Navigation />
      </div>
    </Router>
  );
};

export default App;
