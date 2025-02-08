"use client";




import { useState } from "react";
import { ShoppingCartIcon, UserCircleIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 w-full">
      <div className="py-3 px-6 flex items-center justify-between">
        <div className="text-xl font-bold">Avion</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/About" className="hover:text-gray-600">About Us</Link>
          <Link href="/Contact" className="hover:text-gray-600">Contact</Link>
          <Link href="/Blog" className="hover:text-gray-600">Blog</Link>

          <Link href="/Search">
            <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
          </Link>

          <Link href="/Cart">
            <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
          </Link>

          <Link href="/checkout">
            <UserCircleIcon className="h-6 w-6 cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-4">
          <Link href="/about" className="hover:text-gray-600">About Us</Link>
          <Link href="/Listing" className="hover:text-gray-600">Contact</Link>
          <Link href="/profile" className="hover:text-gray-600">Blog</Link>
          



          <Link href="/Search">
            <MagnifyingGlassIcon className="h-6 w-6 cursor-pointer" />
          </Link>

          <Link href="/Cart">
            <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
          </Link>

          <Link href="/checkout">
            <UserCircleIcon className="h-6 w-6 cursor-pointer" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default TopBar;
