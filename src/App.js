import React, { useState } from "react";
import "./App.css";
import Header from "./pages/Header";
import Priority from "./pages/Priority";
import User from "./pages/User";
import Status from "./pages/Status";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Status"); // Default page

  const renderPage = () => {
    switch (currentPage) {
      case "Status":
        return <Status />;
      case "Priority":
        return <Priority />;
      case "User":
        return <User />;
      default:
        return <Status />;
    }
  };

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;
