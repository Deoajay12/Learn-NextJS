"use client";
import { useState } from "react";
import Link from "next/link"; // ✅ Import Next.js Link

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home"); 
  const [isMobileOpen, setIsMobileOpen] = useState(false);

 
  const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Shop", path: "/shop" },   // static entry point for shop
  { name: "Blog", path: "/blog" },   // static entry point for blog
];


  return (
    <nav className="relative bg-blue-400 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex shrink-0 items-center">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path} // ✅ Navigate to route
                  onClick={() => setActiveTab(item.name)}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    activeTab === item.name
                      ? "bg-gray-950/50 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden pr-2">
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-100 hover:bg-white/10 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                  <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                  <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path} // ✅ Navigate to route
                onClick={() => {
                  setActiveTab(item.name);
                  setIsMobileOpen(false);
                }}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  activeTab === item.name
                    ? "bg-gray-950/50 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
