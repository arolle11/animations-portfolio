import { X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const SocialShare = () => {
  const [isClick, setIsClick] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsClick(true);
    setTimeout(() => setIsClick(false), 200);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsClick(false);
  };
  return (
    <div className="flex max-md:flex-col justify-center items-center md:min-w-[500px] min-w-[300px] min-h-[500px] bg-[#daf9ff]  text-white gap-8 p-8 rounded-md">
      <motion.button
        onClick={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={{
          width: 120,
          borderRadius: "0.375rem",
          scale: 1,
          fontSize: "1rem",
          padding: "16px 32px",
          backgroundColor: "white",
        }}
        animate={{
          width: isHovered ? 48 : 120,
          borderRadius: isHovered ? "100%" : "0.375rem",
          scale: isClick ? 1.1 : 1,
          padding: isHovered ? "16px" : "16px 32px",
          backgroundColor: isHovered ? "#d6e1e3" : "white",
        }}
        className="bg-white text-[#6fc5ea] flex justify-center items-center"
      >
        {isHovered ? (
          <div className="flex flex-col">
            {/* <button className="bg-white rounded-full p-4 "></button> */}
            <motion.span className="text-sm">
              <X className="w-4 h-4" color="white" />
            </motion.span>
          </div>
        ) : (
          <motion.span className="text-sm">Share</motion.span>
        )}
      </motion.button>
    </div>
  );
};
export default SocialShare;
