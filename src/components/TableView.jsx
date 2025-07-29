import React from "react";
import Header from "./Header";
import { DummyData } from "../data/DummyData";
import { Link } from "react-router-dom";

const TableView = () => {
  return (
    <div className=" bg-gray-100 min-h-screen">
      <Header />
      <div className="container">
        <div className="border  bg-white rounded-md border-gray-200">
          <div className="p-5">
            <h1 className="font-bold mb-2">Your Timesheets</h1>

            <div class="relative overflow-x-auto">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      WEEK #
                    </th>
                    <th scope="col" class="px-6 py-3">
                      DATE
                    </th>
                    <th scope="col" class="px-6 py-3">
                      STATUS
                    </th>
                    <th scope="col" class="px-6 py-3">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                    {DummyData.map((data, index)=>{
                        return(   <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium bg-gray-50 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {data.week}
                    </td>
                    <td className="px-6 py-4">{data.date}</td>
                    <td className = 'px-6 py-4' ><span className= {`${data.class}`}>{data.status.toUpperCase()}</span></td>
                    <td className="px-6 py-4 text-blue-500"><Link to={`${data.link}`}>{data.actions}</Link></td>
                  </tr>)
                    })}
               
                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableView;
