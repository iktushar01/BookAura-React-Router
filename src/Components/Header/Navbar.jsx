import React, { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = (
    <>
  <li className="text-xl font-semibold">
    <Link to="/">Home</Link>
  </li>
  <li className="text-xl font-semibold">
    <Link to="/about">About</Link>
  </li>
  <li className="text-xl font-semibold">
    <Link to="/readList">Listed Books</Link>
  </li>
  <li className="text-xl font-semibold">
    <Link to="/">Pages to Read</Link>
  </li>
  <li className="lg:hidden">
    <button className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition text-sm w-full text-left">
      Sign Up
    </button>
  </li>
</>

  );

  return (
    <div>
      <div className="navbar bg-amber-400 border-2">
        <div className="navbar-start">
          <div className="dropdown">
            {/* Controlled swap toggle */}
            <label className="btn btn-circle swap swap-rotate lg:hidden">
              <input
                type="checkbox"
                checked={menuOpen}
                onChange={() => setMenuOpen(!menuOpen)}
              />
              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>

            {/* dropdown menu */}
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow transition-all duration-200 ${
                menuOpen ? "block" : "hidden"
              }`}
            >
              {links}
            </ul>
          </div>

          <a className="text-lg font-bold ml-2 text-white">
            <span className="text-green-700">Book</span>
            <span className="text-blue-500">Aura</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end flex gap-2">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 text-sm transition">
            Sign In
          </button>
          <button className="bg-gray-400 text-sm text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition hidden lg:inline-block">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
