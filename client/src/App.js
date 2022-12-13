import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            currentForm === "login" ? (
              <Login onFormSwitch={toggleForm} />
            ) : (
              <Register onFormSwitch={toggleForm} />
            )
          }
        />
        {/* <Route path="/home" element={<HomePage />} /> */}

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
