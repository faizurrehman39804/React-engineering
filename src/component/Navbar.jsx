import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold">MyApp</h1>

        {/* Menu */}
        <ul className="flex gap-6 font-medium">
          <li>
            <a href="/" className="hover:text-yellow-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-yellow-300">
              About
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-yellow-300">
              Services
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-yellow-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Button */}
        <button className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200">
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
