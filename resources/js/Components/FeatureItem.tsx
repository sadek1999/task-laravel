import React, { useState } from "react";
import { TFeature } from "@/types";
import Dropdown from "./../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/Dropdown";
import { Link } from "@inertiajs/react";
import FeatureUpvoteDownvote from "./FeatureUpvoteDownvote";

const FeatureItem = ({ feature }: { feature: TFeature }) => {
  const [isExpended, setIsExpended] = useState(false);
  // console.log(feature)
  const toggleREadeMore = () => {
    setIsExpended(!isExpended);
  };
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 ">
        <div className="flex">
          <FeatureUpvoteDownvote feature={feature}></FeatureUpvoteDownvote>
          <div className="p-6 text-gray-900 dark:text-gray-100 col-8  ">
            <h1 className="text-2xl mb-2">
              {" "}
              <Link href={route("feature.show", feature)}>{feature.name}</Link>
            </h1>

            <p>
              {isExpended
                ? feature.description
                : `${(feature.description || "...").slice(0, 300)} . . . .`}
            </p>

            <button
              onClick={toggleREadeMore}
              className="text-amber-300 hover:underline"
            >
              {isExpended ? "ReadeLess" : "ReadeMore"}
            </button>
          </div>
          <div>
            <Dropdown>
              <Dropdown.Trigger>
                <span className="inline-flex rounded-md">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5" // Corrected
                      stroke="currentColor"
                      className="size-8 text-white"
                    >
                      <path
                        strokeLinecap="round" // Corrected
                        strokeLinejoin="round" // Corrected
                        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                      />
                    </svg>
                  </button>
                </span>
              </Dropdown.Trigger>

              <Dropdown.Content>
                <Dropdown.Link
                  href={route("feature.edit", feature.id)}
                  as="button"
                >
                  Edit
                </Dropdown.Link>
                <Dropdown.Link
                  href={route("feature.destroy", feature)}
                  method="delete"
                  as="button"
                >
                  Delete
                </Dropdown.Link>
              </Dropdown.Content>
            </Dropdown>
          </div>
        </div>
        <div className="m-2">
          <Link href={route("feature.show", feature)} className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300">
          Comments</Link>
        </div>
        </div>


      </div>
    </div>
  );
};

export default FeatureItem;
