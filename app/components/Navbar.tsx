'use client';
import Link from "next/link";
import { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-900 h-20 flex fixed z-99 top-0 justify-between items-center  px-4  md:px-10 ">
      
      <div className="text-white w-auto text-[2rem] md:text[2rem] font-bold">
       <h1 ><Link href="/">Highbee</Link></h1> 
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-white gap-5">
  <li className="hover:text-amber-400 transition-colors duration-300"><Link href="/">Home</Link></li>
  <li className="hover:text-amber-400 transition-colors duration-300"><Link href="/About">About</Link></li>
  <li className="hover:text-amber-400 transition-colors duration-300"><Link href="/Projects">Projects</Link></li>
  <li className="hover:text-amber-400 transition-colors duration-300"><Link href="/Contact">Contact</Link></li>
</ul>


      {/* Mobile Menu Icon */}
      <div 
        className="md:hidden text-white text-3xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✖' : '☰'}
      </div>

     
      <div
        className={`absolute top-20 left-0 w-full bg-black flex flex-col items-center text-white gap-5 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-96 py-5' : 'max-h-0 py-0'
        } md:hidden z-50`}
      >
        <ul className="flex flex-col items-start gap-5  w-full p-10">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Projects">Projects</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
