"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";
import ProofStrip from "./ProofStrip";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Period Pain Relief", href: "#period-pain-relief", highlight: true },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Why Crocto", href: "#why-crocto" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "She Reads", href: "#she-reads" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white/95 backdrop-blur-md transition-all duration-300">
      {/* Top Announcement Bar */}
      {/* <div className="bg-[#8576ff] text-white text-xs md:text-sm py-2 px-4 text-center font-medium flex items-center justify-center gap-2 tracking-wide transition-all duration-300">
        <span className="inline-block hover:scale-105 transition-transform duration-200">
          Suggested by Experts
        </span>
        <span className="opacity-60">•</span>
        <a
          href="#shop"
          className="underline font-semibold hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          Grab now
        </a>
      </div> */}
      <ProofStrip/>

      {/* Main Navbar Header */}
      <nav className="border-b border-gray-100 px-4 md:px-12 h-20 flex items-center justify-between">
        {/* Left Side: Animated Hamburger Button + Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-[#8576ff] focus:outline-none transition-colors duration-200 group"
            aria-label="Toggle menu"
          >
            {/* Custom Morphing Animated Hamburger/X Icon */}
            <div className="w-6 h-5 relative flex flex-col justify-between items-center">
              <span
                className={`w-full h-0.5 bg-current rounded-full transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-2 bg-[#8576ff]" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transition-all duration-200 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current rounded-full transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2.5 bg-[#8576ff]" : ""
                }`}
              />
            </div>
          </button>

          {/* Logo with Scale Hover */}
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/images/logo.png"
              alt="Crocto Logo"
              width={180}
              height={60}
              className="h-10 md:h-14 lg:scale-105 w-auto object-contain transition-opacity duration-200 "
              priority
            />
          </Link>
        </div>

        {/* Center: Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {navLinks.map((link, index) => (
            <li key={index} className="relative py-2 group">
              <Link
                href={link.href}
                className={`inline-block transition-all duration-300 group-hover:-translate-y-0.5 ${
                  link.highlight
                    ? "text-[#8576ff] font-bold"
                    : "text-gray-700 hover:text-[#8576ff]"
                }`}
              >
                {link.name}
              </Link>
              {/* Animated Underline Effect */}
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#8576ff] rounded-full transform origin-left transition-transform duration-300 ease-out ${
                  link.highlight
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </li>
          ))}
        </ul>

        {/* Right Side: Action Icons */}
        <div className="flex items-center gap-3 md:gap-5 text-gray-800">
          {/* Search Icon */}
          <button
            className="p-2 hover:text-[#8576ff] hover:bg-[#8576ff]/10 rounded-full transition-all duration-300 hover:scale-110 active:scale-90"
            aria-label="Search"
          >
            <Search size={22} className="transition-transform duration-300" />
          </button>

          {/* Cart Icon */}
          <Link
            href="/cart"
            className="p-2 hover:text-[#8576ff] hover:bg-[#8576ff]/10 rounded-full transition-all duration-300 hover:scale-110 active:scale-90 relative"
            aria-label="Cart"
          >
            <ShoppingBag size={22} />
            {/* Animated Cart Badge */}
            <span className="absolute top-0 right-0 bg-[#8576ff] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center animate-pulse border-2 border-white shadow-sm">
              0
            </span>
          </Link>

          {/* Profile Icon */}
          <Link
            href="/account"
            className="p-2 hover:text-[#8576ff] hover:bg-[#8576ff]/10 rounded-full transition-all duration-300 hover:scale-110 active:scale-90"
            aria-label="Profile"
          >
            <User size={22} />
          </Link>
        </div>
      </nav>

      {/* Mobile Animated Slide & Fade Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-lg ${
          isMobileMenuOpen ? "max-h-96 opacity-100 py-6 px-6" : "max-h-0 opacity-0 py-0 px-6"
        }`}
      >
        <ul className="flex flex-col gap-4 text-base font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className={`transform transition-all duration-300 ${
                isMobileMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: `${isMobileMenuOpen ? index * 50 : 0}ms`,
              }}
            >
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-1.5 transition-all duration-200 hover:translate-x-2 ${
                  link.highlight
                    ? "text-[#8576ff] font-semibold"
                    : "text-gray-800 hover:text-[#8576ff]"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}