import React, { useState } from "react";

const TimeSheetModel = ({
  isVisible,
  onClose,
  min = 0,
  max = 100,
  initial = 12,
}) => {
  const [value, setValue] = useState(initial);
  const [selectProject, setSelectProject] = useState();
  const [typeofWork, setTypeOfWork] = useState();
  const [description, setDescription] = useState();
  const decrement = () => {
    if (value > min) setValue(value - 1);
  };

  const increment = () => {
    if (value < max) setValue(value + 1);
  };

  if (!isVisible) return null;
  return (
    <>
      <div
        className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Add New Entry
              </h3>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 14 14">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <form className="max-w-sm">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Project
                </label>
                <select
                value={selectProject}
                onChange={(e)=>setSelectProject(e.target.value)}
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choose a Project </option>
                  <option value="US">1.</option>
                  <option value="CA">2.</option>
                  <option value="FR">3.</option>
                  <option value="DE">4.</option>
                </select>

                <label
                  for="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Type of Work
                </label>
                <select
                  id="countries"
                  value={typeofWork}
                  onChange={(e)=>setTypeOfWork(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Bug fixes </option>
                  <option value="US">1.</option>
                  <option value="CA">2.</option>
                  <option value="FR">3.</option>
                  <option value="DE">4.</option>
                </select>
                <label
                  for="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Text Description
                </label>
                <textarea
                  rows="5"
                  cols="50"
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ></textarea>
                <p>A note for extra info</p>

                <div className="flex items-center gap-2 bg-gray-100 border rounded-md px-3 py-2 w-fit shadow-sm">
                  <button
                    onClick={decrement}
                    type="button"
                    className="text-xl font-bold px-2 text-gray-700 hover:text-blue-600"
                  >
                    −
                  </button>
                  <span className="text-lg font-medium">{value}</span>
                  <button
                    onClick={increment}
                    type="button"
                    className="text-xl font-bold px-2 text-gray-700 hover:text-blue-600"
                  >
                    +
                  </button>
                </div>
              </form>
            </div>

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                onClick={onClose}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add entry
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeSheetModel;
