import React from "react";
import vinu from "../components/Images/vinu.jpg";
import Image from 'next/image';

const Body: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex max-w-7xl w-full mx-auto bg-white">
        {/* Left Section: Image/Decorative */}
        <div className="w-1/2 bg-gray-100 flex items-center justify-center p-8">
          <div className="grid gap-6">
            <Image
              src={vinu}
              alt="vinu"
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Right Section: Text */}
        <div className="w-1/2 bg-[#D1B692] flex items-center justify-center p-8">
          <div className="text-white">
            <h1 className="text-3xl font-bold mb-4">
              14 Architectural Design Ideas for a Spacious Interio
            </h1>
            <h5 className="text-3xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            </h5>
            <p className="text-lg text-gray-300">By Maria Sanchez</p>
            <p className="text-lg text-gray-300">October 12, 2023 · 3 min read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;