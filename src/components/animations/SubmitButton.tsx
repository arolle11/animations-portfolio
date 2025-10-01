import { motion } from "motion/react";

export default function SubmitButton() {
  return (
    <div className="flex justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#f1f1f1] text-white gap-8 p-8 rounded-md">
      <motion.button className="bg-white text-[#31c3f8] flex justify-center items-center px-12 py-4 rounded-4xl border-4 border-[#31c3f8]">
        <motion.span className="text-base">Submit</motion.span>
      </motion.button>
    </div>
  );
}
