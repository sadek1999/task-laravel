import { TFeature } from "@/types";
import { useForm } from "@inertiajs/react";
import React from "react";

const FeatureUpvoteDownvote = ({ feature }: { feature: TFeature }) => {
  const upvoteForm = useForm({ upvote: true });
  const downvoteForm = useForm({ upvote: false });

  const upvoteDownvote = (upvote: boolean) => {
    if (
      (feature.user_has_upvote && upvote) ||
      (feature.user_has_downvote && !upvote)
    ) {
    } else {
      let form = null;
      if (upvote) {
        form = upvoteForm;
      } else {
        form = downvoteForm;
      }
    }
  };
  return (
    <div>
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
    </div>
  );
};

export default FeatureUpvoteDownvote;
