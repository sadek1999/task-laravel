import React from 'react';
import AuthenticatedLayout from '../../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { TFeature, TPaginatedData } from '@/types';

const index = ({features}:{features:TPaginatedData<TFeature>}) => {
  console.log(features)
  return (
    <AuthenticatedLayout
    header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
           Features
        </h2>
    }
>
    <Head title="Dashboard" />

    <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                    {features.data.map((feature:TFeature)=>(
                      <div key={feature.id}>
                      <p>{feature.name}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
</AuthenticatedLayout>
  );
};

export default index;
