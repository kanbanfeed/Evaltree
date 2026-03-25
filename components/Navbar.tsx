"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Sparkles, Compass } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100/20"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-20 h-24 relative group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/Evaltree_logo.jpeg"
                  alt="Evaltree Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-[#0D2137] to-[#0F2A3E] bg-clip-text text-transparent">
                Evaltree
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-gray-600 hover:text-[#B7860B] font-medium transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B7860B] transition-all duration-300 group-hover:w-full" />
              </Link>

              <a
                href="#how"
                className="text-gray-600 hover:text-[#B7860B] font-medium transition-colors duration-200 relative group"
              >
                How It Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B7860B] transition-all duration-300 group-hover:w-full" />
              </a>

              <a
                href="#products"
                className="text-gray-600 hover:text-[#B7860B] font-medium transition-colors duration-200 relative group"
              >
                The Products
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#B7860B] transition-all duration-300 group-hover:w-full" />
              </a>

              <Link
                href="/diagnostic"
                className="group relative bg-gradient-to-r from-[#B7860B] to-[#E5A620] text-black px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-2 overflow-hidden"
              >
                <span className="relative z-10">Start Here</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-out shadow-2xl md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#B7860B] to-[#E5A620] rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="text-lg font-bold bg-gradient-to-r from-[#0D2137] to-[#0F2A3E] bg-clip-text text-transparent">
                Evaltree
              </div>
            </Link>
            <button
              onClick={closeMenu}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 py-8 px-6 space-y-2">
            <Link
              href="/"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#B7860B] hover:bg-gray-50 rounded-xl transition-all duration-200 group"
            >
              <span className="w-8">🏠</span>
              <span className="font-medium">Home</span>
              <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <a
              href="#how"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#B7860B] hover:bg-gray-50 rounded-xl transition-all duration-200 group"
            >
              <span className="w-8">📖</span>
              <span className="font-medium">How It Works</span>
              <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="#products"
              onClick={closeMenu}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-[#B7860B] hover:bg-gray-50 rounded-xl transition-all duration-200 group"
            >
              <span className="w-8">📦</span>
              <span className="font-medium">The Products</span>
              <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="pt-4 mt-4 border-t border-gray-100">
              <Link
                href="/diagnostic"
                onClick={closeMenu}
                className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#B7860B] to-[#E5A620] text-black rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] group"
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-5 h-5" />
                  <span>Start Here</span>
                </div>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-100">
            <div className="text-xs text-gray-400 text-center">
              <p>Evidence-based career intelligence</p>
              <p className="mt-1">© 2026 Crowbar Ventures Limited</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}