import { TFeature } from "@/types";
import { useForm, usePage } from "@inertiajs/react";
import React, { FormEventHandler } from "react";

import PrimaryButton from "./PrimaryButton";
import TextAreaInput from "./TextAreaInput";

const NewCommentForm = ({ feature }: { feature: TFeature }) => {
//  console.log(feature)
  const user = usePage().props.user;
  const { data, setData, post, processing } = useForm({ comment: "" });

  const createComment: FormEventHandler = (e) => {
    e.preventDefault();
    post(route("comment.store", feature.id), {
      preserveScroll: true,
      preserveState: true,
    });
  };

  return (
    <div>
      <form
        onSubmit={createComment}
        className="flex items-center py-2 rounded-lg bg-gray-50 dark:bg-gray-800 mb-4"
      >
        <TextAreaInput
          rows={1}
          value={data.comment}
          onChange={(e) => setData("comment", e.target.value)}
          className="mt-1 block w-full"
          placeholder="Your comment"
        />
        <PrimaryButton disabled={processing}>Comment</PrimaryButton>
      </form>
    </div>
  );
};

export default NewCommentForm;
