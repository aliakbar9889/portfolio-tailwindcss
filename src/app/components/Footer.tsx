import React from 'react';
import { FaInstagram, FaLinkedin, FaGithubSquare } from 'react-icons/fa'; // Importing social media icons

const Footer = () => {
  return (
    <footer className="mt-16 px-6 py-8 text-black">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4 space-y-4 md:space-y-0">
        <div className="flex-1 text-left">
          <h3 className="text-xl font-bold italic">ALI AKBAR</h3>
        </div>
        <div className="flex-1 text-center">
          <nav className="space-x-4">
            <a href="/" className="text-black hover:underline italic">
              About
            </a>
            <a href="/about" className="text-black hover:underline italic">
              Testimonials
            </a>
            <a href="/contact" className="text-black hover:underline italic">
              Contact
            </a>
          </nav>
        </div>
        <div className="flex-1 flex justify-around">
          <a
            href="https://www.instagram.com/aliakbar_360/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/ali-akbar-b66ab62b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/aliakbar9889"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FaGithubSquare size={30} />
          </a>
        </div>
      </div>

      {/* Center Section */}
      <div className="my-6">
        <hr className="border-black" />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex-1 text-left">
          <h3 className="text-sm italic">@2024 ALL COPYRIGHT RESERVED</h3>
        </div>
        <div className="flex-1"></div> {/* Empty center */}
        <div className="flex-1 flex justify-around">
          <nav className="space-x-4">
            <a href="/terms" className="hover:underline">
              Terms
            </a>
            <a href="/privacy" className="hover:underline">
              Privacy
            </a>
            <a href="/help" className="hover:underline">
              Help
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
