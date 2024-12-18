import React, { useState } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("active");
  };

  return (
    <header>
      <a href="#" className="logo">
        Pizza Palace
      </a>
      <div className="bx bx-menu" id="menu-icon"></div>

      <ul className="navbar">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#services">Service</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <div
          className="bx bx-moon"
          id="darkmode"
          onClick={toggleDarkMode}
        ></div>
      </ul>
    </header>
  );
}

export default Header;
