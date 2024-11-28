import React from 'react';
import AuthenticatedLayout from '../../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { TFeature, TPaginatedData } from '@/types';
import FeatureItem from '@/Components/FeatureItem';

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
    {features.data.map((feature:TFeature)=>(
                      <FeatureItem feature={feature}></FeatureItem>
                    ))}

    
</AuthenticatedLayout>
  );
};

export default index;
