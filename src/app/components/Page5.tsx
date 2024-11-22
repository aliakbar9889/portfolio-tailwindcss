import React from 'react';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const ReviewComponent = () => {
  return (
    <div className="mt-10 h-auto flex flex-col items-center p-5">
      {/* Top Heading */}
      <h1 data-aos="fade-down-left" className="text-2xl text-black mb-5 text-center font-bold italic">
        Clients Testimonials
      </h1>

      {/* Cards */}
      <div
        data-aos="fade-down-left"
        className="flex flex-wrap gap-5 max-w-5xl w-full justify-center transition-transform duration-300"
      >
        {/* Card 1 */}
        <div className="bg-white border h-auto border-gray-300 rounded-lg shadow-lg p-4 w-full sm:w-[300px] md:w-[300px] text-center transform transition-transform duration-200 hover:scale-105 cursor-pointer">
          <div className="flex flex-col items-center">
            <h2 className="text-lg text-gray-800 mb-2">Excellent Service</h2>
            <div className="flex text-yellow-500 gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p className="text-sm text-black my-3">
            &quot;The support and service provided were top-notch. Highly recommended!&quot;
          </p>
          <div className="flex items-center gap-2">
            <Image
              src="/john.png"
              alt="Profile Picture of John Doe"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span>John Doe</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border h-auto border-gray-300 rounded-lg shadow-lg p-4 w-full sm:w-[300px] md:w-[300px] text-center transform transition-transform duration-200 hover:scale-105 cursor-pointer">
          <div className="flex flex-col items-center">
            <h2 className="text-lg text-gray-800 mb-2">Great Experience</h2>
            <div className="flex text-yellow-500 gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p className="text-sm text-black my-3">
            &quot;Fantastic quality and amazing customer service. I am very satisfied!&quot;
          </p>
          <div className="flex items-center gap-2">
            <Image
              src="/moiz.png"
              alt="Profile Picture of Moiz Ali"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span>Moiz Ali</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border h-auto border-gray-300 rounded-lg shadow-lg p-4 w-full sm:w-[300px] md:w-[300px] text-center transform transition-transform duration-200 hover:scale-105 cursor-pointer">
          <div className="flex flex-col items-center">
            <h2 className="text-lg text-gray-800 mb-2">Highly Recommend</h2>
            <div className="flex text-yellow-500 gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
          <p className="text-sm text-black my-3">
            &quot;Amazing experience! Will definitely come back for more.&quot;
          </p>
          <div className="flex items-center gap-2">
            <Image
              src="/alex.png"
              alt="Profile Picture of Alex Brown"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span>Alex Brown</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
