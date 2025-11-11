import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const Footer = () => {
    return (
      
    
         <footer className="bg-slate-900 text-white py-8  ">
      <div className="  flex flex-col justify-center items-center gap-7">
        
        <div className="  flex flex-col justify-center items-center gap-5  ">
          <h2 className="text-2xl font-bold ">Highbee</h2>
          <p className="text-sm opacity-75">Do you have a project in mind and would love to bring it to live?</p>
          <button className="  text-white bg-amber-500 p-2  font-semibold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 animate-bounce m-auto">
  <a href="/Contact">Lets Talk</a>
</button>

        </div>

       
        <div className="flex space-x-6">
          <a href="/Projects" className="hover:text-amber-500 transition">Projects</a>
          <a href="/About" className="hover:text-amber-500 transition">About</a>
          <a href="/Contact" className="hover:text-amber-500 transition">Contact</a>
        </div>

        
        <div className="flex space-x-4 text-xl gap-6">
          <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition">
          <FaGithub />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition">
         
          <FaWhatsapp />
          </a>
          <a href="mailto:ibrahimademola145@gmail.com" className="hover:text-amber-500 transition">
          
          <FaEnvelope />
          </a>
        </div>
      </div>


      <div className="text-center mt-6 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Highbee. All rights reserved.
      </div>
        
        
        
      
    
      </footer>
    );
  };
  
  export default Footer;
  
  
  