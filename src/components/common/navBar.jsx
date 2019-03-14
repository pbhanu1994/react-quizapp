import React from "react";

const NavBar = ({ username }) => {
  return (
    <nav className="navbar navbar-light bg-info">
      <span style={{ color: "white" }} className="navbar-brand mb-0 h1">
        QuizApp
      </span>
      <span style={{ color: "white" }} className="navbar-brand mb-0 h3">
        {username}
      </span>
    </nav>
  );
};

export default NavBar;
