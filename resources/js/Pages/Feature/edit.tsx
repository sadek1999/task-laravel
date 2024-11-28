import React from 'react';
import AuthenticatedLayout from '../../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const edit = () => {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
        edit Features
        </h2>
      }
    >
      <Head title="Feature" />

      <div className="my-2 mx-4">

      </div>


    </AuthenticatedLayout>
  );
};

export default edit;
