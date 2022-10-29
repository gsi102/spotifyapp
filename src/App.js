import React from "react";
import { Routes, Route } from "react-router-dom";
import MainComponent from "./components/MainComponent/MainComponent";
import Login from "./components/Login/Login";
import RequireLogin from "./hoc/RequireLogin";

import mainStyles from "./styles/mainStyles.module.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <RequireLogin>
              <MainComponent />
            </RequireLogin>
          }
        />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
