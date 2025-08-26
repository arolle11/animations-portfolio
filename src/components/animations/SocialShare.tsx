import { motion } from "motion/react";

const SocialShare = () => {
  return (
    <div className="flex justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#f1f1f1] text-white gap-8 p-8 rounded-md">
      <motion.button className="bg-white text-[#6fc5ea] flex justify-center items-center px-6 py-4 rounded-lg">
        <motion.span className="text-sm">Share</motion.span>
      </motion.button>
    </div>
  );
};
export default SocialShare;
