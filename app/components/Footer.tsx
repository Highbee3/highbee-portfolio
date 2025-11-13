import { FaGithub, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6 md:px-16 border-t border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 text-center md:text-left">
        
        {/* --- Brand Section --- */}
        <div>
          <h2 className="text-3xl font-extrabold text-amber-500 mb-3">Highbee</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Crafting digital experiences that inspire and engage.  
            Highbee transforms your creative ideas into functional,  
            visually appealing, and user-friendly products.
          </p>

          <button className="mt-5 bg-amber-500 hover:bg-amber-400 text-slate-900 px-5 py-2 font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
            <Link href="/Contact">Let&apos;s Talk</Link>
          </button>
        </div>

        {/* --- Quick Links --- */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-gray-300">
            <li><Link href="/" className="hover:text-amber-400 transition">Home</Link></li>
            <li><Link href="/About" className="hover:text-amber-400 transition">About</Link></li>
            <li><Link href="/Projects" className="hover:text-amber-400 transition">Projects</Link></li>
            <li><Link href="/Contact" className="hover:text-amber-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* --- Contact Info --- */}
        <div>
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <ul className="text-gray-300 space-y-3">
            <li>
              <FaEnvelope className="inline-block mr-2 text-amber-400" />
              <a href="mailto:ibrahimademola145@gmail.com" className="hover:text-amber-400">
                ibrahimademola145@gmail.com
              </a>
            </li>
            <li>
              <FaWhatsapp className="inline-block mr-2 text-amber-400" />
              <a href="https://wa.me/2348065351087" target="_blank" className="hover:text-amber-400">
                +234 806 535 1087
              </a>
            </li>
            <li>
              <FaLinkedin className="inline-block mr-2 text-amber-400" />
              <a href="https://linkedin.com/in/highbee" target="_blank" className="hover:text-amber-400">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* --- Divider --- */}
      <div className="my-10 border-t border-slate-800"></div>

      {/* --- Bottom Section --- */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6 text-xl">
          <a href="https://github.com/" target="_blank" className="hover:text-amber-400 transition transform hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://wa.me/2348123456789" target="_blank" className="hover:text-amber-400 transition transform hover:scale-110">
            <FaWhatsapp />
          </a>
          <a href="mailto:ibrahimademola145@gmail.com" className="hover:text-amber-400 transition transform hover:scale-110">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com/in/highbee" target="_blank" className="hover:text-amber-400 transition transform hover:scale-110">
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} <span className="text-amber-400 font-semibold">Highbee</span>.  
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
