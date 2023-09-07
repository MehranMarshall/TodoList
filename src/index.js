import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Tailwind/style/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="flex justify-center items-center min-h-screen customBg">
    <App />
  </div>
);
