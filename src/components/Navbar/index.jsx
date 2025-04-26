import { faBarsStaggered, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, title: "Home", href: "#home" },
    { id: 2, title: "About Us", href: "#about" },
    { id: 3, title: "Services", href: "#services" },
    { id: 4, title: "Portfolio", href: "#portfolio" },
    { id: 5, title: "Team", href: "#team" },
    { id: 6, title: "Contact", href: "#contact" },
  ];

  const registerLinks = [
    { id: 2, title: "Login", href: "#login" },
    { id: 1, title: "Register", href: "#register" },
  ];

  return (
    <header className="w-full fixed z-[99999] bg-white">
      <div className="w-[90%] mx-auto px-6 py-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold">
          Notch<span className="text-3xl text-[#F15C45]">.</span>
        </h2>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBarsStaggered}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-90" : ""
            }`}
          />
        </button>

        {/* Desktop View Menu */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <nav className="lg:-mr-15">
            <ul className="flex gap-10">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="transition hover:text-[#F55B47] duration-300 font-semibold"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="hidden lg:flex text-sm gap-4">
          <a
            href="#"
            className="px-4 py-2 font-semibold hover:bg-[#F55B47] hover:text-white duration-300 rounded-md border border-gray-400 transition">
            Login
          </a>
          <a
            href="#"
            className="px-4 py-2 font-semibold text-white bg-[#F55B47] hover:bg-transparent hover:border-[#F55B47] border hover:text-[#F55B47] duration-300 rounded-md transition">
            Signup
          </a>
        </div>
      </div>

      {/* Mobile View Menu */}
      <div
        className={`lg:hidden bg-white fixed w-full z-50 px-6 space-y-4 transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="block text-center transition">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-3 mb-5">
          <a
            href="#"
            className="px-4 block w-full py-2 text-center font-semibold hover:text-[#F55B47] duration-300 rounded-md border transition">
            Login
          </a>
          <a
            href="#"
            className="px-4 py-2 block w-full text-center font-semibold text-white bg-[#F55B47] hover:text-white duration-300 rounded-md transition">
            Signup
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
