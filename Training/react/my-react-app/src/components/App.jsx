import React, { useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/Theme.css";
import MainLayout from "./MainLayout";

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("App Component rendered");
  });

  return (
    <div className={`theme ${theme}`}>
      <MainLayout />
    </div>
  );
}

export default App;
