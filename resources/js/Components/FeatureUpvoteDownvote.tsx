import { TFeature } from "@/types";
import { useForm } from "@inertiajs/react";
import React from "react";

const FeatureUpvoteDownvote = ({ feature }: { feature: TFeature }) => {
  const upvoteForm = useForm({ upvote: true });
  const downvoteForm = useForm({ upvote: false });
// console.log(feature)
  const upvoteDownvote = (upvote: boolean) => {
    // console.log(upvote )
    if (
      (feature.user_has_upvote && upvote) ||
      (feature.user_has_downvote && !upvote)
    ) {
      // console.log(feature.user)
      upvoteForm.delete(route('upvote.destroy', feature.id), {
        preserveScroll: true})
    }
    else {
      let form = null;
      if (upvote) {
        form = upvoteForm;
      } else {
        form = downvoteForm;
      }
      form.post(route("upvote.store", feature.id)),
        {
          preserveScroll: true,
        };
    }
  };
  return (
    <div>
      <div className="text-white items-center mx-auto ">
        <button
          onClick={() => upvoteDownvote(true)}
          className={feature.user_has_upvote ? "text-amber-500" : ""}
        >
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
        </button>

        <p className="text-center font-bold text-xl">{feature.upvote_count}</p>
        <button
          onClick={() => upvoteDownvote(false)}
          className={feature.user_has_downvote ? "" : "text-amber-500"}
        >
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
        </button>
      </div>
    </div>
  );
};

export default FeatureUpvoteDownvote;
