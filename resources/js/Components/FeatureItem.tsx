import React, { useState } from "react";
import { TFeature } from "@/types";

const FeatureItem = ({ feature }: { feature: TFeature }) => {
  const[isExpended,setIsExpended]=useState(false)
  const toggleREadeMore=()=>{
    setIsExpended(!isExpended)
  }
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 flex">
        <div className="text-white items-center mx-auto " >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
            <p className="text-center font-bold text-xl">12</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-16"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div >
          <div className="p-6 text-gray-900 dark:text-gray-100 col-8 ">
            <h1 className="text-2xl mb-2">{feature.name}</h1>
            <p>{isExpended? feature.description:`${(feature.description ||'...').slice(0,300)} . . . .`}</p>

            <button onClick={toggleREadeMore} className="text-amber-300 hover:underline">
              {isExpended?'ReadeLess':"ReadeMore"}</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
