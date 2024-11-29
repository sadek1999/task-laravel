import React, { FormEventHandler } from 'react';
import { useForm } from '@inertiajs/react';
import AuthenticatedLayout from '../../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel'; // Adjust path based on your project
import TextInput from '@/Components/TextInput'; // Adjust path based on your project
import TextAreaInput from '@/Components/TextAreaInput'; // Adjust path based on your project
import InputError from '@/Components/InputError'; // Adjust path based on your project
import PrimaryButton from '@/Components/PrimaryButton'; // Adjust path based on your project

export default function edit({ feature }: { feature: any }) {
  const {
    data,
    setData,
    processing,
    errors,
    put,
  } = useForm({
    name: feature.name,
    description: feature.description,
  });

  const updateFeature: FormEventHandler = (ev) => {
    ev.preventDefault();
    put(route('feature.update', feature.id), {
      preserveScroll: true,
    });
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Edit Feature <b>"{feature.name}"</b>
        </h2>
      }
    >
      <Head title={`Edit Feature - ${feature.name}`} />

      <div className="mb-4 overflow-hidden  shadow-sm sm:rounded-lg dark:bg-gray-800">
        <div className="p-6 text-gray-900  flex gap-8">
          <form onSubmit={updateFeature} className="w-full">
            <div className="mb-8">
              <InputLabel htmlFor="name" value="Name" />
              <TextInput
                id="name"
                className="mt-1 block w-full"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                required
                isFocused
                autoComplete="name"
              />
              <InputError className="mt-2" message={errors.name} />
            </div>

            <div className="mb-8">
              <InputLabel htmlFor="description" value="Description" />
              <TextAreaInput
                id="description"
                rows={6}
                className="mt-1 block w-full"
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
              />
              <InputError className="mt-2" message={errors.description} />
            </div>

            <div className="flex items-center gap-4">
              <PrimaryButton disabled={processing}>Save</PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
