import React from "react";
import { Link } from "react-router-dom";

const NavbarRouter = () => {
  return (
    <div className="flex items-center justify-between bg-gray-900 px-8 py-4 text-white">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/project">Project</Link>
      <Link to="/NotFound">404 Page</Link>
    </div>
  );
};

export default NavbarRouter;
