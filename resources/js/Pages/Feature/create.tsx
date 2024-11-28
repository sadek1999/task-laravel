import React from 'react';
import AuthenticatedLayout from '../../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import TextInput from '@/Components/TextInput';
import TextAreaInput from '@/Components/TextAreaInput'; // Optional for styling textarea

const CreateFeature = () => {
  const { data, setData, post, reset, errors } = useForm({
    name: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('feature.store'), {
      onSuccess: () => reset(),
    });
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Create Features
        </h2>
      }
    >
      <Head title="Create Feature" />

      <div className="my-2 mx-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Feature Name</label>
            <TextInput
              className="w-full mt-1"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              placeholder="Enter feature name"
            />
            {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              id="description"
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
              className="w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Enter description"
            />
            {errors.description && <p className="text-sm text-red-600 mt-1">{errors.description}</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              Create Feature
            </button>
          </div>
        </form>
      </div>
    </AuthenticatedLayout>
  );
};

export default CreateFeature;
