import React from 'react';
import Image from 'next/image'; // Importing Image component from Next.js

function LeftImageRightText() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-10">
      {/* Left Side - Image */}
      <div data-aos="fade-down-left" className="w-full md:w-1/2 mb-6 md:mb-0">
        <Image 
          src="/profile2.png"         // Image source (relative to public folder)
          alt="Sample"                // Alt text for accessibility
          className="w-full h-auto"   // Tailwind classes for responsive images
          width={500}                 // Set width for the image
          height={500}                // Set height for the image
        />
      </div>

      {/* Right Side - Text Content */}
      <div id="About-section" className="w-full md:w-5/12 text-center md:text-left">
        <h1 data-aos="fade-down-left" className="text-3xl md:text-4xl font-bold text-black mb-4">
          <b><i>About Me</i></b>
        </h1>
        <p data-aos="fade-down-left" className="text-base md:text-lg text-[#1C1E53] leading-relaxed">
          {"Hello! I'm Ali Akbar, a dedicated Frontend Developer with a focus on building modern, responsive, and visually appealing websites. With expertise in React.js and Next.js, I create seamless, interactive user interfaces that bring ideas to life. I believe in merging creativity with technical precision to ensure each project is both functional and engaging. Whether it's optimizing performance, enhancing user experience, or implementing custom designs, I'm committed to delivering high-quality work that makes a meaningful impact in the digital space."}
        </p>
      </div>
    </section>
  );
}

export default LeftImageRightText;
