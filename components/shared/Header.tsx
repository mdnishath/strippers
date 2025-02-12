"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#282c33] text-[#ededed] py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-500">
          <Image src={"/logo.svg"} alt="Logo" width={200} height={60} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 md:items-center">
          <Link href="/" className="hover:text-red-500">
            Home
          </Link>
          <Link href="/strippers" className="hover:text-red-500">
            Strippers
          </Link>
          <Link href="/about" className="hover:text-red-500">
            About Us
          </Link>
          <Link href="/faq" className="hover:text-red-500">
            FAQ
          </Link>
          <Link href="/contact" className="hover:text-red-500">
            Contact
          </Link>
          <Link href="/book-now">
            <button className="bg-[#ff0000] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl transition">
              Book Now
            </button>
          </Link>
        </nav>

        {/* Hamburger Icon for Mobile */}
        <div
          className=" md:hidden cursor-pointer z-[100!important] absolute top-5 right-4"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <FaTimes size={24} className="text-[#ededed]" />
          ) : (
            <FaBars size={24} className="text-[#ededed]" />
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full bg-[#282c33] text-[#ededed] z-40 py-6 px-6 space-y-6">
          <Link
            href="/"
            className="block text-xl hover:text-red-500"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/strippers"
            className="block text-xl hover:text-red-500"
            onClick={toggleMenu}
          >
            Strippers
          </Link>
          <Link
            href="/about"
            className="block text-xl hover:text-red-500"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href="/faq"
            className="block text-xl hover:text-red-500"
            onClick={toggleMenu}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className="block text-xl hover:text-red-500"
            onClick={toggleMenu}
          >
            Contact
          </Link>
          <Link href="/book-now" onClick={toggleMenu}>
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl transition w-full">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
