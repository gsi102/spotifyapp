import React from "react";
import { Routes, Route } from "react-router-dom";
import MainComponent from "./components/MainComponent/MainComponent";
import Login from "./components/Login/Login";

import mainStyles from "./styles/mainStyles.module.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path={"/main"} element={<MainComponent />} />
      </Routes>
    </div>
  );
}

export default App;
