import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className=" hover:scale-105 hover:bg-gray-950 focus:scale-105 active:scale-110 self-center sm:self-start group flex items-center justify-center gap-3 h-[3rem] w-[8rem] rounded-full outline-none transition-all bg-gray-900 text-white dark:bg-white/10 dark:text-gray-200"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className=" h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <span className=" text-xs transition-all opacity-70 group-hover:-translate-y-1 group-hover:translate-x-1">
            <FaPaperPlane />
          </span>
        </>
      )}
    </button>
  );
}

export default SubmitButton;
