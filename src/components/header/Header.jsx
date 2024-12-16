import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Order your favourite meal here</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat,
          sed! Dicta molestias dignissimos sunt veritatis animi? Id iure a
          molestiae!
        </p>
        <a href="#explore-menu">
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header;
