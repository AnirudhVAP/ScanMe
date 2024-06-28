import React from "react";
import { icons } from "../../assets/icons/icons";
import "./Header.css";

function Header({ onSearchChange }) {
  return (
    <>
      <h2 className="heading">France Restaurant</h2>
      <div className="header">
        <img src={icons.menuicon} alt="Menu" className="menu-icon" />
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            onChange={onSearchChange}
          />
          <img src={icons.searchicon} alt="Search" className="search-icon" />
        </div>
        <img src={icons.filtericon} alt="Filter" className="filter-icon" />
      </div>
    </>
  );
}

export default Header;
