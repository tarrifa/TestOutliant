import React from "react";

export default function ThirdSection() {
  return (
    <div className="flex justify-center gap-10 items-center bg-slate-100 mt-20">
      <div className="-mt-40 ml-20 mb-50 flex justify-center items-center w-96 h-96 bg-gray-300">
        <img
          src="your-image-src.jpg"
          className="h-full object-contain"
          alt="Your Image"
        />
      </div>
      <div className="flex flex-col max-w-xl mt-16 mb-16">
        <h2 className="text-left text-6xl  tracking-tight text-black sm:text-6xl">
          Lorem ipsum dolor sit amet, consectetur
        </h2>
        <p className="text-left mt-6 text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus
        </p>

        <div className=" mt-8 flex justify-start">
          <button
            type="button"
            className=" bg-black px-5 py-3 rounded-md text-sm font-medium text-white"
          >
            Call to Action
          </button>
        </div>
      </div>
    </div>
  );
}
