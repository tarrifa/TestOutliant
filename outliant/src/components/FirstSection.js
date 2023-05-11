import React from "react";

export default function FirstSection() {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div className="max-w-m">
        <h2 className="text-6xl font-bold tracking-tight text-black sm:text-6xl">
          Lorem ipsum dolor sit amet, consectetur
        </h2>
        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus
        </p>
        <div className="flex flex-row mt-8">
          <div className="flex-shrink-0">
            <button
              type="button"
              className="bg-black px-5 py-3 rounded-md text-sm font-medium text-white"
            >
              Call to Action
            </button>
          </div>
          <div className="flex-shrink-0 mx-4">
            <button
              type="button"
              className="bg-white px-5 py-3 rounded-md text-sm font-medium text-black outline outline-1 "
            >
              See Workspace
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-96 h-96 bg-gray-300 flex items-center justify-center">
          <img
            src="your-image-src.jpg"
            className="h-full object-contain"
            alt="Your Image"
          />
        </div>
        <div className="absolute top-0 right-0 mr-4 -mt-10 w-60 h-60 bg-gray-600 flex items-center justify-center ">
          <img
            src="your-image-src.jpg"
            className="h-full w-full object-cover"
            alt="Your Image"
          />
        </div>
      </div>
    </div>
  );
}
