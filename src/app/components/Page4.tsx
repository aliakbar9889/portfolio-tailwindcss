import React from 'react';
import Image from 'next/image';

const CustomComponent = () => {
  return (
    <div className="flex flex-col items-center p-5">
      {/* Top Heading */}
      <h1 data-aos="fade-down-left" className="text-2xl font-bold italic text-center mb-8">
        My Projects
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {/* Card 1 */}
        <div
          data-aos="fade-down-left"
          className="bg-white border border-gray-300 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform p-4"
        >
          <div className="rounded overflow-hidden">
            <Image src="/hilal.png" alt="Card Image 1" width={500} height={300} className="w-full h-auto" />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-lg font-bold italic">HILALPLAY</h2>
            <p className="text-sm italic text-gray-600">
              A Hilal Entertainment Website using Next.js and Custom CSS.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          data-aos="fade-down-left"
          className="bg-white border border-gray-300 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform p-4"
        >
          <div className="rounded overflow-hidden">
            <Image src="/gh.png" alt="Card Image 2" width={500} height={300} className="w-full h-auto" />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-lg font-bold italic">GOVERNOR INITIATIVE CLONE</h2>
            <p className="text-sm italic text-gray-600">
              Governor Initiative Website Clone Using HTML, CSS & JavaScript.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          data-aos="fade-down-left"
          className="bg-white border border-gray-300 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform p-4"
        >
          <div className="rounded overflow-hidden">
            <Image src="/re.png" alt="Card Image 3" width={500} height={300} className="w-full h-auto" />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-lg font-bold italic">ONLINE RESUME BUILDER</h2>
            <p className="text-sm italic text-gray-600">
              Online resume builder website using HTML, CSS.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div
          data-aos="fade-down-left"
          className="bg-white border border-gray-300 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform p-4"
        >
          <div className="rounded overflow-hidden">
            <Image src="/generativeai.png" alt="Card Image 4" width={500} height={300} className="w-full h-auto" />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-lg font-bold italic">GENERATIVE AI INFORMATION</h2>
            <p className="text-sm italic text-gray-600">
              An Informative Website About Generative AI Using HTML, CSS.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div
          data-aos="fade-down-left"
          className="bg-white border border-gray-300 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform p-4"
        >
          <div className="rounded overflow-hidden">
            <Image src="/timer.png" alt="Card Image 5" width={500} height={300} className="w-full h-auto" />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-lg font-bold italic">Countdown Timer</h2>
            <p className="text-sm italic text-gray-600">
              Countdown Timer using Next.js & Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div
          data-aos="fade-down-left"
          className="bg-white border border-gray-300 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform p-4"
        >
          <div className="rounded overflow-hidden">
            <Image src="/todo.png" alt="Card Image 6" width={500} height={300} className="w-full h-auto" />
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-lg font-bold italic">TODO LIST</h2>
            <p className="text-sm italic text-gray-600">
              Todo List Using Vite + React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomComponent;
