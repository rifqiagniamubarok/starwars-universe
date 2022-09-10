import React, { useState } from "react";
import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import { FilmDetail } from "../../pages";
import MainApp from "../../pages/MainApp";

const Routes = () => {
  const [nightMode, setNightMode] = useState(false);
  return (
    <BrowserRouter>
      <Router>
        <Route
          path="/*"
          element={
            <MainApp nightMode={nightMode} setNightMode={setNightMode} />
          }
        />
        <Route
          path="/film/:id"
          element={
            <FilmDetail nightMode={nightMode} setNightMode={setNightMode} />
          }
        />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
