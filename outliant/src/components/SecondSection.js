import React from "react";

export default function SecondSection() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 py-24 sm:px-6 sm:py-32">
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold tracking-tight text-black sm:text-2xl mb-4">
          Header Text
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus siat met luctus venenatis, lectus magna fringilla urna porttitor
          rhoncus dolor purus non enim dolor.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <img
          src="your-image-src.jpg"
          className="h-48 sm:h-64 md:h-96 object-contain"
          alt="Your Image"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold tracking-tight text-black sm:text-2xl mb-4">
          Header Text
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus siat met luctus venenatis, lectus magna fringilla urna porttitor
          rhoncus dolor purus non enim dolor.
        </p>
      </div>
    </div>
  );
}
