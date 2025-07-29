import React, { useState } from "react";
import Header from "./Header";
import TimeSheetModel from "./models/TimeSheetModel";

const TimeSheet = () => {
  const [openModel, setOpenModel] = useState(false);
  return (
    <div className=" bg-gray-100 full-screen">
      <Header />
      <div className="container">
        <div className="border  bg-white rounded-md border-gray-200">
          <div className="p-5 flex justify-between">
            <h1 className="font-bold mb-2">This week's timesheets</h1>
            <div className="w-35 bg-gray-200 rounded-full mt-4 h-2.5 mb-4 dark:bg-gray-700 relative group">
              <div
                className="bg-orange-500 h-2.5 rounded-full dark:bg-orange-500"
                style={{ width: "45%" }}
              ></div>

              <div className="absolute left-[45%] -translate-x-1/2 bottom-full mb-2 px-2 py-1 text-xs text-dark bg-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                45% Complete
              </div>

              <div className="absolute left-full -translate-x-full bottom-full mb-2 px-2 py-1 text-xs text-dark bg-white rounded">
                100%
              </div>
            </div>
          </div>
          <div>
            <h1 className="pl-5 p-2">21 - 26 January, 2024</h1>
          </div>
          <div className="grid grid-cols-12 h-screen pl-5 pr-1 p-2">
            <div className="col-span-12 md:col-span-2 font-bold">July 21</div>
            <div className="col-span-12 md:col-span-10">
              <div className="py-1">
                <div className="border rounded-md border-gray-200 p-2  flex justify-between">
                  <span>Homepage Development</span>
                  <div className="flex justify-between gap-2">
                    <span className="text-gray-500">4 hrs</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                      Project Name
                    </span>
                    <span>
                      <i className="fa-solid fa-ellipsis cursor-pointer"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-1">
                <div className="border rounded-md border-gray-200 p-2 flex justify-between">
                  <span>Homepage Development</span>
                  <div className="flex justify-between gap-2">
                    <span className="text-gray-500">4 hrs</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                      Project Name
                    </span>
                    <span>
                      <i className="fa-solid fa-ellipsis cursor-pointer"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="">
                <div
                  className="border border-dashed cursor-pointer hover:bg-blue-100 rounded-md border-blue-400 p-2 flex justify-center"
                  onClick={() => {
                    setOpenModel(true);
                  }}
                >
                  <span className="text-blue-600">+ Add new task</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-2 font-bold">July 22</div>
            <div className="col-span-12 md:col-span-10">
              <div className="py-1">
                <div className="border rounded-md border-gray-200 p-2  flex justify-between">
                  <span>Homepage Development</span>
                  <div className="flex justify-between gap-2">
                    <span className="text-gray-500">4 hrs</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                      Project Name
                    </span>
                    <span>
                      <i className="fa-solid fa-ellipsis cursor-pointer"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-1">
                <div className="border rounded-md border-gray-200 p-2 flex justify-between">
                  <span>Homepage Development</span>
                  <div className="flex justify-between gap-2">
                    <span className="text-gray-500">4 hrs</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                      Project Name
                    </span>
                    <span>
                      <i className="fa-solid fa-ellipsis cursor-pointer"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="">
                <div
                  className="border border-dashed cursor-pointer hover:bg-blue-100 rounded-md border-blue-400 p-2 flex justify-center"
                  onClick={() => {
                    setOpenModel(true);
                  }}
                >
                  <span className="text-blue-600">+ Add new task</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-2 font-bold">July 23</div>
            <div className="col-span-12 md:col-span-10">
              <div className="py-1">
                <div className="border rounded-md border-gray-200 p-2  flex justify-between">
                  <span>Homepage Development</span>
                  <div className="flex justify-between gap-2">
                    <span className="text-gray-500">4 hrs</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                      Project Name
                    </span>
                    <span>
                      <i className="fa-solid fa-ellipsis cursor-pointer"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="py-1">
                <div className="border rounded-md border-gray-200 p-2 flex justify-between">
                  <span>Homepage Development</span>
                  <div className="flex justify-between gap-2">
                    <span className="text-gray-500">4 hrs</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">
                      Project Name
                    </span>
                    <span>
                      <i className="fa-solid fa-ellipsis cursor-pointer"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="">
                <div
                  className="border border-dashed cursor-pointer hover:bg-blue-100 rounded-md border-blue-400 p-2 flex justify-center"
                  onClick={() => {
                    setOpenModel(true);
                  }}
                >
                  <span className="text-blue-600">+ Add new task</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-2 font-bold">July 25</div>
            <div className="col-span-12 md:col-span-10">
              <div className="py-1">
                <div
                  className="border border-dashed cursor-pointer hover:bg-blue-100 rounded-md border-blue-400 p-2 flex justify-center"
                  onClick={() => {
                    setOpenModel(true);
                  }}
                >
                  <span className="text-blue-600">+ Add new task</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-2">
          <div className="border p-4 bg-white rounded-md border-gray-200 ">
            <span className="flex justify-center text-gray-400">
              @ 2024 tentwenty. All rights reserved.
            </span>
          </div>
        </div>
      </div>
      <TimeSheetModel
        isVisible={openModel}
        onClose={() => setOpenModel(false)}
      />
    </div>
  );
};

export default TimeSheet;
