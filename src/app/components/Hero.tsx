import React from 'react'; 
import Image from 'next/image'; // Importing Image component from Next.js

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-10 text-black">
      {/* Left Side - Content */}
      <div className="w-full md:w-[58%] mb-6 md:mb-0 text-center md:text-left">
        <h1 
          data-aos="fade-up" 
          className="text-4xl md:text-5xl font-bold text-black mb-4"
        >
          Hey, I am <span className="text-black-500">Ali Akbar</span>
        </h1>
        <p 
          data-aos="fade-up" 
          className="text-base md:text-lg text-[#1C1E53] mb-3 leading-relaxed"
        >
          A Frontend Developer passionate about building responsive, dynamic websites.
        </p>
        <p 
          data-aos="fade-up" 
          className="text-base md:text-lg text-[#1C1E53] mb-3 leading-relaxed"
        >
          I specialize in React.js and Next.js to create modern, user-friendly interfaces. Let&apos;s create something amazing together!
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-[40%] flex items-center justify-center">
        <Image
          data-aos="fade-up"
          src="/profile.png"        // Image source
          alt="Hero"                // Alt text for accessibility
          className="max-w-full h-auto"
          width={500}               // Set width of the image
          height={500}              // Set height of the image
        />
      </div>
    </section>
  );
}

export default HeroSection;
