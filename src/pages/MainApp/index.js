import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import { Navbar, NightMode } from "../../components";
import Character from "../Character";
import Home from "../Home";
import Planet from "../Planet";
import { lightCover, nightCover } from "../../assets";

const MainApp = (props) => {
  const { nightMode, setNightMode } = props;
  return (
    <div>
      <div>
        <Navbar nightMode={nightMode} />
        <NightMode night={nightMode} setNight={setNightMode} />
      </div>
      <div
        className={`${
          nightMode
            ? `bg-primaryDark text-primary`
            : `bg-primary text-primaryDark`
        } min-h-screen transition ease-in duration-300 pb-40`}
      >
        <div className="container mx-auto md:px-20 lg:px-52">
          <div className="flex justify-center pt-20 pb-5 md:pt-36">
            <img
              src={nightMode ? nightCover : lightCover}
              alt="gambar"
              className="w-[300px] md:w-[400px] md:mb-20"
            />
          </div>
          <Router>
            <Route path="" element={<Home nightMode={nightMode} />} />
            <Route path="planet" element={<Planet nightMode={nightMode} />} />
            <Route
              path="character"
              element={<Character nightMode={nightMode} />}
            />
          </Router>
        </div>
      </div>
    </div>
  );
};

export default MainApp;
