import React, { useState } from "react";
import { TFeature } from "@/types";
import Dropdown from "./../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Components/Dropdown";
import { Link } from "@inertiajs/react";

const FeatureItem = ({ feature }: { feature: TFeature }) => {
  const [isExpended, setIsExpended] = useState(false);
  const toggleREadeMore = () => {
    setIsExpended(!isExpended);
  };
  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 flex">
          <div className="text-white items-center mx-auto ">
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
          </div>
          <div className="p-6 text-gray-900 dark:text-gray-100 col-8 ">
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
      </div>
    </div>
  );
};

export default FeatureItem;
