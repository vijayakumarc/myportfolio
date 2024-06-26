import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
// import Darkmode from "./components/Darkmode";

const App = () => {
  const [darkMode,SetDarkMode] = useState(true)
  const toggleDarkMode = ()=>{(
      SetDarkMode(!darkMode)
  )}
  return (
    <div className={darkMode ? 'dark': null}>
      <div className="overflow-x-hidden text-neutral-100 antialiased selection:bg-cyan-300 selection:text-cyan-900 dark:bg-gray-900">      
        <div className="container mx-auto px-8 text-neutral-700 overflow-x-hidden  dark:text-neutral-100">
          <Navbar />
          <Hero/>
          <About/>
          <Technologies/>
          <Experience/>
          <Projects/>
          <Contact/>
          {/* <Darkmode darkMode={darkMode} toggleDarkMode={toggleDarkMode()}/> */}

          <button onClick={()=>toggleDarkMode()} className='bg-orange-600 w-14 h-14 rounded-full flex justify-center items-center fixed bottom-10 right-10 cursor-pointer'>
            {darkMode ? <BiSolidSun className='text-2xl'/> : <BiSolidMoon className='text-2xl'/>}            
        </button>   
        </div>
      </div>
    </div>
  );
};

export default App;
