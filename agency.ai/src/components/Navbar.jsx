import { useState } from "react";
import { motion } from "motion/react"

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <motion.div 
    initial={{opacity: 0, y: -20}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
    viewport={{once: true}}
    className="flex items-center py-2 px-10 bg-white/95 sm:px-12 lg:px-24 xl:px-40 justify-between sticky top-0 z-100">
      <div className="flex gap-1 pt-1">
        <img src="./ai-black.png" alt="" className="w-15" />
        <h2 className="mt-3 font-bold text-xl truncate">Agency.ai</h2>
      </div>
      <div
        className={`gap-10 ${!sidebarOpen ? "max-sm:w-0 max-md:w-0 overflow-hidden" : "max-sm:w-60 max-md:w-60 max-sm:pl-8 max-md:pl-8"} max-sm:fixed max-md:fixed right-0 max-sm:text-white/90 max-md:text-white/90 top-0 max-sm:bg-blue-600 max-md:bg-purple-800 max-sm:flex-col max-md:flex-col  flex transition-all max-sm:max-h-screen max-md:max-h-screen max-sm:h-full max-md:h-full`}
      >
        <img src="./close.png" alt="" className="w-4 h-4 mt-5 mx-40 md:hidden" onClick={() => setSidebarOpen(false)} />
        <a className="hover:border-0 md:hover:border-b truncate" onClick={() => setSidebarOpen(false)} href="#">
          Home
        </a>
        <a className="hover:border-0 md:hover:border-b truncate" onClick={() => setSidebarOpen(false)} href="#services">
          Services
        </a>
        <a className="hover:border-0 md:hover:border-b truncate" onClick={() => setSidebarOpen(false)} href="#our-work">
          Our Work
        </a>
        <a className="hover:border-0 md:hover:border-b truncate" onClick={() => setSidebarOpen(false)} href="#contact-us">
          Contact Us
        </a>
      </div>
      <div className="flex gap-6">
        <button className="inline-flex bg-blue-700 py-2 px-6 rounded-full text-white/90 gap-2 max-sm:hidden max-md:hidden">
          Connect <img src="./arrow.png" alt="" className="w-4 h-4 mt-1" />
        </button>
        <button>
          <img
            src="./menu-dark.png"
            alt=""
            className="w-4 md:hidden"
            onClick={() => setSidebarOpen(true)}
          />
        </button>
      </div>
    </motion.div>
  );
};
export default Navbar;
