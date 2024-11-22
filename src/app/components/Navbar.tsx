import React from 'react';
import Link from 'next/link';
function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 sm:px-6 md:px-8 lg:px-16">
      {/* Left Side - Name */}
      <div 
        data-aos="fade-right" 
        className="text-lg sm:text-xl font-bold text-black"
      >
        ALI AKBAR
      </div>

      {/* Center - Nav Links */}
      <div className="hidden sm:flex gap-6">
        <Link href="/home">
          Home
          </Link>
        <Link href="/about">
          About Me
          </Link>
        
        <Link href="/skills">       
          Skills
          </Link>      
      <Link href="/projects">
          Projects
          </Link>
       <Link href="/testimonials">
          Testimonials
          </Link>
      </div>

      {/* Right Side - Button */}
      <button 
        data-aos="fade-right" 
        className="hidden sm:block px-4 py-2 bg-blue-600 text-white rounded-md text-base transition-colors duration-200 hover:bg-blue-700"
      > <Link href="contact">
        CONTACT ME
        </Link>
      </button>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <button
          className="text-gray-600 p-2 border rounded-md hover:bg-blue-200 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
