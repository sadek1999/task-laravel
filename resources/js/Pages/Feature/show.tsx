import React from 'react';
import AuthenticatedLayout from '../../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { TFeature } from '@/types';

const show = ({feature}:{feature:TFeature}) => {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Edit Feature <b>"{feature.name}"</b>
        </h2>
      }
    >
      <Head title={`Edit Feature - ${feature.name}`} />
      <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
        <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8">

          <div className="flex-1">
            <h2 className="text-2xl mb-2">{feature.name}</h2>
            <p>{feature.description}</p>



            
          </div>
        </div>
      </div>

    </AuthenticatedLayout>
  );
};

export default show;
