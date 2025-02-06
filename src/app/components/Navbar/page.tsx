"use client";

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  // for the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let navItems = [
    { name: "Home", link: "/" },
    { name: "Plant Pots", link: "/Plant" },
    { name: "Ceramics", link: "/Cera" },
    { name: "Tables", link: "/Tables" },
    { name: "Chairs", link: "/Chairs" },
    { name: "Crockery", link: "/Crockery" },
    { name: "Tableware", link: "/Tableware" },
    { name: "Cutlery", link: "/Cutlery" },
  ];

  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex justify-between items-center p-4 sm:p-6 md:p-8">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center space-x-6 text-base font-medium">
          {navItems.map((item, i) => (
            <li key={i}>
              <Link href={item.link} className="hover:text-gray-600">{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-xl">
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 p-4 bg-white">
          {navItems.map((item, i) => (
            <Link key={i} href={item.link} className="text-lg">{item.name}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
