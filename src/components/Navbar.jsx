import logo from "../assets/vk-logo.png";
import React from "react";
import {FaLinkedin,FaGithub,FaInstagram,FaTwitter, FaBehance} from  'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-20"  src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/vijayakumarc" target="_blank"><FaGithub/></a> 
        <a href="https://www.linkedin.com/in/vijayakumarfed/" target="_blank"><FaLinkedin/></a>
        <a href="https://www.behance.net/vijaykumar_c" target="_blank"><FaBehance/></a>        
      </div>
    </nav>
  );
};

export default Navbar;
