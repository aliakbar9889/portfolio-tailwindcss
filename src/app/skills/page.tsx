import React from "react";

const AnalyticsBoxes = () => {
  return (
    <div className="text-center mt-8 hover:cursor-pointer">
      <h1 data-aos="fade-down-left" className="text-2xl font-bold mb-10">My Skills</h1>
      <div className="flex flex-wrap justify-center">
        {/* Box 1 */}
        <div data-aos="fade-down-left" className="w-64 h-64 m-5 border-2 border-gray-300 rounded-lg bg-gray-200 p-3 flex flex-col justify-between text-center">
          <div className="text-lg font-bold"><b><i>HTML</i></b></div>
          <div className="my-2">
            <div className="w-[90%] h-0.5 bg-green-500 mx-auto"></div>
            <div className="text-xl font-bold text-blue-700">90%</div>
          </div>
          <div>
            <p className="text-sm text-gray-700"><i>Expertise in HTML</i></p>
          </div>
        </div>

        {/* Box 2 */}
        <div data-aos="fade-down-left" className="w-64 h-64 m-5 border-2 border-gray-300 rounded-lg bg-gray-200 p-3 flex flex-col justify-between text-center">
          <div className="text-lg font-bold"><b><i>CSS</i></b></div>
          <div className="my-2">
            <div className="w-[85%] h-0.5 bg-green-500 mx-auto"></div>
            <div className="text-xl font-bold text-blue-700">85%</div>
          </div>
          <div>
            <p className="text-sm text-gray-700"><i>Expertise in CSS</i></p>
          </div>
        </div>

        {/* Box 3 */}
        <div data-aos="fade-down-left" className="w-64 h-64 m-5 border-2 border-gray-300 rounded-lg bg-gray-200 p-3 flex flex-col justify-between text-center">
          <div className="text-lg font-bold"><b><i>JavaScript</i></b></div>
          <div className="my-2">
            <div className="w-[45%] h-0.5 bg-green-500 mx-auto"></div>
            <div className="text-xl font-bold text-blue-700">45%</div>
          </div>
          <div>
            <p className="text-sm text-gray-700"><i>Expertise in JavaScript</i></p>
          </div>
        </div>

        {/* Box 4 */}
        <div data-aos="fade-down-left" className="w-64 h-64 m-5 border-2 border-gray-300 rounded-lg bg-gray-200 p-3 flex flex-col justify-between text-center">
          <div className="text-lg font-bold"><b><i>Next JS</i></b></div>
          <div className="my-2">
            <div className="w-[90%] h-0.5 bg-green-500 mx-auto"></div>
            <div className="text-xl font-bold text-blue-700">90%</div>
          </div>
          <div>
            <p className="text-sm text-gray-700"><i>Expertise in Next JS</i></p>
          </div>
        </div>

        {/* Box 5 */}
        <div data-aos="fade-down-left" className="w-64 h-64 m-5 border-2 border-gray-300 rounded-lg bg-gray-200 p-3 flex flex-col justify-between text-center">
          <div className="text-lg font-bold"><b><i>TypeScript</i></b></div>
          <div className="my-2">
            <div className="w-[95%] h-0.5 bg-green-500 mx-auto"></div>
            <div className="text-xl font-bold text-blue-700">95%</div>
          </div>
          <div>
            <p className="text-sm text-gray-700"><i>Expertise in TypeScript</i></p>
          </div>
        </div>

        {/* Box 6 */}
        <div data-aos="fade-down-left" className="w-64 h-64 m-5 border-2 border-gray-300 rounded-lg bg-gray-200 p-3 flex flex-col justify-between text-center">
          <div className="text-lg font-bold"><b><i>Tailwind CSS</i></b></div>
          <div className="my-2">
            <div className="w-[40%] h-0.5 bg-green-500 mx-auto"></div>
            <div className="text-xl font-bold text-blue-700">20%</div>
          </div>
          <div>
            <p className="text-sm text-gray-700"><i>Expertise in Tailwind CSS</i></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsBoxes;
