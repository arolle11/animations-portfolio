import { ArrowRight, Check, Heart, Plus, Tally1 } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const ButtonAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    setTimeout(() => setShowIcon(true), 200);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowIcon(false);
  };
  return (
    <div className="grid max:sm-grid-flow-col sm:grid-cols-3 gap-12 mt-4">
      {/* simple button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-primary text-white rounded-md cursor-pointer"
      >
        Simple Button
      </motion.button>

      <motion.div
        className="flex justify-center items-center"
        onClick={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.button
          initial={{ width: 164, borderRadius: "1.5rem", scale: 1 }}
          animate={{
            width: isHovered ? 40 : 164,
            borderRadius: isHovered ? "50%" : "1.5rem",
            scale: isClicked ? 1.1 : 1,
          }}
          transition={{
            width: { duration: 0.2, ease: "easeInOut" },
            borderRadius: { duration: 0.2, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 500, damping: 15 },
          }}
          className="h-10 bg-[#d35ffa] text-white cursor-pointer flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence>
            {isHovered && showIcon ? (
              <motion.div
                key="icon"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 15,
                }}
              >
                <Check size={20} />
              </motion.div>
            ) : (
              !isHovered && (
                <motion.span
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="px-2 fixed
                  "
                >
                  Simple Button
                </motion.span>
              )
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      <motion.button
        initial={{ background: "#ffffff" }}
        animate={{
          x: [0, -5, 0, 5, 0],
          background: isHovered2 ? "#ff5a45" : "#ffffff",
        }}
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
        className="px-4 py-2 bg-gray-100/50 transition-colors duration-300 text-white rounded-full cursor-pointer flex items-center justify-center shadow-md"
      >
        <Heart
          size={20}
          color={isHovered2 ? "#ffffff" : "#ff5a45"}
          fill={isHovered2 ? "#ffffff" : "#ff5a45"}
        />
      </motion.button>
      {/* simple button */}

      {/* reverse button */}
      <motion.button className="px-4 py-2 bg-black/80 text-white rounded-full">
        <motion.span>Blur-Lift</motion.span>
      </motion.button>

      <motion.button className="px-4 py-2 bg-black/80 text-white rounded-full">
        <motion.span className="flex items-center gap-2">
          Glide-Over <ArrowRight size={20} />
        </motion.span>
      </motion.button>

      <motion.button className="px-4 py-2 bg-black/80 text-white rounded-full">
        <motion.span className="flex items-center">
          <Tally1 size={20} /> Vortex-Blur
        </motion.span>
      </motion.button>
      {/* reverse button */}

      {/* Playful button hovers */}
      <motion.button className="px-4 py-2 bg-[#362a89] text-white rounded-full">
        <motion.span>Button</motion.span>
      </motion.button>

      <motion.button className="px-4 py-2 bg-[#362a89] text-white rounded-full">
        <motion.span>Playful hover</motion.span>
      </motion.button>

      <motion.button className="px-4 py-2 bg-[#362a89] text-white rounded-full">
        <motion.span>Simple</motion.span>
      </motion.button>
      {/* Playful button hovers */}

      {/* Follow Buttons */}
      <motion.button className="px-4 py-2 bg-[#2b2f44] text-white rounded-full ">
        <motion.span className="flex items-center justify-center gap-2">
          Follow <Plus size={20} />
        </motion.span>
      </motion.button>

      <motion.button className="px-4 py-2 bg-[#2b2f44] text-white rounded-full ">
        <motion.span>Follow</motion.span>
      </motion.button>

      <motion.button className="px-4 py-2 bg-[#2b2f44] text-white rounded-full ">
        <motion.span>Follow</motion.span>
      </motion.button>
      {/* Follow Buttons */}

      {/* Add to Cart */}
      <motion.button className="px-4 py-2 bg-[#4f41eb] text-white rounded-full ">
        <motion.span className="flex items-center justify-center gap-2">
          Add to Cart <Plus size={20} />
        </motion.span>
      </motion.button>

      <motion.button className="px-4 py-2 bg-[#4f41eb] text-white rounded-full ">
        <motion.span>Add to Cart</motion.span>
      </motion.button>

      <motion.button className="px-4 py-2 bg-[#4f41eb] text-white rounded-full ">
        <motion.span>Add to Cart</motion.span>
      </motion.button>
      {/* Add to Cart */}
    </div>
  );
};
export default ButtonAnimation;
