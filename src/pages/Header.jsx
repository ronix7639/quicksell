import React, { useState } from "react";
import "./Header.css";
import Display from "../assets/Display.png";
import down from "../assets/down.png";

const Header = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (page) => {
    setCurrentPage(page);
    setIsOpen(false); // Close dropdown after an option is selected
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img src={Display} alt="Logo" className="logo" /> Display
        <img src={down} alt="Logo" className="logo" />
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item">
            <a href="#grouping" onClick={() => handleOptionClick("Status")}>
              Grouping
            </a>
            <button
              className="status-button"
              onClick={() => handleOptionClick("Status")}
            >
              Status
              <img src={down} alt="Logo" className="logo" />
            </button>
          </div>
          <div className="dropdown-item">
            <a href="#ordering" onClick={() => handleOptionClick("Priority")}>
              Ordering
            </a>
            <button
              className="priority-button"
              onClick={() => handleOptionClick("Priority")}
            >
              Priority
              <img src={down} alt="Logo" className="logo" />
            </button>
          </div>
          <div className="dropdown-item">
            <a href="#user" onClick={() => handleOptionClick("User")}>
              User
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
