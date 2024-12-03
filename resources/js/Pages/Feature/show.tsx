import React from 'react';
import AuthenticatedLayout from '../../../../vendor/laravel/breeze/stubs/inertia-react/resources/js/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { TFeature } from '@/types';
import FeatureUpvoteDownvote from '@/Components/FeatureUpvoteDownvote';
import NewCommentForm from '@/Components/NewCommentForm';
import FeatureItem from './../../Components/FeatureItem';
import CommentItem from '@/Components/commentItem';


const show = ({feature}:{feature:TFeature}) => {
  console.log(feature)
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
        <div className="p-6 text-gray-900 dark:text-gray-100 flex gap-8 ">

      <FeatureUpvoteDownvote feature={feature}></FeatureUpvoteDownvote>
          <div className="flex-1">
            <h2 className="text-2xl mb-2">{feature.name}</h2>
            <p>{feature.description}</p>


            <NewCommentForm  feature={feature}></NewCommentForm>
      {feature.comment.map((comment)=>(
        <CommentItem key={comment.id} comment={comment}/>
      ))}
          </div>

        </div>
      </div>

    </AuthenticatedLayout>
  );
};

export default show;
