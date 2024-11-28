import React from "react";
import AuthenticatedLayout from "../../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { TFeature, TPaginatedData } from "@/types";
import FeatureItem from "@/Components/FeatureItem";

const index = ({ features }: { features: TPaginatedData<TFeature> }) => {
  console.log(features);
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Features
        </h2>
      }
    >
      <Head title="Feature" />

      <div className="my-2 mx-4">
        <Link
          className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-white dark:focus:bg-white dark:focus:ring-offset-gray-800 dark:active:bg-gray-300"
          href={route("feature.create")}
        >
          {" "}
          create new Feature
        </Link>
      </div>

      {features.data.map((feature: TFeature) => (
        <FeatureItem key={feature.id} feature={feature}></FeatureItem>
      ))}
    </AuthenticatedLayout>
  );
};

export default index;
