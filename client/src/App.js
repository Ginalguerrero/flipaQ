import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./Pages/HomePage/index";
import LandingPage from "./Pages/LandingPage";


function App() {

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<LandingPage/>}
        />
        <Route path="/home" element={<Page/>}/>
        {/* <Route path="/home" element={<HomePage />} /> */}

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
     </div>
  );
}

export default App;
