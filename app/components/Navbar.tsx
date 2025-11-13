'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Projects", path: "/Projects" },
    { name: "Contact", path: "/Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-20 z-100 px-6 md:px-12 backdrop-blur-md bg-slate-900/80 border-b border-slate-800 flex justify-between items-center">
      
      {/* LOGO */}
      <h1 className="text-white text-3xl font-extrabold tracking-wide">
        <Link href="/" className="hover:text-amber-400 transition-all duration-300">
          Highbee
        </Link>
      </h1>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-8 text-white font-medium">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`relative transition-all duration-300 hover:text-amber-400 ${
                pathname === link.path ? "text-amber-400" : ""
              }`}
            >
              {link.name}
              {pathname === link.path && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-400"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>

      {/* MOBILE ICON */}
      <div
        className="md:hidden text-white text-3xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full bg-slate-900/95 backdrop-blur-md flex flex-col items-center text-white py-8 md:hidden z-50 shadow-lg"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-lg py-2 hover:text-amber-400 transition-all ${
                  pathname === link.path ? "text-amber-400" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
