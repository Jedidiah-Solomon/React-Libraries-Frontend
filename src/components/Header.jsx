import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/img/react_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo}
              alt="Nigeria Election App Logo"
              className="h-10 mr-4"
            />
          </Link>
          <h1 className="mobile-header-title tablet-header-title laptop-header-title desktop-header-title">
            React Libraries
          </h1>
        </div>
        <nav className="hidden laptop:flex space-x-4">
          <Link to="/" className="hover:underline animate-spin">
            Home
          </Link>
          <Link to="/signup" className="hover:underline animate-bounce">
            Signup
          </Link>
          <Link to="/login" className="hover:underline animate-bounce">
            Login
          </Link>
          <Link to="/dashboard" className="hover:underline animate-bounce">
            Dashboard
          </Link>
          <Link to="/sendemail" className="hover:underline animate-bounce">
            Send Email
          </Link>
          <Link to="/stats" className="hover:underline animate-bounce">
            Stats
          </Link>
        </nav>
        <button
          className="laptop:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <nav className="laptop:hidden bg-blue-600 text-white p-4">
          <Link to="/" className="block py-2 hover:underline">
            Home
          </Link>
          <Link to="/signup" className="block py-2 hover:underline">
            Signup
          </Link>
          <Link to="/login" className="block py-2 hover:underline">
            Login
          </Link>
          <Link to="/dashboard" className="block py-2 hover:underline">
            Dashboard
          </Link>
          <Link to="/sendemail" className="block py-2 hover:underline">
            Send Email
          </Link>
          <Link to="/stats" className="block py-2 hover:underline">
            Stats
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
