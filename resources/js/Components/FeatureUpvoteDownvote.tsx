import { TFeature } from '@/types';
import { useForm } from '@inertiajs/react';
import React from 'react';

const FeatureUpvoteDownvote = ({feature}:{feature:TFeature}) => {

  const upvoteForm=useForm({upvote:true});
  const downvoteForm=useForm({upvote:false})

  const upvoteDownvote=(upvote:boolean)=>{

  }
  return (
    <div>

    </div>
  );
};

export default FeatureUpvoteDownvote;
