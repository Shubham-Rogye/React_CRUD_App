import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <img src="/data_log.jpg" />
        </div>
        <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/showdata">Show Data</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
