import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-white w-full p-4 border-b border-gray-200">
        <div className="flex justify-between gap-10">
          <h1 className="font-bold"> ticktock</h1>
          <span>Timesheets</span>
        </div>  
        <div className="flex justify-between gap-2 items-center">
          <span>John</span>
          <svg
            className="w-3 h-4 cursor-pointer text-gray-600 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 8"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Header;
